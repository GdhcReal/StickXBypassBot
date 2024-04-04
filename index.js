//MADE BY WMND .gg/bypassi
//uses stickx api


const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios')

const token = 'TOKEN'; //the bots token
const clientId = 'CLIENTID'; //the bots client id// user id
const advertise = false; //if you want it to send server invite after command ran keep it true if not keep it false
const serverinvite = "sever invite"; //server invite for when command ran it replies with server invite
const madeby = "USERNAME"; //for embed like "Made By {name}"
const apikey = "E99l9NOctud3vmu6bPne"; //api key using stickx. only change when key is invalid https://discord.gg/AqXmxKV8s8 new key in that server

const commands = [
    {
        name: 'arceus',
        description: 'Whitelist Arceus X',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Arceus link',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Whitelist Codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Codex link',
                required: true,
            },
        ],
    },
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'hydrogen',
        description: 'Gets Hydrogen Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Hydrogen link',
                required: true,
            },
        ],
    },
    {
        name: 'hohohub',
        description: 'Gets hohohub Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The hohohub link',
                required: true,
            },
        ],
    },
    {
        name: 'trigon',
        description: 'Gets Trigon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Trigon link',
                required: true,
            },
        ],
    },
    {
        name: 'vegax',
        description: 'Gets VegaX Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The VegaX link',
                required: true,
            },
        ],
    },
];

const client = new Client({ intents: 3276799 });
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded global application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'arceus') {
        await arceusx(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'delta') {
        await delta(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'hydrogen') {
        await hydrogen(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'hohohub') {
        await hohohub(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'vegax') {
        await vegax(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }
});

async function arceusx(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Arceus",
            thumbnail: { url: 'https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3N0b3JhZ2UuYnV6enNwcm91dC5jb20vdmFyaWFudHMvamlydDZ1ZXJ5cjlwaXV5b2l0dWFnaGY3OXIydC82ODYxYTc1NTAyMjk2MTNlMzM4NzM3M2YyMGFkODI5YmE0YmM1NzY3ZGQ4ZWI5MmU3MGEwYWJlMzA0ZDRlNjU3LmpwZWciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMxMjYvdjQvMGYvYjcvYzYvMGZiN2M2NWUtMGZkZS1kNTViLTQ4NDQtZDY0OGUyNTVjZWE0M216YV81OTc3NzU5OTE1MTA1OTI2NzQ1LmpwZWcvNjAweDYwMGJiLmpwZyJ9.3Z8ypAT8sIBIoxrQqtfAErDUZfhHI7g5POFT9et-IxI.jpg?width=400&height=400' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://spdmteam.com/key-system-1?hwid=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `https://stickx.top/api-arceusx/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Key System completed!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Arceus",
                        thumbnail: { url: 'https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3N0b3JhZ2UuYnV6enNwcm91dC5jb20vdmFyaWFudHMvamlydDZ1ZXJ5cjlwaXV5b2l0dWFnaGY3OXIydC82ODYxYTc1NTAyMjk2MTNlMzM4NzM3M2YyMGFkODI5YmE0YmM1NzY3ZGQ4ZWI5MmU3MGEwYWJlMzA0ZDRlNjU3LmpwZWciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMxMjYvdjQvMGYvYjcvYzYvMGZiN2M2NWUtMGZkZS1kNTViLTQ4NDQtZDY0OGUyNTVjZWE0M216YV81OTc3NzU5OTE1MTA1OTI2NzQ1LmpwZWcvNjAweDYwMGJiLmpwZyJ9.3Z8ypAT8sIBIoxrQqtfAErDUZfhHI7g5POFT9et-IxI.jpg?width=400&height=400' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Arceus",
                        thumbnail: { url: 'https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3N0b3JhZ2UuYnV6enNwcm91dC5jb20vdmFyaWFudHMvamlydDZ1ZXJ5cjlwaXV5b2l0dWFnaGY3OXIydC82ODYxYTc1NTAyMjk2MTNlMzM4NzM3M2YyMGFkODI5YmE0YmM1NzY3ZGQ4ZWI5MmU3MGEwYWJlMzA0ZDRlNjU3LmpwZWciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMxMjYvdjQvMGYvYjcvYzYvMGZiN2M2NWUtMGZkZS1kNTViLTQ4NDQtZDY0OGUyNTVjZWE0M216YV81OTc3NzU5OTE1MTA1OTI2NzQ1LmpwZWcvNjAweDYwMGJiLmpwZyJ9.3Z8ypAT8sIBIoxrQqtfAErDUZfhHI7g5POFT9et-IxI.jpg?width=400&height=400' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Arceus",
                    thumbnail: { url: 'https://cdn-images.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3N0b3JhZ2UuYnV6enNwcm91dC5jb20vdmFyaWFudHMvamlydDZ1ZXJ5cjlwaXV5b2l0dWFnaGY3OXIydC82ODYxYTc1NTAyMjk2MTNlMzM4NzM3M2YyMGFkODI5YmE0YmM1NzY3ZGQ4ZWI5MmU3MGEwYWJlMzA0ZDRlNjU3LmpwZWciLCJmYWxsYmFjayI6Imh0dHBzOi8vaXMxLXNzbC5tenN0YXRpYy5jb20vaW1hZ2UvdGh1bWIvUG9kY2FzdHMxMjYvdjQvMGYvYjcvYzYvMGZiN2M2NWUtMGZkZS1kNTViLTQ4NDQtZDY0OGUyNTVjZWE0M216YV81OTc3NzU5OTE1MTA1OTI2NzQ1LmpwZWcvNjAweDYwMGJiLmpwZyJ9.3Z8ypAT8sIBIoxrQqtfAErDUZfhHI7g5POFT9et-IxI.jpg?width=400&height=400' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Arceus Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Codex",
            thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol?token=') || link.startsWith('https://mobile.codex.loltoken=')) {
        const token = link.split('=')[1];
        const apiUrl = `https://stickx.top/api-codex/?token=${token}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "CodeX completed!!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Whitelisted Codex",
                        thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                        fields: [
                            { name: 'Status:', value: '```Succesfully Whitelisted. Wait Up To A Minute Or Restart Roblox.```' },
                            { name: 'Token:', value: `${box}${token}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Codex",
                        thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                        fields: [
                            { name: 'Status:', value: '```Either Token Is Invalid Or Api Is Not Working.```' },
                            { name: 'Token:', value: `${box}${token}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Codex",
                    thumbnail: { url: 'https://play-lh.googleusercontent.com/6kNoyUFDekYr1Z9Yq-Q984J3eEFSqdxbATM6O9L5rBjZANOkXUF6p7z-QBRz1thh0Q0=w240-h480' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Codex Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://stickx.top/api-delta/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    thumbnail: { url: 'https://imag.malavida.com/mvimgbig/download-fs/delta-executor-38248-0.jpg' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function hydrogen(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Hydrogen Key",
            thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/2569?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://stickx.top/api-hydrogen/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Hydrogen Key",
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Hydrogen Key",
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Hydrogen key",
                    thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Hydrogen Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function hohohub(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting HoHoHub Key",
            thumbnail: { url: 'https://i1.sndcdn.com/artworks-0Xe3JiFfMkkZF9jZ-BFoWFQ-t500x500.jpg' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://hohohubv-ac90f67762c4.herokuapp.com/api/getkeyv2?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-hohohubv/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got HoHoHub Key",
            			thumbnail: { url: 'https://i1.sndcdn.com/artworks-0Xe3JiFfMkkZF9jZ-BFoWFQ-t500x500.jpg' },    
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get HoHoHub Key",
            			thumbnail: { url: 'https://i1.sndcdn.com/artworks-0Xe3JiFfMkkZF9jZ-BFoWFQ-t500x500.jpg' },              
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get HoHoHub key",
            		thumbnail: { url: 'https://i1.sndcdn.com/artworks-0Xe3JiFfMkkZF9jZ-BFoWFQ-t500x500.jpg' },        
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid HoHoHub Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function trigon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Trigon Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                   
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://trigonevo.com/getkey/?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-trigon/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                            
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Trigon Key",
            			thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                             
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Trigon key",
            		thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221310676291551342/Screenshot_2024-03-24-11-12-05-29.png?ex=66121d34&is=65ffa834&hm=872921281aa07fecb9a41385bb18648202ca7e7b1b648ce37945c768bec09dd6&' },                   	
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Trigon Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function vegax(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting VegaX Key",
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221312421231329340/Screenshot_2024-03-24-11-19-05-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66121ed4&is=65ffa9d4&hm=24825a49f9bff70fdc060db29a140b35c23dc770cbce7e80ce3def4cc691d642&' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=vegax&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `https://stickx.top/api-vegax/?hwid=${hwid}&api_key=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got VegaX Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221312421231329340/Screenshot_2024-03-24-11-19-05-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66121ed4&is=65ffa9d4&hm=24825a49f9bff70fdc060db29a140b35c23dc770cbce7e80ce3def4cc691d642&' },
                        fields: [
                            { name: 'Status:', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get VegaX Key",
                        thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221312421231329340/Screenshot_2024-03-24-11-19-05-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66121ed4&is=65ffa9d4&hm=24825a49f9bff70fdc060db29a140b35c23dc770cbce7e80ce3def4cc691d642&' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get VegaX key",
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/1219783753665351791/1221312421231329340/Screenshot_2024-03-24-11-19-05-54_572064f74bd5f9fa804b05334aa4f912.jpg?ex=66121ed4&is=65ffa9d4&hm=24825a49f9bff70fdc060db29a140b35c23dc770cbce7e80ce3def4cc691d642&' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid VegaX Link",
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}




client.login(token);
