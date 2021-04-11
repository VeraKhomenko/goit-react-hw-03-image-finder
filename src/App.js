import React, { Component } from 'react';
import fetchHits from './API/api-finder';

import Container from './components/Container';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import Loader from './components/Loader';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',

    error: null,
    showModal: false,
    isLoading: false,
    largeImage: '',
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
    if (snapshot) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.hits.length === 0) return false;
    if (prevState.hits.length < this.state.hits.length) return true;
    return false;
  }
  handleClickButton = () => {
    this.fetchHits();
  };

  handleClickImage = imageItem => {
    this.setState({
      showModal: true,
      largeImage: imageItem,
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      largeImage: '',
      showModal: !showModal,
    }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      hits: [],
      currentPage: 1,
      error: null,
      isLoading: false,
      showModal: false,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    fetchHits
      .fetchHits(options)

      .then(hits => {
        this.setState(prevState => ({
          hits: [ ...prevState.hits, ...hits ],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  return;
  render() {
    const { showModal, hits, isLoading, error, largeImage, searchQuery } = this.state;

    return (
      <Container>

        <SearchBar onSubmit={this.onChangeQuery} />
        {error && <h1>Упс... Ошибочка</h1> || (hits.length === 0 && searchQuery && !isLoading && <h1>По вашему запросу ничего не найдено.</h1>)}
        <ImageGallery hits={hits} onClickImage={this.handleClickImage} />

        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={largeImage} />
        )}
        {isLoading && <Loader />}
        {hits.length > 0 && !isLoading && (
          <Button onClick={this.handleClickButton} />
        )}
      </Container>
    );
  }
}
export default App;
