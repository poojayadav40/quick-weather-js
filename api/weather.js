export default async function handler(req, res) {
    const { city } = req.query;
    const apiKey = process.env.WEATHER_API_KEY; // Vercel se key read karega

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
        );
        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
}