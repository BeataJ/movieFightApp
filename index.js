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

const debounce = func => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, 1000);
  };
};

const onInput = e => {
  fetchData(e.target.value);
};

input.addEventListener('input', debounce(onInput));
