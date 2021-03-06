// edit it to change the bot's name
const botname = 'BINA'
const botadminnum = 'https://wa.me/qr/5PFVJLRLZHCSD1'

function help(prefix, pushname) {
    return `ðï¸Hi ${pushname}, I'm *${botname}*!
_Prefix_ - ${prefix}
ð *Command List* ðï¸ _[New commands added ð¤© Type *${prefix}new* to know the new commands]_
ðï¸ *Non-Command List* ðï¸ _[Non commands, only type for reply ð¤© Type *${prefix}nc* to know the non commands]_
ðï¸ *Adding bot to a group* ðï¸ _Contact the bot owner to add the bot to a group_
ðï¸ *ENSURE TO KEEP A DIFFERENCE OF AT LEAST 5s BETWEEN COMMANDS TO PREVENT SPAMMING* ð
ð¸ *_CMD: ${prefix}info_* [Do make sure to check this out, request of my owner-sama]
*Description: Displays the information about the bot* ðï¸
*Description: Displays the information of the user*
ð¸ *_CMD: ${prefix}profile_* / *_${prefix}profile @user_*
ð¸ *_CMD: ${prefix}online_*
*Description: Replies the online status of the bot*
ð¸ *_CMD: ${prefix}sticker_* / *_${prefix}st_* & *_${prefix}sticker nocrop_* / *_${prefix}st nocrop_*
*Description: Turns images and gifs into stickers* ðï¸
Usage: *${prefix}sticker* as caption of a picture/gif or reply to a picture/gif and *${prefix}sticker nocrop* as caption of a picture/gif or reply to a picture/gif to give non-cropped stickers
ð¸ *_CMD: ${prefix}stickermeme_* / *_${prefix}stcmeme_*
*Description: Create a sticker meme* ðï¸
Usage: *(Don't use emojis and include '|' always)* Send images with caption *${prefix}stickermeme* upper_text | bottom_text or reply to the images with a caption *${prefix}stickermeme* upper_text | bottom_text
ð¸ *_CMD: ${prefix}doge_* / *_${prefix}dogesticker_*
*Description: Returns random doge stickers* ð¶ï¸
ð¸ *_CMD: ${prefix}wholesome_* / *_${prefix}wh_*
*Description: Returns random wholesome stickers* ðï¸
ð¸ *_CMD: ${prefix}animesticker_* / *_${prefix}astick_*
*Description: Returns random anime character stickers* ðï¸
ð¸ *_CMD: ${prefix}toimg_*
*Description: Turns stickers into images* ð ï¸
ð¸ *_CMD: ${prefix}triggered_* / *_${prefix}triggered nocrop_*
*Description: Turns images into triggered stickers* ðï¸
Usage: ${prefix}triggered / ${prefix}triggered nocrop as caption of picture or reply
ð¸ *_CMD: ${prefix}wasted_*
*Description: Turns images into wasted stickers* ðï¸
Usage: ${prefix}wasted as caption of picture or reply
ð¸ *_CMD: ${prefix}ocr_*
*Description: Scan ENGLISH text from image*
Usage: Send images with caption *${prefix}ocr* or reply to the images/stickers with a caption *${prefix}ocr*ð¼
ð¸ *_CMD: ${prefix}kissu @user_* [Don't know why my owner-sama decide to add this]
*Description: Kiss someone ( Í¡Â° ÍÊ Í¡Â°)* â¤ï¸
Usage: Send image with caption *${prefix}kissu* or reply image with caption *${prefix}kissu*.
ð¸ *_CMD: ${prefix}phcomment_*
*Description: Create a Pornhub comment section styled image* ð
Usage: *(Don't use emojis and include '|' always)* *${prefix}phcomment* username | text
ð¸ *_CMD: ${prefix}pokemon_*
*Description: Returns picture of a random Pokemon* ðºï¸
Usage: _${prefix}pokemon pikachu_ as the caption or reply of any picture
ð¸ *_CMD: ${prefix}waifu_*
*Description: Returns picture of a random waifu* ðï¸
ð¸ *_CMD: ${prefix}kemono_*
*Description: Returns picture of a random kemono* ðï¸
ð¸ *_CMD: ${prefix}foxy_*
*Description: Returns picture of a random foxgirl* ðï¸
ð¸ *_CMD: ${prefix}anime <anime name>_*
*Description: Returns the information of the given anime* ðºï¸
Usage: ${prefix}anime sakura trick
ð¸ *_CMD: ${prefix}manga <manga name>_*
*Description: Returns the information of the given manga*
Usage: ${prefix}manga sakura trick
ð¸ *_CMD: ${prefix}tod_*
*Description: Play truth or dare*
ð¸ *_CMD: ${prefix}tts <language-code> <text>_* [Disabled due to ban-risk]
*Description: Converts text to speech* ð£ï¸
Usage: ${prefix}tts en I love Emilia
ð¸ *_CMD: ${prefix}nightcore_* [Don't know why my owner-sama decide to add this]
*Description: Create a nightcore effect aka speeds up voice* ð£ï¸
Usage: Reply audio/voice with caption *${prefix}nightcore*
ð¸ *_CMD: ${prefix}cat_*
*Description: Displays picture of a random cat* ðï¸
ð¸ *_CMD: ${prefix}doggo_*
*Description: Displays picture of a random pup* ðï¸
ð¸ *_CMD: ${prefix}rpaper_*
*Description: Displays a random wallpaper* ðï¸
ð¸ *_CMD: ${prefix}animeneko_*
*Description: Displays picture of an anime cat ;)* ð±
ð¸ *_CMD: ${prefix}wallpaper <keyword>_*
*Description: Returns a random ANIME wallpaper based on the keyword* ð±ï¸
Usage: ${prefix}wallpaper Black Butler
ð¸ *_CMD: ${prefix}cuddle, ${prefix}gecg, ${prefix}smug, ${prefix}baka, ${prefix}tickle, ${prefix}slap, ${prefix}poke, ${prefix}pat, ${prefix}kiss, ${prefix}hug {Still on beta}_*
*Description: Returns a random ANIME image of the given command*
ð¸ *_CMD: ${prefix}covid <country>_*
*Description: Displays the live stats of Covid-19 of the given country* ðï¸
Usage: ${prefix}covid Japan
ð¸ *_CMD: ${prefix}meme_*
*Description: Returns a random meme* ð·ï¸
ð¸ *_CMD: ${prefix}sr <subreddit_title>_*
*Description: Displays an IMAGE post from the given subreddit* ð»ï¸
Usage: ${prefix}sr IndianDankMemes
ð¸ *_CMD: ${prefix}aiquote_*
*Description: Returns a quote that will either give you existential crises or wisdom* ð ï¸
ð¸ *_CMD: ${prefix}pickup_*
*Description: Replies a pickup line* ð
ð¸ *_CMD: ${prefix}groupinfo_*
*Description: Displays the information of the group* â±ï¸
ð¸ *_CMD: ${prefix}roll_*
*Description: Rolls a dice* ð²
ð¸ *_CMD: ${prefix}flip_*
*Description: Flips a coin* ð¡
ðï¸ *ADMIN COMMANDS* ðï¸
*Only group admins can execute this command
ð¹ *_CMD: ${prefix}ping <text>_*
*Description: Tags all members in the group* ðï¸
Usage: ${prefix}ping Well, in that case
*To execute the following commands the bot and the executor needs to be admin
ð¹ *_CMD: ${prefix}snap @user_*
*Description: Kicks the mentioned person from the group* ðï¸
ð¹ *_CMD: ${prefix}promote @user_*
*Description: Makes the metioned user admin* ðï¸
ð¹ *_CMD: ${prefix}demote @user_*
*Description: Demotes the mentioned user from adminship* ðï¸
ð *NSFW* ð
Type *_${prefix}nsfw_* for NSFW related commands
To activate NSFW related commands, contact the bot owner to know how to activate
There are many hidden and fun keywords ;)
Hope you have a great day!`
}

function newbot() {
    return `Type *${prefix}help* to see details of commandsð
*[UPDATE log: 18/05/2021]*
*STICKER RELATED*
_${prefix}stickermeme_
_${prefix}triggered_
_${prefix}wasted_
_${prefix}dogesticker_
_${prefix}wholesome_
_${prefix}animesticker_
*IMAGE RELATED*
_${prefix}foxy_
_${prefix}kemono_
_${prefix}cuddle_
_${prefix}gecg_
_${prefix}smug_
_${prefix}baka_
_${prefix}tickle_
_${prefix}slap_
_${prefix}poke_
_${prefix}pat_
_${prefix}pat_
_${prefix}kiss_
_${prefix}hug_
*MISCELLANEOUS*
_${prefix}ocr_
_${prefix}tod_
_${prefix}phcomment_
_${prefix}nightcore_
_${prefix}kissu_
_${prefix}pickup_
*NSFW*
Type _${prefix}nsfw_ for NSFW related commands
Contact the bot owner to know the activation code`
}

function info() {
    return `*INFO!*
*[UPDATE log: 18/05/2021]*
_Message from *Owner*:_
_Bot is still at *beta stage* and it maybe unresponsive at times due to massive command spamming, so ensure to keep a time difference between usage of commands and this bot is not like a regular bot, it's hosted on a PC, so it can't be online 24/7 (I'm still working on it) so it gets shuts down at night(GST timing) and doesn't work until I'm awake ð (Sorry for that again ð). Also, don't call this number, you will be instantly blocked. Anyways, enjoy using the bot and if you face any problems or have any suggestions or wanna inquire more about it, contact me: ${botadminnum}_`
}

function nc() {
    return `ðï¸Hi I'm *${botname}*!
*[UPDATE log: 18/05/2021]*
*Non - Commands List*
_hey bina_
_fuck you bina_
_fuck off bina_
_thank you bina_
Only messages it responds to and gives same replies`
}

function nsfwc(prefix) {

return `ð *NSFW COMMANDS for normies* ð
*_${prefix}porn_*     - sends random NSFW pics
*_${prefix}gonewild_* - sends random NSFW girl pics
ð *NSFW COMMANDS for weebs* ð
*_${prefix}lewds_*   - Sends lewd pics
*_${prefix}waifu18_* - Sends waifu 18+ pics
*_${prefix}fetish_*  - Sends fetish pics
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao
*_${prefix}hentai_*
*_${prefix}lewdavatar_*
*_${prefix}yuri_*
*_${prefix}femdom_* / *_${prefix}femdomanime_*
*_${prefix}kuni_*
*_${prefix}neko_*
*_${prefix}cumsluts_*
*_${prefix}classic_*
*_${prefix}bj_*
*_${prefix}pussy_*
*_${prefix}nkemono_*
*_${prefix}keta_*
*_${prefix}holo_*
*_${prefix}cumarts_*
*_${prefix}kitsune_*
*_${prefix}trap_*
*_${prefix}spank_*`
}


module.exports = { help, newbot, info, nc, nsfwc }
