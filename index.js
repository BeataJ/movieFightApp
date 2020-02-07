const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apykey: '40eae946',
      s: 'avengers'
    }
  });
};
