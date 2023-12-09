import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SignatureComponent() {
  const sigCanvas: any = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const signature = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    // Handle the saved signature data (e.g., send it to server or store in state)
    console.log(signature);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Signature</h2>
      <div className="border p-4">
        <SignatureCanvas
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          ref={sigCanvas}
        />
      </div>
      <div className="mt-4">
        <button onClick={clear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
          Clear
        </button>
        <button onClick={save} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </div>
  );
}
