const fetchData = async searchTerm => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '40eae946',
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');
const onInput = e => {
  e.preventDefault();

  fetchData(e.target.value);
};

input.addEventListener('input', onInput);
