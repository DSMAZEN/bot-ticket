const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const ee = require("../../botconfig/embed.json");
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "auda"],
 
run: async (bot, message, args) => {
 
      message.react('887650847327158343');


                const embed = new Discord.MessageEmbed()
                .setTitle(`Tickets Premium`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`_**انقر على قائمة التحديد من أجل __تبديل__ صفحات المساعدة**_\n🏠- Home Page\n🎟️- Commands\n📔- About Me`)
                .setColor(`#0x2F3136`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Commands`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__اوامري الخاصى :__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
                .setColor(`#0x2F3136`)

                // Last embed
                const embed4 = new Discord.MessageEmbed()
                .setTitle(`Pirt_YT`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**سلام عليم قبل منبدى __صلي على نبي__**\n\n**[! Pirt YT#1739](https://www.youtube.com/channel/UCejGcNpkzNdoUqHvcVGfCHg) : مطور\n[Video](https://www.youtube.com/channel/UCejGcNpkzNdoUqHvcVGfCHg) : رابط فديوا لشرح استخدام\n[Server](https://www.youtube.com/watch?v=c8z9NC89s_8) : سرفر ديسكورد لاي مشكلة\n[Youtube](https://www.youtube.com/channel/UCejGcNpkzNdoUqHvcVGfCHg) : قناتي**`)
                .setColor(`#0x2F3136`)

                //-----------------------------OPTIONS----------------------
        //examples .setLabel('Put What You Want to put')
        //.setValue('')
        //.setDescription('put what u wantnto put')
 
        let option1 = new MessageMenuOption()
        .setLabel('Home Page')
        .setValue('option1')
        .setEmoji("🏠")
        .setDescription('View All Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("🎫")
        .setDescription('View Premium Ticket Commands')

  
      let option4 = new MessageMenuOption()
        .setLabel('About Me')
        .setValue('option4')
        .setEmoji("📔")
        .setDescription('View My About')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Ticket Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type the help command\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("This help menu is expired! Please retype the \`Help Command\`")
        .setFooter("ee.footertext, ee.footericon"))
    })

    }
}

/**********************************************************
 * @INFO
 * Bot Coded by R J#4407 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/