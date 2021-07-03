const { Client } = require('discord.js');
const bot = new Client;
const cfg = require('./config.json');
const YTDL = require('ytdl-core');

   bot.on('message', (message) => {
     if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = cfg.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray[1];
    let option = messageArray[2];


    if(cmd === `${prefix}บอส`) {
        message.channel.send("บอสน่าหีจีง");
        message.reply("บอสโคตรน่าหี")
    }


    if(cmd === `${prefix}นุ่น`) {
        message.channel.send("ไอควยนุ่น");
        message.reply("ไอนุ่นต่อยกะกูมั้ย")
    }

    if(cmd === `${prefix}Muscle!!!`) {
        message.channel.send("กูไปยกเหวดก่อนนะ");
    }

    if(cmd === `${prefix}เจฟ`) {
        message.reply("เจฟคนนั้นที่หล่อเท่ขนาดนั้นอะนะ")
    }


    if(cmd === `${prefix}join`) {
        if(message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection =>{
                console.log("Successfully connected.");
            }).catch(e => {
                console.error(e);
            })
            // .then(connection => {
            //     message.reply('I have join to server')
            //  })
            //  .catch(console.log)
        } else {
            console.log('error')
            // message.reply("You need to join to Voice Channel")
        }
    }
    var queue = []
    var dispatcher;
    function Play(connection, message) {
        dispatcher = connection.playStream(YTDL(queue[0]), {filter: "audioonly"})
        dispatcher.on("end", function() {
            queue.shift();
            console.log(queue)
            
            
            if(queue[0]) {
                Play(connection, message)
            } else {
                connection.disconnect();
            }
    })
}
if(cmd === `${prefix}clear`) {
    queue = []
}
if(cmd === `${prefix}pause`) {
    dispatcher.pause();
}
if(cmd === `${prefix}resume`) {
    dispatcher.resume();
}
if(cmd === `${prefix}skip`) {
    dispatcher.end();
}

});