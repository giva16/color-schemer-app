// Where we interact with the colors API to fetch our data'
const ApiHandler = (() => {
  const getData = async (seed, mode) => {
    const URL = `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=5`;
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  };

  return { getData };
})();

export default ApiHandler;
