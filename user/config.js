/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the GitHub repository and read the documentation:
 * 	https://github.com/eartharoid/DiscordTickets/wiki
 *
 * 	> IMPORTANT: Also edit the TOKEN in 'user/.env'
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Information: https://github.com/eartharoid/DiscordTickets/#readme
 * 	> Discord Support Server: https://go.eartharoid.me/discord
 * 	> Wiki: https://github.com/eartharoid/DiscordTickets/wiki
 *
 * ###############################################################################################
 */

module.exports = {
	prefix: '?',
	name: 'NL City Ticket Bot',
	presences: [
		{
			activity: 'Kijkt naar nieuwe tickets',
			type: 'PLAYING'
		},
		{
			activity: 'Kijkt naar nieuwe tickets',
			type: 'PLAYING'
		},
		{
			activity: 'Kijkt naar nieuwe tickets',
			type: 'WATCHING'
		}
	],
	append_presence: ' | ?new',
	colour: '#009999',
	err_colour: 'RED',
	cooldown: 3,
	guild: '835105422918549524', // ID of your guild (REQUIRED)
	staff_role: '835106422311747594', // ID of your Support Team role (REQUIRED)

	tickets: {
		category: '835107588139647007', // ID of your tickets category (REQUIRED)
		send_img: true,
    ping: '',
		text: `Hey jij!, {{ tag }}!
		Wij doen ons best alle tickets zo snel mogelijk te beantwoorden.
		Probeer je probleem duidelijk uit te leggen, Bij bans een BAN-ID! :)`,
		pin: false,
		max: 3,
		default_topic: {
			command: 'No topic given',
			panel: 'Created via panel'
		}
	},

	commands: {
		close: {
			confirmation: true,
			send_transcripts: true
		},
		delete: {
			confirmation: true
		},
		new: {
			enabled: true
		},
		closeall: {
			enabled: true,
		},
	},

	transcripts: {
		text: {
			enabled: true,
			keep_for: 90,
		},
		web: {
			enabled: false,
			server: 'https://tickets.example.com',
		},
		channel: '' // ID of your archives channel
	},

	panel: {
		title: 'Support Tickets',
		description: 'Hulp nodig?, Klik op het icoon en er word een Support-Ticket voor u geopend!.',
		reaction: '🧾'
	},

	storage: {
		type: 'sqlite'
	},

	logs: {
		files: {
			enabled: true,
			keep_for: 7
		},
		discord: {
			enabled: true,
			channel: '835108092970532905' // ID of your log channel
		}
	},

	debug: false,
	updater: true
};
