const { sendMessageToTelegramGroup } = require('../../utils/telegram');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await sendMessageToTelegramGroup(req.body);
      res.status(200).json({ message: 'Callback request processed successfully.' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error processing callback request.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
