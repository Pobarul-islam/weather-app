const API_KEY = `e87d33a0b62e2c7cbf7b508dc3f9258f
`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].description);

  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
