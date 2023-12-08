import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FAQuestion } from "../types";

const questions: FAQuestion[] = [
    {
        question: "How do I determine the appropriate pressure for my tyres?",
        answer: "Numerous factors influence the ideal tyre pressure, including the kind and size of the tyre, the brand, weather conditions and temperature, the vehicle's load rating, whether the vehicle is bearing a load or not, and many more considerations.\n" +
            "Therefore, the pressure for specific vehicles (and tyres) is usually stated as a range rather than a precise number, or as a fixed figure with a potential range of variation. The most reliable method to find out the appropriate pressure for your vehicle's tyres is by utilising our tyre pressure lookup tool here."
    },
    {
        question: "What should I take with me for a tyre installation?",
        answer: "It's crucial to remember to bring your locking wheel nut key to your appointment. If your car is equipped with locking wheel nuts, we'll need this key to detach the wheels. You can typically locate the locking wheel nut key in the glove compartment or beneath the boot liner, next to the spare tyre."
    },
    {
        question: "Do warranties apply to tyres?",
        answer: "Every tyre installed with us comes with a lifetime mileage warranty that safeguards against manufacturing flaws. Due to the myriad of potential causes for tyre damage on the road, we can't guarantee the tyre's condition – however, you have the option to choose TyreCare insurance starting from just £5.99 per tyre. This will cover you for any unintended or intentional damage to the tyre."
    },
    {
        question: "Could you explain tyre sizes?",
        answer: "Various vehicles require differing tyres to accommodate their specific needs: 4x4s, as an example, necessitate tyres with substantial tread to maintain traction in off-road scenarios. Approved Fitment tyres, also referred to as Homologated tyres, are developed by a tyre manufacturer in collaboration with your car's maker and are meant to provide optimal fitment for all your car's intended functionalities."
    },
]

export const QA = ({question, answer}: any) => {

    const [toggleAnswer, setToggleAnswer] = useState(false)

    return (
        <div className="bg-gray-50 mt-2 p-6 rounded-2xl w-full">
            <div className={`flex justify-between`}>
                <button aria-label={question} className="text-sm lg:text-xl text-black text-start pt-2 font-uk-reg-plates" onClick={() => setToggleAnswer(!toggleAnswer)}>{question}</button>
                <button aria-label={answer} onClick={() => setToggleAnswer(!toggleAnswer)}>
                    { toggleAnswer && (
                        <MinusIcon className="h-6 w-6 text-blue-600 font-bold" aria-hidden="true" />
                    )}
                    { !toggleAnswer && (
                        <PlusIcon className="h-6 w-6 text-black" aria-hidden="true" />
                    )}
                </button>
            </div>
            <div className={`${toggleAnswer ? 'block' : 'hidden'} mt-2`}>
                {answer}
            </div>
        </div>
    )
}

export const FAQ = ({questionsIn}: any) => {

    const [slicer, setSlicer] = useState(2)


    return (
        <>
            { questionsIn && questionsIn.length > 0 && questionsIn.slice(0,slicer).map((el: FAQuestion) => {
                return (
                    <QA key={el.question} question={el.question} answer={el.answer}/>
                )
            })}
            { questionsIn && questionsIn.length > 0 && (
                <>
                    <button aria-label={`toggle question button`}  className={`btn`} onClick={() => setSlicer((prev) => (prev + 2 <= questionsIn.length ? prev + 2 : 2))}>{slicer < questionsIn.length ? 'Show More' : "Hide All"}</button>
                </>
            )}

            { !questionsIn && questions.map((el: FAQuestion) => {
               return (
                   <QA key={el.question} question={el.question} answer={el.answer}/>
               )
            })}
        </>
    )
}
