/**
 * @param {Object} message - The message object
 * @param {array} contrib - Users that are allowed to use that command
**/
module.exports = (message, contrib) => {
    try {
        if (contrib.includes(message.author.tag)) {
            message.channel.bulkDelete(message.content.substr(7));
        } else {
            return message.channel.send("Missing Permissions");
        }
    } catch (e) {
        console.log("[DISCORDCAPTCHA-clearMessages] >> " + e);
    }
};