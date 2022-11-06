const key = "0ed49a574eedf672b4945cad24294d36";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      name.innerText = `${data.name},`;
      weather.innerText = `${data.weather[0].main}`;
    });
}
function errorGeo() {
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeo, errorGeo);
