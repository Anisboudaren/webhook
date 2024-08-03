const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Express server");
});

// Route to handle WordPress webhook
app.post('/webhook', (req, res) => {
    const webhookData = req.body;
    
    // Process the webhook data
    console.log('Received webhook data:', webhookData);

    // Respond to the webhook
    res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
