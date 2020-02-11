const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '40eae946',
      s: searchTerm
    }
  });

  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = e => {
  fetchData(e.target.value);
};

input.addEventListener('input', debounce(onInput, 500));
