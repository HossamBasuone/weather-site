var search = document.querySelector("input");
var botn = document.querySelector("#botn")

var row = document.querySelector("#row");
const today = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[today.getDay()];
console.log()



const todaym = new Date();
const dayOfMonth = todaym.getDate();
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthName = months[todaym.getMonth()]; 
const formattedDate = `${dayOfMonth}${monthName}`;



botn.addEventListener("click", function () {
  get(search.value);
  display();
});
search.addEventListener("input", function () {
  get(search.value);
  display();
});




var big = [];
async function get(country) {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=63ffea778fe04d7d806135143240412&q=${country}&days=3`
    );
    const data = await res.json();
    big = data; // Store the fetched data in the global variable
    return data; // Return the data for immediate use
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}





function display() {
  var cartona = "";

  for (var i = 0; i < 1; i++) {
    cartona += ` <div class="col-lg-4 p-0">
<div class="item ">
  <div class="first-tittle p-2 tittle  d-flex justify-content-between">
    <p>${dayName}</p>
    <p>${formattedDate}</p>
  </div>
  <div class="other text-center p-5">
<p>${big.location.name}</p>
<h1 class="">${big.current.temp_c}&deg;C</h1>
        <img src="${big.current.condition.icon}" alt="">
        <p class="text-primary">${big.current.condition.text}</p>
        <div class="d-flex justify-content-around mt-3 ">
        <i class="fa-solid fa-umbrella">${big.forecast.forecastday[0].day.daily_chance_of_rain}%</i>
        <i class="fa-solid fa-wind">${big.current.wind_kph}</i>
        <i class="fa-solid fa-compass">${big.current.wind_dir}</i>
        </div>

  </div>
</div>
 </div>`;
  }

  for (var j = 1; j < 3; j++) {
    const bgClass = j === 1 ? "bg-color-1" : "bg-color-2";
    const bghead = j === 1 ? "bg-head-1" : "bg-head-2";
    cartona+=`<div class="col-lg-4">
            <div class="item  ">
              <div class="middle text-center ${bghead} p-2">
${daysOfWeek[(today.getDay()+j)%7]}     
         </div>
              <div class="otherm text-center ${bgClass}">
                <img src="${big.forecast.forecastday[j].day.condition.icon}" class="mt-3" alt="ljfkds">
                <p class="fs-3 mt-3 text-white  ">${big.forecast.forecastday[j].day.maxtemp_c}&deg;C</p>
                <p>${big.forecast.forecastday[j].day.mintemp_c}&deg;C</p>
                <p>${big.forecast.forecastday[j].day.condition.text}</p>
              </div>
            </div>
          </div>`
 

  }
 

  row.innerHTML = cartona;
}

async function first() {
  try {
    const result = await get("cairo"); // Wait for the `get` function to resolve
    console.log("Fetched data:", result); // Log the fetched data
    // `big` is now updated and can be used elsewhere
  } catch (error) {
    console.error("Error in first():", error);
  }
  display()
}

first();