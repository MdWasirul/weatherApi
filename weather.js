// const api =
//   "http://api.weatherapi.com/v1/current.json?key=b2702472c48841b1823172928240304&q=hyderabad&aqi=yes";
// const api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const apiId = "b431726f5f8a7e2f1456f5d480d43955";
const button = document.querySelector("#search-btn");
const searchCity = document.querySelector("#enter-city");
const showData = document.querySelector(".showData");
const input = document.querySelector("#enter-city");
const information = document.querySelector(".information");

const getApi = async (city) => {
  const api2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b431726f5f8a7e2f1456f5d480d43955&units=metric`;
  const response = await fetch(`${api2}`);
  console.log(response);
  const data = await response.json();
  console.log(data);
  // console.log("heloo");
  // console.log(data.main.pressure);
  if (data.cod === "404") {
    console.log("City is not Founded");
    // showData.innerHTML="";
    return;
  }

  showData.innerHTML = "";
  const name = document.createElement("div");
  name.classList.add("name");
  let p = document.createElement("p");
  p.innerHTML = `${data.name}`;
  console.log("Name=", data.name);

  const date = document.createElement("div");
  date.classList.add("date");
  let para2 = document.createElement("p");
  const myUnixTimestamp = data.dt; // start with a Unix timestamp
  const myDate = new Date(myUnixTimestamp * 1000).toLocaleString(); // convert timestamp to milliseconds and construct Date object
  para2.innerHTML = myDate;
  console.log("MyDate=", myDate);
  // console.log(myDate); // will print "Thu Aug 10 2023 01:13:20" followed by the local timezone on browser console

  const temp = document.createElement("div");
  temp.classList.add("temp");
  temp.innerHTML = `<p>Temperature:</P>`;
  let para3 = document.createElement("p");
  para3.innerHTML = Math.round(data.main.temp) + "°C";
  console.log("Temperature=", Math.round(data.main.temp) + "°C");

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  humidity.innerHTML = `<p>humidity:</P>`;
  let para4 = document.createElement("p");
  para4.innerHTML = data.main.humidity + "%";
  console.log("Humidity=", data.main.humidity + "%");

  const wind = document.createElement("div");
  wind.classList.add("wind");
  wind.innerHTML = `<p>wind:</p>`;
  let para5 = document.createElement("p");
  para5.innerHTML = data.wind.speed + "km/h";
  console.log("Wind speed=", data.wind.speed + "km/h");

  showData.appendChild(name);
  name.appendChild(p);
  showData.appendChild(date);
  date.appendChild(para2);
  showData.appendChild(temp);
  temp.appendChild(para3);
  showData.appendChild(humidity);
  humidity.appendChild(para4);
  showData.appendChild(wind);
  wind.appendChild(para5);
  // information.style.visibility = "hidden";
  information.style.display = "none";
  showData.style.backgroundImage =
    " linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
};
// searchCity.addEventListener("click", getApi);
// button.addEventListener("click", getApi);

button.addEventListener("click", () => {
  if (searchCity.value === "") {
    alert("please enter city Name");
  } else {
    getApi(searchCity.value);
  }
  searchCity.value = "";
});
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // or enter=13  e.keyCode===13
    e.preventDefault();
    getApi(searchCity.value);
    searchCity.value = "";
  }
});
