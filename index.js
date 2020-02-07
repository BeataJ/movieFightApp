const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '40eae946',
      i: 'tt0848228'
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', e => {
  e.preventDefault();

  e.target.value;
});
