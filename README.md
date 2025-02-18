🌤 Weather Site
A simple weather forecasting web app that fetches real-time weather data using the WeatherAPI and displays a 3-day forecast. The app is built with HTML, CSS, Bootstrap, and JavaScript.

✨ Features
📍 Search for any city and get real-time weather data
🌡 Displays temperature, wind speed, and rain probability
🔄 Fetches and updates weather dynamically
🎨 Responsive and modern UI using Bootstrap
🚀 Live Demo
🔗 Weather Site - Live Preview

🛠 Technologies Used
HTML5 & CSS3
Bootstrap 5
JavaScript (Fetch API)
WeatherAPI.com for real-time data
⚙️ Installation & Running Locally
Follow these steps to run the project on your local machine:

1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/HossamBasuone/weather-site.git
cd weather-site
2️⃣ Open the Project
Simply open index.html in your browser.

OR use a local server (recommended for API calls):

bash
Copy
Edit
# If you have Python installed:
python -m http.server 5500
Then, open http://localhost:5500/ in your browser.

📝 How It Works
Enter a city name in the search bar.
Click the Search button (or type in the input field).
The app fetches the weather data from the WeatherAPI.
It displays:
Current temperature 🌡
Weather condition (e.g., sunny, rainy) 🌤️
Wind speed 💨
Chance of rain ☔
3-day forecast 📅
🔧 API Key Configuration
This project uses the WeatherAPI. The API key is already included in the code:

js
Copy
Edit
const res = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=63ffea778fe04d7d806135143240412&q=${country}&days=3`
);
If you want to use your own API key:

Sign up at WeatherAPI.com.
Replace the key in js/js.js:
js
Copy
Edit
const apiKey = "YOUR_API_KEY_HERE";

![image](https://github.com/user-attachments/assets/86277e55-b91a-4baf-950f-166ca1558c65)
