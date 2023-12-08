import "../../src/app/globals.css";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { phoneNumberValidator } from "@/utils/validators/phoneNumberValidator";

export default function SearchByCarRegDialog({callHandleShowSuccessMessage}: any) {

    const [text, setText] = useState(''); // if you are using React hooks
    const [requestCallbackPhoneNumber, setRequestCallbackPhoneNumber] = useState<any>(''); // if you are using React hooks
    const [isLoading, setIsLoading] = useState(false)
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")
    const [buildYear, setBuildYear] = useState("")
    const [tyreSizes, setTyreSizes] = useState([])
    const [selectedTyreSize, setSelectedTyreSize] = useState('')
    const [resultFetched, setResultFetched] = useState(false)
    const [validPhoneNumber, setValidPhoneNumber] = useState(false)
    const [showPhoneNumberField, setShowPhoneNumberField] = useState(false)

    const [isErrorWhenFetchingTyreSize, setIsErrorWhenFetchingTyreSize] = useState(false)

    const handleChange = (event: any) => {
        setText(event.target.value.toUpperCase());
    }

    const handleChangeRequestCallbackPhoneNumber = (event: any) => {
        validatePhoneNumber(event.target.value)
        setRequestCallbackPhoneNumber(event.target.value)
    }

    const handleSearchRequest = async () => {
        if(resultFetched) {
            setText('')
            setResultFetched(false)
            setIsErrorWhenFetchingTyreSize(false)
            setCarModel("")
            setCarModel("")
            setBuildYear("")
            setTyreSizes([])
            setSelectedTyreSize('')
            setIsLoading(false)
            return;
        }
        setIsLoading(true);
        setResultFetched(false)
        setIsErrorWhenFetchingTyreSize(false);
        const response = await fetch(`/api/vehicle?registration=${text}`);
        if(response.ok) {
            const data = await response.json();
            const { Make, Model, BuildYear, tyreSizes} = data
            setCarMake(Make)
            setCarModel(Model)
            setBuildYear(BuildYear)
            setTyreSizes(tyreSizes)
            setResultFetched(true)
        }
        else {
            setIsErrorWhenFetchingTyreSize(true);
        }
        setIsLoading(false);
    }

    const validatePhoneNumber = (requestCallbackPhoneNumber: any) => {
        setValidPhoneNumber(phoneNumberValidator(requestCallbackPhoneNumber))
    }

    const sendRequestCallbackEnquiryToEmail = async () => {
        if (validPhoneNumber) {
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: requestCallbackPhoneNumber,
                    fullname: selectedTyreSize,
                    subject: "REQUEST CALLBACK",
                    message: "User requested a callback, call him as soon as possible.",
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
                // @ts-ignore
                gtag('event', 'search_by_car_reg_dialog_callback', {});
                const el: any = document.getElementById('my-modal-3')
                el.checked = false
                setValidPhoneNumber(false)
                setRequestCallbackPhoneNumber('')
                callHandleShowSuccessMessage()
                Swal.fire({
                    title: 'Request sent!',
                    text: 'Thank you for sending the request, someone will reach out to you shortly',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
        }
    }


    return (
        <>
            <label htmlFor="my-modal-3" className="btn">Order By Reg Number</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                        <div className="text-xl lg:text-2xl text-black font-uk-reg-plates">Order By Vehicle Number Plate</div>
                        <div className="flex flex-col lg:flex-row mt-2 gap-2 lg:gap-6">
                            <div className="w-full lg:w-1/2 flex flex-col">
                                <div>Vehicle Registration</div>
                                <div className="flex pt-2">
                                    <div className="p-4 bg-[#0935d4] text-white font-uk-reg-plates flex items-center">
                                        <span className="">UK</span>
                                    </div>
                                    <input
                                        id={`reg-number-input`}
                                        className="p-4 uk-reg-search-input bg-[#fdb414] text-center font-extrabold w-full font-uk-reg-plates"
                                        type="text"
                                        value={text}
                                        onChange={handleChange}
                                        disabled={resultFetched}
                                        aria-label={`number plate input`}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col justify-end">
                                <button
                                    onClick={() => handleSearchRequest()}
                                    className="disabled:opacity-25 flex p-4 w-full bg-orange-400 p-4 text-center gap-2 items-center align-middle justify-center text-white"
                                    disabled={text.length === 0}
                                >
                                    { !isLoading && !resultFetched && (
                                        <>
                                            <span className={`font-uk-reg-plates`}>SEARCH</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </>
                                    )}
                                    { isLoading && (
                                        <>
                                            <span>Loading...</span>
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
                                    { resultFetched && (
                                        <>
                                            <span className={`font-uk-reg-plates`}>RESET</span>
                                        </>
                                    )}
                                </button>

                            </div>
                        </div>
                    </div>
                    { resultFetched && !isErrorWhenFetchingTyreSize && (
                        <>
                            <div className={`p-6 w-full text-md lg:text-2xl font-extrabold`}>{`Your vehicle and available tyre sizes are listed below`}</div>
                            <div className={`w-full h-0.5 border border-black`}></div>
                            <div className={`flex  w-full`}>
                                <div className="p-6 rounded-2xl w-full">
                                    <div className={`flex flex-col gap-6`}>
                                        <div className={`w-full`}>
                                            <div className={`mt-2 w-full flex flex-col`}>
                                                <div className={`flex gap-2 justify-between`}>
                                                    <span>Registration</span>
                                                    <span className={`font-bold`}>{text}</span>
                                                </div>
                                                <div className={`flex gap-2 justify-between`}>
                                                    <span>Make</span>
                                                    <span className={`font-bold`}>{carMake}</span>
                                                </div>
                                                <div className={`flex gap-2 justify-between`}>
                                                    <span>Model</span>
                                                    <span className={`font-bold`}>{carModel}</span>
                                                </div>
                                                <div className={`flex gap-2 justify-between`}>
                                                    <span>Year</span>
                                                    <span className={`font-bold`}>{buildYear}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-full`}>
                                            <div className={`font-bold font-uk-reg-plates text-orange-400 text-md lg:text-xl mb-2`}>Please select the tyre size you need</div>
                                            <div className="flex flex-col gap-2 mt-2 lg:mt-0">
                                                {tyreSizes?.map((size, index) => (
                                                    <div className={`flex items-center`} key={index}>
                                                        <button aria-label={`select your tyre size`} onClick={() =>{
                                                            setSelectedTyreSize(size)
                                                        }} className="btn hover:bg-orange-400 text-white hover:text-black rounded flex gap-2">
                                                            {size}
                                                        </button>
                                                        <span className={`p-2`}>Fitted to front and rear</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2">Can&apos;t find your tyre sizes? Try searching by size <button aria-label={`search-tyre-by-size`} className="text-blue-600" onClick={() => {}}>here</button></div>
                                </div>
                            </div>
                            <div>
                                { showPhoneNumberField && (
                                    <div  className={`flex gap-2 pb-6 pr-6 pl-6`}>
                                        <div className="w-full">
                                            <label htmlFor="default-input"
                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                            <input type="text" id="default-input"
                                                   onChange={handleChangeRequestCallbackPhoneNumber}
                                                   onBlur={handleChangeRequestCallbackPhoneNumber}
                                                   className="
                                               bg-gray-50
                                               border
                                               border-gray-300
                                               text-gray-900
                                               text-sm
                                               rounded-lg
                                               focus:ring-blue-500
                                               focus:border-blue-500
                                               block
                                               w-full
                                               p-2.5
                                               dark:bg-gray-700
                                               dark:border-gray-600
                                               dark:placeholder-gray-400
                                               dark:text-white
                                               dark:focus:ring-blue-500
                                               dark:focus:border-blue-500"/>
                                        </div>
                                    </div>
                                )}
                                <div className={`flex gap-2 pb-6 pr-6 pl-6`}>
                                    { !showPhoneNumberField && (
                                        <button aria-label={`request a callback`} className="btn hover:bg-orange-400 hover:text-black font-uk-reg-plates" onClick={() => setShowPhoneNumberField(true)}>REQUEST CALLBACK</button>
                                    )}
                                    { showPhoneNumberField && (
                                        <>
                                            <button
                                                className="btn hover:bg-orange-400 hover:text-black font-uk-reg-plates"
                                                onClick={() => sendRequestCallbackEnquiryToEmail()}
                                                disabled={!validPhoneNumber}
                                            >SEND CALLBACK REQUEST</button>
                                        </>
                                    )}
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
                                </div>
                            </div>
                        </>
                    )}
                    { isErrorWhenFetchingTyreSize && (
                        <div className="bg-[#EEE] mt-2 p-8">
                            <div className="text-2xl text-red-500 pt-2">No results</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}



