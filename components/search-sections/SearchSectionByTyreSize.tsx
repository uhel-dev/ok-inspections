import { useState } from "react";
import RequestCallbackDialog from "../dialogs/RequestCallbackDialog";

const SearchSectionTyreSize = ({handleChangeToSearchByTyre}: any) => {

    const tyreWidths = [7.50,28,30,31,32,33,35,125,135,145,155,165,175,185,195,205,215,225,235,245,255,265,275,285,295,305,315,325,335,355]
    const tyreHeights = [40,45,50,55,60,65,70,75,80]
    const wheelDiameters = [16, 17, 18]

    const [selectedWidth, setSelectedWidth] = useState<number | null>(null);
    const [selectedHeight, setSelectedHeight] = useState<number | null>(null);
    const [selectedDiameter, setSelectedDiameter] = useState<number | null>(null);


    const handleWidthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWidth(parseFloat(event.target.value));
        document.getElementById('select-width-step')!.classList.add("step-primary")
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHeight(parseFloat(event.target.value));
        document.getElementById('select-height-step')!.classList.add("step-primary")
    };

    const handleDiameterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDiameter(parseFloat(event.target.value));
        document.getElementById('select-wheel-diameter-step')!.classList.add("step-primary")
    };


    return (
        <>
            <div className="p-2 bg-[#EEE] mt-2 p-6">
                <div className="text-3xl lg:text-2xl text-black font-uk-reg-plates">Search By Tyre Size</div>
                <div className="flex flex-col lg:flex-row mt-2 gap-2 lg:gap-6">
                    <div className="w-full lg:w-1/3 flex flex-col justify-end">
                        <div>Width</div>
                        <div className="pt-2 bottom-0">
                            <select className="text-center p-4 w-full" value={selectedWidth || ""} onChange={handleWidthChange}>
                                {
                                    tyreWidths?.length > 0 && tyreWidths.map((width: number) => {
                                        return  (
                                            <option key={width} value={width}>{width}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-end">
                        <div>Height</div>
                        <div className="pt-2 bottom-0">
                            <select className="text-center p-4 w-full" value={selectedHeight || ""} onChange={handleHeightChange} disabled={selectedWidth === null}>
                                {
                                    tyreHeights?.length > 0 && tyreHeights.map((height: number) => {
                                        return  (
                                            <option key={height} value={height}>{height}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex flex-col justify-end">
                        <div>Wheel Diameter</div>
                        <div className="pt-2 bottom-0">
                            <select className="text-center p-4 w-full" value={selectedDiameter || ""} onChange={handleDiameterChange} disabled={selectedHeight === null}>
                                {
                                    wheelDiameters?.length > 0 && wheelDiameters.map((wheelDiameter: number) => {
                                        return  (
                                            <option key={wheelDiameter} value={wheelDiameter}>{wheelDiameter}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row mt-8 gap-2 lg:gap-6">
                    <div className="w-full flex gap-2">
                        <ul className="steps steps-vertical lg:steps-horizontal">
                            <li id={`select-width-step`} className="step text-xs lg:text-base">Select Width</li>
                            <li id={`select-height-step`} className="step text-xs lg:text-base">Choose Height</li>
                            <li id={`select-wheel-diameter-step`} className="step text-xs lg:text-base">Choose Wheel Diameter</li>
                        </ul>
                    </div>
                { selectedWidth !== null && selectedHeight !== null && selectedDiameter !== null && (
                    <div className="w-full flex gap-2 justify-center lg:justify-end mt-2 lg:mt-0">
                        <RequestCallbackDialog data={{
                        selectedWidth: selectedWidth || "",
                        selectedHeight: selectedHeight || "",
                        selectedDiameter: selectedDiameter || "",
                        }}/>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default SearchSectionTyreSize