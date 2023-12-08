import { FAQuestion } from "./types";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export const defaultQuestions: FAQuestion[] = [
  {
    "question": "What should my tyre pressure be?",
    "answer": "At 24h Tyres, we advise that tyre pressure depends on your vehicle's specific make, model, and age. Check your car's handbook or the pressure label on the driver's side door jamb or glove compartment for the recommended pressure."
  },
  {
    "question": "How can I measure my tyre tread depth?",
    "answer": "To ensure your tyre tread is within legal limits, use a 20p coin test or a tread depth gauge. If the outer band of the 20p coin is visible when placed in the tyre grooves, your tread is likely below the legal limit. For precise measurements, use a tread depth indicator. 24h Tyres can assist with these tools and techniques."
  },
  {
    "question": "Best time to check tyre pressure?",
    "answer": "24h Tyres recommends checking tyre pressure at least once a month and before long trips. Regular checks help maintain optimal tyre performance and safety."
  },
  {
    "question": "What types of tyres do I need?",
    "answer": "The ideal tyre for your vehicle depends on the wheel size, vehicle type, and driving conditions. Consult your vehicle’s handbook or contact 24h Tyres for personalized recommendations."
  },
  {
    "question": "Guidance for changing a tyre?",
    "answer": "Changing a tyre is straightforward with the right steps. Find a flat area, engage the handbrake, and switch off the engine. Set up a warning triangle and retrieve your tools. Loosen the wheel nuts, raise the car, replace the tyre, and securely tighten the nuts. For detailed guidance, visit 24h Tyres online resources."
  },
  {
    "question": "Tyre or tire: Which spelling is correct?",
    "answer": "'Tyre' and 'tire' are both correct, with 'tyre' being the preferred spelling in the UK and 'tire' in American English. At 24h Tyres, we use 'tyre' to reflect our UK orientation."
  },
  {
    "question": "Is it wise to choose budget tyres?",
    "answer": "Choosing tyres should be based on quality and suitability rather than just cost. While budget can be a factor, it's essential to consider performance and safety. 24h Tyres offers a range of tyres to fit various budgets without compromising on quality."
  }
]

interface FrequentlyAskedQuestionProps {
  title?: string;
  questions?: FAQuestion[];
}

export default function FrequentlyAskedQuestion({ title, questions }: FrequentlyAskedQuestionProps) {
  const q = questions ? questions : defaultQuestions;

  // State to keep track of the active question
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Handler to toggle the active question
  const handleToggle = (question: any) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <>
      <section className={`w-full flex flex-col`}>
        <h4 className={`text-xl lg:text-4xl font-uk-reg-plates border-b border-black py-8 w-full`}>
          {title ? title : "Frequently Asked Questions"}
        </h4>

        {q.map(({ question, answer }: FAQuestion, index) => {
          // Determine if this question is active
          const isActive = question === activeQuestion;

          return (
            <div key={question} className={`border-b border-black py-4 lg:py-8 flex flex-col gap-8`}>
              <button aria-label={`${question}`} onClick={() => handleToggle(question)}>
                <div className={`flex items-center justify-between`}>
                  <p className={`text-base md:text-lg lg:text-2xl font-uk-reg-plates hover:text-orange-600 ${isActive ? `text-orange-600` : 'text-black'}`}>
                    {question}
                  </p>
                  {isActive ? (
                    <MinusIcon className="h-8 w-8 text-orange-600 font-bold" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8 text-black" aria-hidden="true" />
                  )}
                </div>
              </button>
              <div className={` ${isActive ? 'flex' : 'hidden'} `}>
                <p className={`text-left text-base lg:text-lg font-uk-reg-plates-regular`}>{answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
