const Discord = require('discord.js'); // Importer discord.js indtil din bot 
const { MessageEmbed } = require('discord.js') // Gør sådan vi, kan skrive MessageEmbed istedet for Discord.MessageEmbed
const bot = new Discord.Client(); // Den her laver en ny discord bruger
const Beatz_login = "DIN DISCORD BOT TOKEN HER!!"; // Dette er til din bots token




// Ready Evevt

bot.on('ready', () => {
  console.log(`Logged ind som ${bot.user.tag}!`); // Dette vil botten sige når den går online
  bot.user.setActivity("Din STATUS her") // Dette er status til discord bot
 


});

// Auto Mod System!

bot.on('message', (message) => { // MessageEvent
  if(message.content === `status`) { // Her skal det ord, du vælger som botten skal slette
   
    message.delete() // Vi beder botten om at slette, den bedsked medlemmer skriver.
    message.channel.send(new MessageEmbed() // Her laver du en ny message embed
      .setTitle('?status') // Sæt din title
      .setDescription('Status:, Online 🟢')
      .addField('Tak fordi du valdte hvors teamplate;D', 'Tryk [her For at joine hvors discord](https://docs.google.com/forms/d/e/1FAIpQLSewf59jc3gf9sDvvUblVtAtsMntR1vq97vq78tkiB97UTOobA/viewform)) og få hjælp'  )
      .setColor('C60000') // Sæt Din Farve
      .setTimestamp()
     
    )
  }
})

bot.login(Beatz_login); 
