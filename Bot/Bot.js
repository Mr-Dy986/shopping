const { Telegraf } = require("telegraf");
const TOKEN = ("5522235076:AAFxi7uTija6AqcbzcqvYwCCXMdiQnJt-TU")
const bot = new Telegraf(TOKEN);

const web_link = "https://thestreet7makara.netlify.app/";

bot.start((ctx) =>
    ctx.reply("សូមស្វាគមន៍", {
        reply_markup: {
            keyboard: [[{ text: "កម្មង់ម្ហូប", web_app: { url: web_link } }]],
        },
    })
)

bot.on('/start', (msg) => {

    return bot.sendInvoice(msg.from.id, {
        title: 'My Test Invoice',
        description: 'TeleBot loves payments!',
        payload: 'telebot-test-invoice',
        providerToken: '284685063:TEST:ODY0MDQxZGU5YTky',
        startParameter: 'pay',
        currency: 'EUR',
        prices: [
            { label: 'Tea', amount: 125 },
            { label: 'For testing!', amount: 1250 },
            { label: 'Discount', amount: -120 }
        ],
        reply_Markup: { inline_Keyboard: [[Array]] }
    });
});

bot.on('successfulPayment', (msg) => {
    console.log('successfulPayment', msg);

    return bot.sendMessage(msg.from.id, `Thank you, ${msg.from.first_name}!`);

});

bot.launch();