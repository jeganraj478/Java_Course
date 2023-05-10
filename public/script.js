const btn = document.querySelector("#submitButton");

btn.addEventListener('click', () => {

    const city = document.querySelector("#textBox").value;
    if (city) {
        const api_key = "8453c2742f2c0bf228eb3ecf910381d0";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let city = data.name;
                let temperature = data.main.temp;
                let temp = Math.round(temperature - 273.15) + " C"
                let iconurl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                document.querySelector("#icon").src = iconurl;
                document.querySelector("#temperature").textContent = temp;
                document.querySelector("#city").textContent = city;

            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
            document.querySelector("#textBox").value="";
    }
})
