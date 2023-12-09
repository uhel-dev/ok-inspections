import { useState } from "react";

export default function CtaBanner({inText}: any) {
    const [text] = useState(inText ? inText : "We'll beat any quote and deliver the tyres right away | 24h Tyres")
    // const [text] = useState(inText ? inText : "We'll Come To You. We Beat Any Quote 24h a Day.")
    return (
        <>
            <div className={`w-full flex items-center justify-center p-6 bg-orange-500 rounded-2xl`}>
                <div className={`font-uk-reg-plates text-black text-xl lg:text-2xl`}>{text}</div>
            </div>
        </>
    )
}