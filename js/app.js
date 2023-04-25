const cityForm = document.querySelector('[data-js="change-location"]');
const nameCity = document.querySelector(".my-3");

const cityNameContainer = document.querySelector('[data-js="city-name"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]'
);
const cityCard = document.querySelector('[data-js="city-card"]');
let timeImg = document.querySelector('[data-js="time"]');
const timeIconContainer = document.querySelector('[data-js="time-icon"]');

const showCityCard = () => {
  if (cityCard.classList.contains("d-none"))
    cityCard.classList.remove("d-none");
};

const showCityWeatherInfo = async (cityName) => {
  const [{ Key, LocalizedName }] = await getCityData(cityName);
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key);

  const timerIcon = `<img src="./src/icons/${WeatherIcon}.svg" alt="icon" />`;
  timeImg.src = IsDayTime ? "./src/day.svg" : "./src/night.svg";
  timeIconContainer.innerHTML = timerIcon;
  cityNameContainer.textContent = LocalizedName;
  cityWeatherContainer.textContent = WeatherText;
  cityTemperatureContainer.textContent = Temperature.Metric.Value;
  cityForm.reset(); // limpa o campo de input
};

const inputForm = (event) => {
  event.preventDefault();

  const inputValue = event.target.city.value;

  showCityCard();
  showCityWeatherInfo(inputValue);

  cityForm.reset(); // Limpa o campo de input
};

cityForm.addEventListener("submit", inputForm);
