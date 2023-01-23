function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data.temperature.current);
}

let Key = "e30f73b3544toc0d6faf9afc4179ef7e";

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=paris&key=e30f73b3544toc0d6faf9afc4179ef7e&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
