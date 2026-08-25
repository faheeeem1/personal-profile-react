import { useState } from "react";

const API_KEY = "99e2b761fbf9f4ed46f4826f5e7ef916";

function useWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeather = async (city) => {
        if (!city.trim()) {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
                    city
                )}&units=metric&appid=${API_KEY}`
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Weather request failed"
                );
            }

            const data = await response.json();

            setWeather(data);
        } catch (error) {
            console.error("Weather API Error:", error);
            setError("Unable to load weather. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return {
        weather,
        loading,
        error,
        getWeather
    };
}

export default useWeather;