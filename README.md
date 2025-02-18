Here's a well-structured and neatly formatted **README.md** file:  

---

# 🌤 Weather Site  

A simple weather forecasting web app that fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and displays a **3-day forecast**. The app is built with **HTML, CSS, Bootstrap, and JavaScript**.  

---

## ✨ Features  
✅ Search for any city and get real-time weather data 📍  
✅ Displays **temperature, wind speed, and rain probability** 🌡  
✅ Fetches and updates weather dynamically 🔄  
✅ Responsive and modern UI using **Bootstrap** 🎨  

---

## 🚀 Live Demo  
🔗 **[View Live Project](https://hossambasuone.github.io/weather-site/)**  

---

## 🛠 Technologies Used  
- **HTML5 & CSS3**  
- **Bootstrap 5**  
- **JavaScript (Fetch API)**  
- **WeatherAPI.com** (for real-time data)  

---

## ⚙️ Installation & Running Locally  

Follow these steps to run the project on your local machine:  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/HossamBasuone/weather-site.git
cd weather-site
```

### 2️⃣ Open the Project  
Simply open **index.html** in your browser.  

OR use a local server (recommended for API calls):  

```bash
# If you have Python installed:
python -m http.server 5500
```
Then, open **http://localhost:5500/** in your browser.  

---

## 📝 How It Works  

1. Enter a city name in the search bar.  
2. Click the **Search** button (or type in the input field).  
3. The app fetches the weather data from the **WeatherAPI**.  
4. It displays:  
   - 🌡 **Current temperature**  
   - 🌤 **Weather condition** (e.g., sunny, rainy)  
   - 💨 **Wind speed**  
   - ☔ **Chance of rain**  
   - 📅 **3-day forecast**  

---

## 🔧 API Key Configuration  

This project uses **WeatherAPI**. The API key is already included in the code:  

```js
const res = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=63ffea778fe04d7d806135143240412&q=${country}&days=3`
);
```
If you want to use your own API key:  

1️⃣ Sign up at **[WeatherAPI.com](https://www.weatherapi.com/)**.  
2️⃣ Replace the key in `js/js.js`:  

```js
const apiKey = "YOUR_API_KEY_HERE";
```

---

## 📸 Screenshots  
![image](https://github.com/user-attachments/assets/d99fd7d6-730e-4412-9712-36a348f0af37)
