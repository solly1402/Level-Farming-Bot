# Level-Farming-Bot
# Discord Self-Bot Collection

This repository **Discord self-bots**, each with a separate `keep_alive.js` file to ensure continuous operation on hosting platforms like Render.com, Heroku, or Replit.

**Warning**: Using self-bots violates Discord's Terms of Service and may result in account bans. Use only for educational purposes or on private servers.

---

## Common Requirements

- **Node.js**: Version 16+ ([Download here](https://nodejs.org/)).
- **Discord Token**: Your Discord account token (see how to get it below).
- **Permissions**: Must have message-sending rights; message deletion is optional.
- **Dependencies**: `discord.js-selfbot-v13` and `express` (for keep_alive).
- **Files**: Each bot uses `keep_alive.js` for uptime.

### How to Get Discord Token
1. Log in to Discord in a browser.
2. Press `F12` > "Network" tab.
3. Refresh page, find a request to `discord.com`.
4. In "Headers", find `Authorization`, copy the token.
5. **Note**: Keep your token private!

---

## 1. Level Farming Bot

### Overview
This bot sends random words/symbols to farm levels (e.g., with Mee6) in a Discord server.

### Features
- Sends a random item from a list of **~120 words/symbols** every 1 minute.
- Examples: "Apple", "@", "✨", "follow discord @solly1402", "Dream", "🔥", "Castle", "🌙".
- **Command `!start`**: Starts the bot, sends `😭`, deletes the command (if permissions allow).
- **Command `!stop`**: Stops the bot, sends "skibidi toilet", deletes the command (if permissions allow).
- **Keep Alive**: Uses `keep_alive.js` to run a server on port 3000 (or `PORT` env) for hosting.

### Word/Symbol List
- Words: "Apple", "Thunder", "follow discord @solly1402", "Dream", "Rocket", "Castle", "Wizard", etc.
- Symbols: "@", "#", "✨", "⚡", "★", "∞", "☕", "🔥", "🌙", "🏀", etc.
- **New Additions**: Includes ~29 new items like "Sword", "Nebula", "Tornado", "Phoenix", "🦇".

### Installation

#### Local Setup
1. **Clone or Download**: `git clone <repository_url>` or download ZIP.
2. **Install Dependencies**:
   - Open terminal in the folder.
   - Run: `npm install discord.js-selfbot-v13 express`.
3. **Configure Token**:
   - Open `levelbot.js`.
   - Replace `'YOUR_DISCORD_TOKEN_HERE'` with your token, or use:
     - Windows: `set TOKEN=your_token_here`
     - Linux/Mac: `export TOKEN=your_token_here`
4. **Run**: `node levelbot.js`.

#### Hosting Setup (Render.com/Heroku/Replit)
1. **Push to GitHub**: Create a repo, push code (no hardcoded token).
2. **Configure**:
   - **Render.com**:
     - Create a new Node.js app, link GitHub.
     - Add env variable: `TOKEN=your_token_here`.
     - Set start command: `node levelbot.js`.
     - Deploy.
   - **Heroku**:
     - Create app, link GitHub.
     - "Settings" > "Config Vars" > Add `TOKEN`.
     - Deploy.
   - **Replit**:
     - Import from GitHub.
     - "Secrets" > Add `TOKEN`.
     - Run.
3. **Verify**: Bot stays online with keep_alive.

### Usage
- **Start**: Send `!start` in the desired channel.
- **Stop**: Send `!stop` in the same channel (sends "skibidi toilet").

### Customization
- **Frequency**: Edit `60 * 1000` in `setInterval` (in ms).
- **Add Items**: Modify `randomWords` array.

---

## Notes

- **Risk**: Discord may ban accounts for self-bot usage or spamming.
- **Security**: Do not push token to GitHub; use `TOKEN` env variable.
- **Keep Alive**: `keep_alive.js` uses port 3000 by default, or `PORT` env if set (required for Render.com).

## Support

Issues? Open a GitHub Issue or contact the creator.

Happy botting! 😭

Support Many bot level now
