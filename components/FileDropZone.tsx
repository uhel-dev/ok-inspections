import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import jsQR from "jsqr";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ArrowRightCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export interface DroppedFile {
  name: string;
  file: any;
  preview: string;
}
function FileDropZone() {
  const [droppedFile, setDroppedFile] = useState<DroppedFile | null>(null);
  const [isValidFileType, setIsValidFileType] = useState<boolean>(false);
  const inputRef = useRef<any | null>(null);
  const [qrCode, setQrCode] = useState<string>("");
  const [isDecoded, setIsDecoded] = useState<boolean>(false);
  const [isDecoding, setIsDecoding] = useState<boolean>(false);

  const verifyFileType = (file: any) => {
    if (file) {
      const isValid = file.type === 'image/webp' || file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg'
      setIsValidFileType(isValid);
      return isValid;
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = async (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    await handleChange(file);
  };

  const handleFileChange = async (e: any) => {
    e.preventDefault()
    const file = e.target.files[0];
    await handleChange(file)
  };

  const handleChange = async (file: any) => {
    const isValid = verifyFileType(file);
    if (file && isValid) {
      const name = file.name;
      const preview = URL.createObjectURL(file);
      setDroppedFile({ name, file, preview });
    }
    if (!isValid) {
      await Swal.fire({
        title: 'Invalid file format',
        text: 'Please make sure qr code image is in the right format.',
        icon: 'error',
        confirmButtonText: 'Close'
      })

    }
  }

  const decodeQR = async () => {
    if(inputRef.current !== null) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if(ctx) {
        // Adjust canvas size to the image size
        const img = inputRef.current;
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        // Draw image on canvas
        ctx.drawImage(img!!, 0, 0);

        // Get ImageData from canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const code: any = jsQR(imageData.data, imageData.width, imageData.height);
        setQrCode(code.data);
      }
      else {
        await Swal.fire({
          title: 'We need to inspect this',
          text: 'Unable to create context from the image.',
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }
    }
    else {
      await Swal.fire({
        title: 'Unable to decode qr code',
        text: 'Please make sure qr code image is valid ok-inspections qr code.',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  }


  useEffect(() => {
    return () => {
      if (droppedFile) {
        URL.revokeObjectURL(droppedFile.preview);
      }
    };
  }, [droppedFile]);

  async function handleDecoding() {
    if (droppedFile) {
      setIsDecoding(true);
      decodeQR().then(async () => {
        await setTimeout(() => {
          setIsDecoding(false);
          setIsDecoded(true);
        }, 300);
      }).catch(err => {
        console.error(err)
      })
    }
    else {
      await Swal.fire({
        title: 'Something needs an inspection',
        text: 'Found it, you did not upload qr code, please upload your image first and then try again.',
        icon: 'error',
        confirmButtonText: 'Close'
      })
    }
  }

  return (
    <div className="my-4">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="lg:min-h-[320px] lg:min-w-[480px] border-dashed border-2 border-gray-200 rounded-xl my-4 flex justify-center items-center p-"
      >
        {!droppedFile && (
          <>Drag and drop a qr code image here</>
        )}
        {droppedFile && (
          <div className="grid gap-4">
            <div className="grid justify-center items-center">
              <Image ref={inputRef} src={droppedFile.preview} alt="" width={250} height={250} />
            </div>
          </div>
        )}
      </div>
      <div>
        {!droppedFile && (
          <span className="ml-2">Upload your qr code image</span>
        )}
        {droppedFile && (
          <span className="flex">
            Uploaded File: {droppedFile.name}
          </span>
        )}
      </div>
      <div className={`flex justify-between`}>
        <button onClick={handleDecoding} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          {!isDecoded && !isDecoding &&(
            <>Read QR Code</>
          )}
          {isDecoding && (
            <>Reading...</>
          )}
          {isDecoded && !isDecoding && (
            <>Found 1 item</>
          )}
        </button>
        { isDecoded && (
          <CheckCircleIcon className={`h-8 w-8 text-green-500`}/>
        )}
      </div>
      {isDecoded && (
        <div className={`mt-2 flex gap-2`}>
          {/*<span className={`text-xl font-bold`}>QR Code Value:</span>*/}
          <ArrowRightCircleIcon className={`h-6 w-6 text-green-500`}/>
          <Link
            target={`_blank`}
            className={`hover:text-blue-600`}
            href={qrCode.split(`https://ok-inspections.co.uk`)[1]}>
            {qrCode.split('https://ok-inspections.co.uk/items/view-item/')[1]}
          </Link>
        </div>
      )}
      </div>
  );
}

export default FileDropZone;
