import React, { useState } from 'react';
import FileDropZone from "./FileDropZone";

export default function QRDecoder() {

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Upload Barcode</h2>
      <FileDropZone/>
    </div>
  );
}
