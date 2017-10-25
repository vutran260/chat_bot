const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "vutran260@gmail.com", password: "xxxxxxxxx"}, (err, api) => {
    if(err) return console.error(err);
	

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
