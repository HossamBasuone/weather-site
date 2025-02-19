# 🌤 **Weather Site**  

A simple and responsive **weather forecasting web app** that provides real-time weather data and a **3-day forecast**. Built using **HTML, CSS, Bootstrap, and JavaScript**, the app fetches live weather information from **WeatherAPI**.  

---

## 🚀 **Live Demo**  
🔗 **[View Live Project](https://hossambasuone.github.io/weather-site/)**  

---

## ✨ **Features**  
✔️ **Search for any city** and get instant weather updates 🌍  
✔️ Displays **current temperature, wind speed, and rain probability** ⛅  
✔️ **3-day weather forecast** 📅  
✔️ Fetches and updates weather data dynamically using **Fetch API** 🔄  
✔️ Fully **responsive and modern UI** using Bootstrap 🎨  

---

## 🛠 **Technologies Used**  
- **HTML5 & CSS3** – Structure & styling  
- **Bootstrap 5** – Responsive design  
- **JavaScript (Fetch API)** – Handles API requests  
- **WeatherAPI.com** – Fetches real-time weather data  

---

## ⚙️ **Installation & Running Locally**  

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/HossamBasuone/weather-site.git
cd weather-site
```

### 2️⃣ **Open the Project**  
Simply open **index.html** in your browser.  

OR, for a better experience (especially for API calls), run a local server:  
```bash
# If you have Python installed:
python -m http.server 5500
```
Then, open **http://localhost:5500/** in your browser.  

---

## 📝 **How It Works**  

1️⃣ Enter a **city name** in the search bar.  
2️⃣ Click the **Search** button or press Enter.  
3️⃣ The app fetches the weather data from **WeatherAPI** and displays:  
   - 🌡 **Current temperature**  
   - ⛅ **Weather condition** (e.g., sunny, cloudy, rainy)  
   - 💨 **Wind speed**  
   - ☔ **Chance of rain**  
   - 📅 **3-day forecast**  

---

## 🔧 **API Key Configuration**  

This project uses **WeatherAPI**. The API key is already included in the code:  
```js
const res = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=63ffea778fe04d7d806135143240412&q=${country}&days=3`
);
```
### 🔹 To use your own API key:  
1️⃣ Sign up at **[WeatherAPI.com](https://www.weatherapi.com/)** to get a free API key.  
2️⃣ Replace the API key inside `js/js.js`:  
```js
const apiKey = "YOUR_API_KEY_HERE";
```


## 📸 Screenshots  
![image](https://github.com/user-attachments/assets/d99fd7d6-730e-4412-9712-36a348f0af37)
