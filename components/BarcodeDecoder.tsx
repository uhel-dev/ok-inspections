import React, { useState } from 'react';

export default function BarcodeDecoder() {
  const [file, setFile] = useState(null);
  const [decodedData, setDecodedData] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('barcode', file);

    try {
      const response = await fetch('/api/decodeBarcode', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setDecodedData(data.decodedText);
      } else {
        alert('Error decoding barcode');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Upload Barcode</h2>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button onClick={handleFileUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Decode Barcode
      </button>
      {decodedData && <p>Decoded Data: {decodedData}</p>}
    </div>
  );
}
