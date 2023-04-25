const apiKey = "orQ8kRhbZvmDImUZNSZSZx4PzCe5b97x";
const baseURL = "http://dataservice.accuweather.com/";

const getCityURL = (cityName) =>
  `${baseURL}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`;

const getCityWeatherURL = (cityKey) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error("Não foi possível obter os dados da cidade");

    return response.json();
  } catch ({ name, message }) {
    alert(`${name} : ${message}`);
  }
};

const getCityData = (cityName) => fetchData(getCityURL(cityName));

const getCityWeather = (cityKey) => fetchData(getCityWeatherURL(cityKey));
