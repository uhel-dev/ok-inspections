import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function GeneralRequestCallbackDialog() {

    const [requestCallbackPhoneNumber, setRequestCallbackPhoneNumber] = useState(''); // if you are using React hooks
    const [requestCallbackPostCode, setRequestCallbackPostCode] = useState(''); // if you are using React hooks
    const [validPhoneNumber, setValidPhoneNumber] = useState(false)
    const [validPostCode, setValidPostCode] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleChangeRequestCallbackPhoneNumber = (event: any) => {
        setRequestCallbackPhoneNumber(event.target.value)
        validatePhoneNumber(event.target.value)
    }

    const handleChangeRequestCallbackPostCode = (event: any) => {
        event.target.value = event.target.value.toUpperCase()
        setRequestCallbackPostCode(event.target.value)
        validatePostCode(event.target.value)
    }


    const validatePhoneNumber = (n: any) => {
        const ukPhoneNumberRegex = /^((\+44)|(0)) ?\d{4} ?\d{6}$/;
        const isValid = ukPhoneNumberRegex.test(n);
        setValidPhoneNumber(isValid)
    }

    const validatePostCode = (n: any) => {
        const ukPostCodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/;
        const isValid = ukPostCodeRegex.test(n);
        setValidPostCode(isValid)
    }

    const sendRequestCallbackEnquiryToEmail = async () => {
        if (validPhoneNumber && validPostCode) {
            setIsLoading(true)
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    phoneNumber: requestCallbackPhoneNumber,
                    subject: "REQUEST CALLBACK",
                    message: `User requested a callback, call him as soon as possible. ${parseData()}`,
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
            } else {
                // Call the addEvent API
                const addEventRes = await fetch("/api/addEvent", {
                    body: JSON.stringify({
                        phoneNumber: requestCallbackPhoneNumber,
                        postcode: requestCallbackPostCode,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                });

                const { message } = await addEventRes.json();
                if (message) {
                    const el: any = document.getElementById("my-modal-6");
                    el.checked = false;
                    setValidPhoneNumber(false);
                    setRequestCallbackPhoneNumber("");
                    // @ts-ignore
                    gtag('event', 'general_request_callback_dialog', {});
                    await Swal.fire({
                        title: "Request sent!",
                        text: "Thank you for sending the request, someone will reach out to you shortly",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                } else {
                    console.log("Error adding event to calendar");
                }
                setIsLoading(false)
                return
            }
        }
    };

    const parseData = () => {
        return `<br><strong>User postcode</strong>: ${requestCallbackPostCode}<br><strong>User phone number</strong>: ${requestCallbackPhoneNumber}`
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

                    { validPhoneNumber && (
                        <>
                            <label className="label">
                                <span className="label-text font-uk-reg-plates">What is your postcode?</span>
                            </label>
                            <input id={`post-code-request-callback`}
                                   type={`text`}
                                   className={`input bg-gray-200 outline-none focus:outline-none sm:focus:outline-none`}
                                   value={requestCallbackPostCode}
                                   onChange={handleChangeRequestCallbackPostCode}
                                   onMouseLeave={handleChangeRequestCallbackPostCode}
                            />
                        </>
                    )}

                    <div className="modal-action">
                        <button
                            className={`btn`}
                            disabled={!validPhoneNumber || !validPostCode}
                            onClick={() => sendRequestCallbackEnquiryToEmail()}
                        >
                            { !isLoading && (
                                <>
                                    Send Request
                                </>
                            )}
                            { isLoading && (
                                <>
                                    <span>Loading... </span>
                                    <svg aria-hidden="true"
                                         className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>
                                    </svg>
                                </>
                            )}
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