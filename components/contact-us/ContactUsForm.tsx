"use client";

import React, { useState } from "react";

export default function ContactUsForm() {
    // States for contact form fields
    const [fullname, setFullname] = useState<any>("");
    const [email, setEmail] = useState<any>("");
    const [subject, setSubject] = useState<any>("");
    const [message, setMessage] = useState<any>("");

    //   Form validation state
    const [errors, setErrors] = useState<any>({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState<any>("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState<any>(false);
    const [showFailureMessage, setShowFailureMessage] = useState<any>(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors: any = {};
        let isValid: boolean = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
        console.log(fullname, email, subject, message);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg shadow-xl flex flex-col p-8 bg-gray-50 dark:bg-blue-500"
        >
            <div className="text-2xl font-bold dark:text-gray-50">
                Send a message
            </div>

            <label
                htmlFor="fullname"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
                Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
                type="text"
                value={fullname}
                onChange={(e) => {
                    setFullname(e.target.value);
                }}
                name="fullname"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="email"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                E-mail<span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="subject"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Phone Number<span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
                htmlFor="message"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Message<span className="text-red-500">*</span>
            </label>
            <textarea
                name="message"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>

            <div className="flex flex-row items-center justify-start">
                <button
                    type="submit"
                    className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                >
                    Submit
                </button>
            </div>

            { showSuccessMessage && (
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-2"
                     role="alert">
                    <div className="flex">
                        <div className="py-1">
                            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">Thanks for reaching out.</p>
                            <p className="text-sm">We&apos;ll reply shortly.</p>
                        </div>
                    </div>
                </div>
            )}

            {/*{ (fullname.length === 0 || subject.length === 0 || message.length === 0 || email.length === 0) && (*/}
            {/*    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-2" role="alert">*/}
            {/*        <p className="font-bold">Ops...</p>*/}
            {/*        <p>Please fill in all the fields</p>*/}
            {/*    </div>*/}
            {/*)}*/}

            { showFailureMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
                    <strong className="font-bold">Holy smokes!</strong>
                    <span className="block sm:inline">Something seriously bad happened.</span>
                    <button aria-label={`error button`} className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowFailureMessage(!showFailureMessage)}>
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Close</title><path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </button>
                </div>
            )}
        </form>
    )
}