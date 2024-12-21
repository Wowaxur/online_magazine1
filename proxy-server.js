const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5001;

// Прокси для запросов к Currents API
app.use('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://api.currentsapi.services/v1/', {
            params: req.query,
            headers: { 'apiKey': 'ksqDQDL82GBNc4etFokws3r0F5--96KSvCKmMUnDjgxxOY2R' },
        });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));