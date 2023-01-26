function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement=document.querySelector("#city");
  let descriptionElement=document.querySelector("#description");
  let humdityElement=document.querySelector("#humdity");
  let windElement=document.querySelector("#wind");
  


  
  windElement.innerHTML=response.data.wind.speed;
  humdityElement.innerHTML = response.data.temperature.humidity;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML=response.data.condition.description;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response);}

let Key = "e30f73b3544toc0d6faf9afc4179ef7e";

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=lisbon&key=e30f73b3544toc0d6faf9afc4179ef7e&units=metric";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
