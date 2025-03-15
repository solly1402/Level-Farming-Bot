const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ checkUpdate: false });

// Import keep_alive
require('./keep_alive');

// Get token from environment variable or use hardcoded fallback
const TOKEN = process.env.TOKEN || 'YOUR_DISCORD_TOKEN_HERE';

// List of 71 random words and special symbols
const randomWords = [
    'Apple', 'Zebra', '@', 'Blue', '#', 'Thunder', '%', 'Star', '&', 'River',
    'Moon', '$', 'Fire', '*', 'Cloud', '^', 'Ocean', 'Tree', '!', 'Shadow',
    '+', 'Wind', '=', 'Stone', '?', 'Light', '~', 'Forest', '-', 'Rain',
    '_', 'Sun', '>', 'Mountain', '<', 'Spark', ':', 'Wave', ';', 'Dust',
    '(', 'Flame', ')', 'Ice', '[', 'Sky', ']', 'Echo', '{', 'Glow',
    'follow discord @solly1402',
    '✨', '⚡', '★', '☄️', '♠️', '♣️', '♥️', '♦️', '☠️', '⚙️',
    '✈️', '☢️', '♻️', '✔️', '❌', '➡️', '⬆️', '⬇️', '⛔', '∞',
    // 20 new phrases and symbols
    'Dream', '☕', 'Rocket', '⚽', 'Galaxy', '♪', 'Pizza', '✌️', 'Storm',
    '☘️', 'Code', '⬅️', 'Magic', '🌟', 'Dragon', '🎮', 'Bubble', '🔥',
    'Knight', '🔔'
];

// Variables to track channel and state
let targetChannel = null;
let farmingInterval = null;

client.once('ready', () => {
    console.log(`Logged in successfully as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // Only process messages from the target channel (if set)
    if (targetChannel && message.channel.id !== targetChannel.id) return;

    const content = message.content.toLowerCase();

    // Handle !start command
    if (content === '!start') {
        targetChannel = message.channel;
        await message.channel.send('😭'); // Send confirmation
        console.log(`Started level farming in channel: ${targetChannel.id}`);

        try {
            await message.delete();
            console.log('Deleted !start message');
        } catch (error) {
            console.log('Could not delete !start message:', error);
        }

        if (farmingInterval) clearInterval(farmingInterval);

        farmingInterval = setInterval(async () => {
            const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
            await targetChannel.send(randomWord)
                .then(() => console.log(`Sent: ${randomWord}`))
                .catch((error) => console.error('Error sending message:', error));
        }, 60 * 1000); // Every 1 minute

        return;
    }

    // Handle !stop command
    if (content === '!stop' && targetChannel) {
        if (farmingInterval) {
            clearInterval(farmingInterval);
            farmingInterval = null;
            await targetChannel.send('skibidi toilet');
            console.log('Stopped level farming');
            try {
                await message.delete();
                console.log('Deleted !stop message');
            } catch (error) {
                console.log('Could not delete !stop message:', error);
            }
        } else {
            await targetChannel.send('Bot is not running to stop!');
        }
    }
});

client.on('error', (error) => {
    console.error('Error:', error);
});

client.login(TOKEN).catch((error) => {
    console.error('Login error:', error);
});
