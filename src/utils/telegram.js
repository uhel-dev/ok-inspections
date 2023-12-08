const axios = require('axios');

const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendMessageToTelegramGroup(message) {
  try {
    const text =
`
<b>🚨 New Callback Request! 🚨</b>\n
  <b>👤 Customer:</b> <code>${message.phoneNumber}</code>
  <b>📍 Location:</b> <code>${message.location}</code>
  ${message.tyreSize && message.tyreSize !== "" ? `<b>🛞 Tyre Size:</b> <code>${message.tyreSize}</code>\n` : ``}
  
<b>🔧 Attention Tyre Fitters!</b> There's a new service request in your area. A customer is awaiting your prompt and professional assistance. Let's get rolling! 🚗💨
`



    const response = await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: CHAT_ID,
      text:text,
      parse_mode: 'HTML'
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message to Telegram group:', error);
    throw error;
  }
}

module.exports = { sendMessageToTelegramGroup };
