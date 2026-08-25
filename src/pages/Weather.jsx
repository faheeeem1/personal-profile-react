import { useState } from "react";
import useWeather from "../hooks/useWeather";

function Weather() {
    const [city, setCity] = useState("");

    const {
        weather,
        loading,
        error,
        getWeather
    } = useWeather();

    const handleSubmit = (event) => {
        event.preventDefault();
        getWeather(city);
    };

    return (
        <section>
            <h2>Live Weather</h2>

            <form className="weather-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="city-input"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="Enter city name"
                />

                <button id="weather-button" type="submit">
                    Get Weather
                </button>
            </form>

            {loading && (
                <p>Loading weather...</p>
            )}

            {error && (
                <p>{error}</p>
            )}

            {weather && !loading && !error && (
                <div id="weather-result"> 
                    <h3>{weather.name}</h3>

                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                    />

                    <p>
                        {Math.round(weather.main.temp)}°C
                    </p>

                    <p>
                        {weather.weather[0].description}
                    </p>
                </div>
            )}
        </section>
    );
}

export default Weather;