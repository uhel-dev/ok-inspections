import Link from "next/link";
import { useState } from "react";
import carMakesData from "../../carMakes.json" assert { type: "json" };

const CAR_MAKES = carMakesData.CAR_MAKES;

export default function CarMakesList({val, hideTitle}: any) {


    const [multiplier, setMultiplier] = useState(0.2)
    const [amountVisibleCarMakes, setAmountVisibleCarMakes] = useState((CAR_MAKES.length * multiplier))

    const showMoreCarMakes = () => {
        setMultiplier((prevState) => {
            setAmountVisibleCarMakes(CAR_MAKES.length * (prevState + 0.2))
            return prevState + 0.2
        })
    }

    const hideAllCarMakes = () => {
        setMultiplier(0.2)
        setAmountVisibleCarMakes(CAR_MAKES.length * 0.2)
    }

    return (
        <>
            <div className={`flex flex-col bg-gray-50 rounded-2xl`}>
                { hideTitle !== true && (
                  <div className={`self-center text-2xl lg:text-4xl font-uk-reg-plates font-extrabold py-4 lg:py-8`}>Search Tyres By Car Make</div>
                )}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-2 p-6`}>
                    { CAR_MAKES.slice(0, val ? val : amountVisibleCarMakes).map(({make}) => {
                      return (
                          <Link key={make} className={`btn text-xs p-2 lg:text-xl font-uk-reg-plates flex justify-start`} href={`/tyres/cars/${make.replace(" ", "-").toLowerCase()}`}>{make} tyres</Link>
                      )
                    })}
                </div>
                <div className={`self-center p-6 ${val ? 'hidden' : 'block'}`}>
                    <button aria-label={`show more`} className={`btn btn-accent font-uk-reg-plates text-2xl text-white`} onClick={() => multiplier === 1 ? hideAllCarMakes() : showMoreCarMakes()}>{multiplier === 1 ? "HIDE ALL" : "SHOW MORE"}</button>
                </div>
                {/*<div className={`self-center text-3xl lg:text-4xl font-uk-reg-plates font-extrabold py-4 lg:py-8`}>Locations We Cover</div>*/}
                {/*<div className={`mt-4`}>*/}
                {/*    <MapComponent radiusMiles={25}/>*/}
                {/*</div>*/}
            </div>
        </>
    )
}