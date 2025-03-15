const express = require('express');

const app = express();

// Simple route to keep the bot alive
app.get('/', (req, res) => res.send('Bot is alive!'));

// Start server on port 3000 (or PORT from environment for Render.com compatibility)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Keep alive server running on port ${PORT}`);
});

module.exports = app; // Export the app (optional, not used here but good practice)
