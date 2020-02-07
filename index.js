const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: '40eae946',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
