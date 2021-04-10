import axios from 'axios';

const keyApi = '20390864-d4afb1d39cdd190c7156392aa';

axios.defaults.baseURL = `https://pixabay.com/api/?key={keyApi}&per_page=12`;

const fetchHits = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const fetchString = `https://pixabay.com/api/?key=${keyApi}&per_page=${pageSize}&q=${searchQuery}&page=${currentPage}`;
  return axios
    .get(fetchString)

    .then(response => response.data.hits)
    .catch(console.error);
};

export default { fetchHits };
