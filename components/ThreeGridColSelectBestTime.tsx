import React from "react";
import { MinifiedRequestCallbackDialog } from "./dialogs/MinifiedRequestCallbackDialog";

const ThreeGridColSelectBestTime = () => {


  return (
    <div className={`w-full grid lg:grid-cols-3 gap-2`}>

      <div className="bg-[#feea12]/80 p-4 min-h-[240px] flex flex-col justify-between relative">
        <div className="-z-10 absolute right-0 top-0 w-1/2 h-full bg-[url('/icons/alloys.svg')] bg-no-repeat bg-left bg-cover opacity-10"></div>
        <div className="flex flex-col">
          <div className="text-3xl font-semibold font-uk-reg-plates">Mobile Tyre Repair</div>
          <div className="text-lg">Same day tyre repairs, only one call away.</div>
        </div>
        <div className={``}>
          <MinifiedRequestCallbackDialog heading={'Request Call-Out'}/>
        </div>
      </div>


      <div className="bg-[#feea12]/70 p-4 min-h-[240px] flex flex-col justify-between relative">
        <div className="-z-10 absolute right-0 top-0 w-1/2 h-full bg-[url('/icons/keys.svg')] bg-no-repeat bg-left bg-cover opacity-10"></div>
        <div className="flex flex-col">
          <div className="text-3xl font-semibold font-uk-reg-plates">Mobile Tyre Fitting</div>
          <div className="text-lg">Same day tyre repairs, only one call away.</div>
        </div>
        <div className={``}>
          <MinifiedRequestCallbackDialog heading={`Request Callback`}/>
        </div>
      </div>


      <div className="bg-[#feea12]/60 p-4 min-h-[240px] flex flex-col justify-between relative">
        <div className="-z-10 absolute right-0 top-0 w-1/2 h-full bg-[url('/icons/mot.svg')] bg-no-repeat bg-left bg-cover opacity-10"></div>
        <div className="flex flex-col">
          <div className="text-3xl font-semibold font-uk-reg-plates">Book Your MOT</div>
          <div className="text-lg">Same day tyre repairs, only one call away.</div>
        </div>
        <div className={``}>
          <MinifiedRequestCallbackDialog/>
        </div>
      </div>

    </div>
  )
}

export default ThreeGridColSelectBestTime