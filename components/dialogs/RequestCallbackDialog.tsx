import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function RequestCallbackDialog(data?:any, tyreSizes?: any) {

    const [requestCallbackPhoneNumber, setRequestCallbackPhoneNumber] = useState(''); // if you are using React hooks
    const [validPhoneNumber, setValidPhoneNumber] = useState(false)
    const [selectedTyreSize, setSelectedTyreSize] = useState<any>(tyreSizes ? tyreSizes : "")

    const handleChangeRequestCallbackPhoneNumber = (event: any) => {
        setRequestCallbackPhoneNumber(event.target.value)
        validatePhoneNumber(event.target.value)
    }

    const validatePhoneNumber = (n: any) => {
        // UK Phone Number Regex
        const ukPhoneNumberRegex = /^((\+44)|(0)) ?\d{4} ?\d{6}$/;

        // Check if the phoneNumber is valid
        const isValid = ukPhoneNumberRegex.test(n);
        setValidPhoneNumber(isValid)
    }


    const sendRequestCallbackEnquiryToEmail = async () => {
        if (validPhoneNumber) {
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    phoneNumber: requestCallbackPhoneNumber,
                    subject: "REQUEST CALLBACK",
                    message: `User requested a callback, call him as soon as possible. ${ data ? parseData(data) : ""}`,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            const { error } = await res.json();
            if (error) {
                console.log(error);
                return;
            }
            else {
                const el: any = document.getElementById('my-modal-6')
                el.checked = false
                setValidPhoneNumber(false)
                setRequestCallbackPhoneNumber('')
                await Swal.fire({
                    title: 'Request sent!',
                    text: 'Thank you for sending the request, someone will reach out to you shortly',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })

                // @ts-ignore
                gtag('event', 'request_callback_dialog_search_by_tyre_size', {});
            }
        }
    }

    const parseData = (data: any) => {

        const {selectedWidth, selectedHeight, selectedDiameter} = data.data
        if(typeof selectedWidth !== 'undefined' && typeof selectedHeight !== 'undefined' && typeof selectedDiameter !== 'undefined') {
            return `<br><strong>Selected tyre size</strong>: ${selectedWidth}/${selectedHeight}/${selectedDiameter}<br><strong>Phone number</strong>: ${requestCallbackPhoneNumber}`
        }
        else {
            return JSON.stringify(data)
        }
    }


    return (
        <>
            <label htmlFor="my-modal-6" className="btn hover:bg-orange-400 hover:text-black font-uk-reg-plates animate animate-pulse">REQUEST CALLBACK</label>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div id={`request-callback-modal`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col gap-2">
                    <div className={`flex justify-between items-center gap-2`}>
                        <h3 className="font-bold text-sm lg:text-lg font-uk-reg-plates">Thank You! Let&apos;s Secure Your Tyre Size & Callback</h3>
                        <label htmlFor="my-modal-6"
                               className="btn btn-sm btn-circle right-2 top-2">✕</label>
                    </div>
                    <p className="text-xs lg:text-md font-uk-reg-plates">Your tyre size is set. Let&apos;s roll together! Just drop your phone number for a swift callback to finalize details.</p>
                    <label className="label">
                        <span className="label-text font-uk-reg-plates">What is your phone number?</span>
                    </label>
                    <input id={`phone-number-request-callback`}
                           type={`text`}
                           className={`input bg-gray-200 outline-none focus:outline-none sm:focus:outline-none`}
                           value={requestCallbackPhoneNumber}
                           onChange={handleChangeRequestCallbackPhoneNumber}
                           onMouseLeave={handleChangeRequestCallbackPhoneNumber}
                    />
                    { validPhoneNumber && tyreSizes && tyreSizes.length > 0 && (
                        <div className={`flex flex-col gap-2`}>
                            <p className={`text-xs lg:text-lg font-uk-reg-plates font-bold text-orange-400`}>Tyre sizes</p>
                            {tyreSizes?.map((size: string, index: number) => (
                                <div className={`flex items-center`} key={index}>
                                    <button
                                        onClick={() =>{
                                            setSelectedTyreSize(size)
                                        }}
                                        className="btn hover:bg-orange-400 text-white hover:text-black rounded flex gap-2
                                            focus:bg-orange-400
                                            focus:border-none
                                            active:bg-orange-400
                                            select:bg-orange-400
                                            "

                                    >
                                        {size}
                                    </button>
                                    <span className={`p-2`}>Fitted to front and rear</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="modal-action">
                        <button
                            className={`btn`}
                            disabled={selectedTyreSize === '' || !validPhoneNumber}
                            onClick={() => sendRequestCallbackEnquiryToEmail()}
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
            <div className={`btn hover:bg-orange-400 hover:text-black font-uk-reg-plates`}>
                <Link href={CTA_PHONE_NUMBER} onClick={() => {
                    // @ts-ignore
                    gtag('event', 'call_us_cta', {
                        'event_category': 'Button Clicks',
                        'event_action': 'click',
                        'event_label': 'Call Us'
                    });
                }}>Call Us</Link>
            </div>
        </>
    )
}