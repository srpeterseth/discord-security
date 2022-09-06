import Discord from 'discord.js';

const client = new Discord.Client({ intents: ['Guilds', 'GuildMembers', 'GuildBans'] });
export { client };

// Bind Events
import('./events');

client.login(process.env.DISCORD_BOT_TOKEN);
