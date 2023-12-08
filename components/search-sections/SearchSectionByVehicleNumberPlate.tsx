import React, { useState } from "react";
import TyreByRegDialog from "../dialogs/TyreByRegDialog";
import Link from "next/link";
import { CTA_PHONE_NUMBER } from "@/static/utils";

const SearchSectionByVehicleNumberPlate = ({handleChangeToSearchByTyre}: any) => {

    const [text, setText] = useState(''); // if you are using React hooks
    const [requestCallbackPhoneNumber, setRequestCallbackPhoneNumber] = useState(''); // if you are using React hooks
    const [isLoading, setIsLoading] = useState(false)
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")
    const [buildYear, setBuildYear] = useState("")
    const [tyreSizes, setTyreSizes] = useState([])
    const [selectedTyreSize, setSelectedTyreSize] = useState('')
    const [resultFetched, setResultFetched] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [validPhoneNumber, setValidPhoneNumber] = useState(false)

    const [isErrorWhenFetchingTyreSize, setIsErrorWhenFetchingTyreSize] = useState(false)

    const changeToSearchByTyreSize = () => {
        handleChangeToSearchByTyre('search-by-tyre-size')
    }

    const handleChange = (event: any) => {
        setText(event.target.value.toUpperCase());
    }

    const handleChangeRequestCallbackPhoneNumber = (event: any) => {
        setRequestCallbackPhoneNumber(event.target.value)
        validatePhoneNumber(event.target.value)
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
            setIsOpen(false)
            setIsLoading(false)
            // handleSearchByRegChange(1)
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
            // handleSearchByRegChange(3)
        }
        else {
            setIsErrorWhenFetchingTyreSize(true);
            // handleSearchByRegChange(2)
        }
        setIsLoading(false);
    }

    const validatePhoneNumber = (num: any) => {
        const ukPhoneNumberRegex = /^((\+44)|(0)) ?\d{4} ?\d{6}$/;

        const isValid = ukPhoneNumberRegex.test(num);
        setValidPhoneNumber(isValid)
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
                const el: any = document.getElementById('my-modal-6')
                el.checked = false
                setValidPhoneNumber(false)
                setRequestCallbackPhoneNumber('')
            }
        }
    }

    return (
    <>
        <div className="bg-gray-50 p-6">
            <div className="bg-gray-50 text-3xl lg:text-2xl text-black font-uk-reg-plates">Search By Vehicle Number Plate</div>
            <div className="flex flex-col lg:flex-row mt-2 gap-2 lg:gap-6">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div>Please enter your registration number to find the right tyre size</div>
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
                <div className={`p-6 w-full text-2xl font-extrabold bg-white`}>{`Your vehicle and available tyre sizes are listed below`}</div>
                <div className={`w-full h-0.5 border border-black`}></div>
                <div className={`flex  w-full`}>
                    <div className="p-6 w-full bg-white">
                        <div className={`flex flex-col lg:flex-row gap-6`}>
                            <div className={`w-full lg:w-1/2`}>
                                <div className={`mt-2 w-full lg:w-1/2 flex flex-col`}>
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
                            <div className={`w-full lg:w-1/2`}>
                                <div className={`font-bold font-uk-reg-plates text-orange-400 text-md lg:text-xl mb-2`}>Please select the tyre size you need</div>
                                <div className="flex flex-col gap-2 mt-2 lg:mt-0">
                                    {tyreSizes?.map((size, index) => (
                                            <div className={`flex items-center`} key={index}>
                                                <button aria-label={`select tyre size`} onClick={() =>{
                                                    setSelectedTyreSize(size)
                                                    setIsOpen(true)
                                                }} className="btn hover:bg-orange-400 text-white hover:text-black rounded flex gap-2">
                                                    {size}
                                                </button>
                                                <span className={`p-2`}>Fitted to front and rear</span>
                                            </div>
                                        ))}
                                    <TyreByRegDialog isOpen={isOpen} selectedTyreSize={selectedTyreSize} setOpen={setIsOpen}/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">Can&apos;t find your tyre sizes? Try searching by size <button aria-label={`search by tyre size instead`} className="text-blue-600" onClick={() => changeToSearchByTyreSize()}>here</button></div>
                    </div>
                </div>
                <div>
                    <div className={`flex gap-2 pb-6 pr-6 pl-6 pt-6`}>
                        <label htmlFor="my-modal-6" className="btn hover:bg-orange-400 hover:text-black font-uk-reg-plates">REQUEST CALLBACK</label>
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
                                    <div className={`flex flex-col gap-2`}>
                                        <p className={`text-xs lg:text-lg font-uk-reg-plates font-bold text-orange-400`}>Tyre sizes</p>
                                        {tyreSizes?.map((size, index) => (
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
                            <Link href={CTA_PHONE_NUMBER}>Call Us</Link>
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
    </>
    )
}

export default SearchSectionByVehicleNumberPlate