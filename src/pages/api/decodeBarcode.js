import formidable from 'formidable';
import { decode } from 'node-zxing';
import { readFile } from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    await form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Error parsing the file upload' });
        return;
      }

      try {
        const barcodeImage = files.barcode.filepath; // Adjust based on your form field name
        const buffer = await readFile(barcodeImage);
        const decoder = new decode();
        const decodedData = await decoder.decodeBuffer(buffer);

        res.status(200).json({ decodedData });
      } catch (error) {
        console.error('Error decoding barcode:', error);
        res.status(500).json({ error: 'Error decoding barcode' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
