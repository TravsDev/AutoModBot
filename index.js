const { Client, MessageEmbed } = require('discord.js')
const bot = new Discord.Client(); // Den her laver en ny discord bruger
const Token_Discord = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; // Dette er til din bots token




// Ready Evevt

bot.on('ready', () => {
  console.log(`Logged ind som ${bot.user.tag}!`); // Dette vil botten sige når den går online
  bot.user.setActivity("danske Develepors") // Dette er status til discord bot
 


});

// Edit mig;D

bot.on('message', (message) => { // MessageEvent
  if(message.content === `fuck`) { // Her skal det ord, du vælger som botten skal slette
   
    message.delete() // Vi beder botten om at slette, den bedsked medlemmer skriver.
    message.channel.send(new MessageEmbed() // Her laver du en ny message embed
      .setTitle('Ups!?') // Sæt din title
      .setDescription('Dette er et banned ord!') // Plaser noget til din beskrivelse
      .setColor('C60000') // Sæt Din Farve fx #0000
      .setTimestamp()
     
    )
  }
})

bot.login(Token_Discord); 
