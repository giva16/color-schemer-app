// Where we interact with the colors API to fetch our data'
const fetchData = ((seed, mode) => {
  const URL = `https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=6`;

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  };

  return { getData };
})();

export default fetchData;
