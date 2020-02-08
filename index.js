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

let timeoutId;
const onInput = e => {
  timeoutId = setTimeout(() => {
    e.preventDefault();

    fetchData(e.target.value);
  }, 100);
};

input.addEventListener('input', onInput);
