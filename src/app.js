function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Tursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours} ${minutes}`;
}

function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humdityElement = document.querySelector("#humdity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  windElement.innerHTML = response.data.wind.speed;
  humdityElement.innerHTML = response.data.temperature.humidity;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city_input");
  console.log(cityInputElement);
}

let key = "e30f73b3544toc0d6faf9afc4179ef7e";
let city = "tehran";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric
`;

axios.get(apiUrl).then(displayTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
