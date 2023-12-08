import Image from "next/image";
import Link from "next/link";
import GeneralRequestCallbackDialog from "../dialogs/GeneralRequestCallbackDialog";

export default function HowToUse() {
    return (
        <>
            <div className={`flex flex-col lg:flex-row`}>
                <div className={`w-full lg:w-1/3 flex justify-center items-center p-4`}>
                    <Image className={`w-full h-1/3`} src={`/24h-tyres-car.jpg`} alt={`our 24h tyres van`} width={320} height={320}></Image>
                </div>
                <div className={`w-full lg:w-2/3 flex flex-col gap-2 p-4`}>
                    <p className={`font-uk-reg-plates text-2xl lg:text-4xl`}>How to use 24h-tyres?</p>

                    <div className={`w-full flex flex-col gap-4`}>
                        <div className={`flex items-center gap-2`}>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Step</p>
                            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjZmVlYTEyIiBkYXRhLW9yaWdpbmFsPSIjZmZiNTRhIj48L2NpcmNsZT48cGF0aCBmaWxsPSIjYzFiMTA2IiBkPSJNMzQxLjE2MyA0OTcuNDczYzc4LjMxMi0yNy42MiAxMzkuMTU2LTkyLjI0MyAxNjEuNTI5LTE3Mi44ODFMMjk0LjM5IDExNi4yOXMtODguNzEyIDc0LjMwMS04NS4wNyA5NC42OWw0MC42OTggNDAuMjA3TDIzNi4zOSAzOTIuN3oiIGRhdGEtb3JpZ2luYWw9IiNmOTg4MGQiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjhmZmZiIiBkPSJNMjk0LjM5IDExNi4yOVYzOTIuN2gtNThWMTg3LjY0bC0yNy4wNyAyMy4zNC0zNy44Ny00My45MyA1NS4zOC00Ny43NSAzLjQ5LTMuMDF6IiBkYXRhLW9yaWdpbmFsPSIjZjhmZmZiIj48L3BhdGg+PHBhdGggZmlsbD0iI2Q4ZDhkOCIgZD0iTTI1NiAxMTYuMjloMzguMzlWMzkyLjdIMjU2eiIgZGF0YS1vcmlnaW5hbD0iI2Q4ZDhkOCI+PC9wYXRoPjwvZz48L3N2Zz4="
                                   alt={`How To, Step One Icon`} height={36} width={36}/>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Find Your Perfect Tyre</p>
                        </div>
                        <ul className={`flex flex-col font-uk-reg-plates gap-2`}>
                            <li>
                                <Link className={`text-blue-800 hover:text-orange-600 hover:cursor-pointer`} target={`_blank`} href={`/tyres/cars`}>
                                    Search By Vehicle Make
                                </Link>
                                <span>
                                     - Enter the make of your vehicle and we&apos;ll provide you with the perfect set of tyres tailored specifically to your vehicle&apos;s needs.
                                </span>
                            </li>
                            <li>
                                <Link className={`text-blue-800 hover:text-orange-600 hover:cursor-pointer`} target={`_blank`} href={`/tyres/find/by-registration`}>
                                    Option 2: By Vehicle Reg Number
                                </Link>
                                <span>
                                     - Simply input your vehicle&apos;s registration number and we&apos;ll instantly find the ideal tyres for your vehicles.
                                </span>
                            </li>
                            <li>
                                <Link className={`text-blue-800 hover:text-orange-600 hover:cursor-pointer`} target={`_blank`} href={`/tyres/find/by-size`}>
                                    Option 3: By Tyre Size
                                </Link>
                                <span>
                                    - Know the size of the tyre you need? Great! Enter the size directly and we&apos;ll show you all the available options that match your requirements.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full flex flex-col gap-4`}>
                        <div className={`flex items-center gap-2`}>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Step</p>
                            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjZmVlYTEyIiBkYXRhLW9yaWdpbmFsPSIjNDI0MjQyIiBjbGFzcz0iIj48L2NpcmNsZT48cGF0aCBmaWxsPSIjY2JiYjExIiBkPSJNMjgzLjU4OSA1MTAuNTE3YzExMC4wMzUtMTEuNzkzIDE5OS4xOTUtOTMuMjk3IDIyMi40Ni0xOTkuNDgxTDM0MC45ODIgMTQ1Ljk2OHMtMTM1LjA0Ni0zLjczMi0xODMuODI2IDc2LjQ5OGw3MS44ODMgNzIuMDY1LTY0LjAxMSA5OC4xNjl6IiBkYXRhLW9yaWdpbmFsPSIjMjMyMzIzIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZmlsbD0iI2Y4ZmZmYiIgZD0iTTM2Mi40NzggMzkyLjdoLTE5Ny40NXYtNjYuNjQ5bDEyNi44MDgtOTYuMDAzYzE2LjA4LTEyLjE3NCAxMi4yMDUtMjkuMTQ5IDEwLjYzNS0zNC4wNjItMS41MTMtNC43MzItNy45NTMtMjAuMjItMjcuMzA2LTIwLjc4NWE5MC4yMjkgOTAuMjI5IDAgMCAwLTEuNDk0LS4wMjFoLTIyLjQyMmMtMzMuMDI5IDAtMzUuNTk1IDM2LjE5My0zNS41OTUgNDcuMjg2aC01OC40OTdjMC02Mi4yODQgMzguNjkyLTEwNS43ODMgOTQuMDkyLTEwNS43ODNsMjIuNzUzLjAwMXMxLjkxMi4wMTcgMi44NjQuMDQ0YzM3LjgyNiAxLjEwNSA2OS43NDUgMjUuMjI0IDgxLjMyNSA2MS40NDUgMTEuNzI4IDM2LjY4OC0uNDU4IDc1LjM1Ni0zMS4wNDUgOTguNTEzbC03NS45NzIgNTcuNTE3aDExMS4zMDVWMzkyLjd6IiBkYXRhLW9yaWdpbmFsPSIjZjhmZmZiIj48L3BhdGg+PHBhdGggZmlsbD0iI2Q4ZDhkOCIgZD0ibTMyNy4xNDQgMjc2LjY4NC02Ny4yNzEgNTAuOTMzdi03My4zNzNsMzEuOTYxLTI0LjE5NmMxNi4wNzctMTIuMTczIDEyLjIwNC0yOS4xNDggMTAuNjQtMzQuMDU5LTEuNTEzLTQuNzQtNy45NTgtMjAuMjIyLTI3LjMxMi0yMC43ODZhODkuNzUgODkuNzUgMCAwIDAtMS40OTMtLjAyaC0xMy43OTd2LTU4LjQ5N2gxNC4xM3MxLjkwNi4wMiAyLjg2NC4wNGMzNy44MjEgMS4xMDkgNjkuNzQyIDI1LjIyNCA4MS4zMjEgNjEuNDUyIDExLjczIDM2LjY4MS0uNDUzIDc1LjM1LTMxLjA0MyA5OC41MDZ6TTI1OS44NzMgMzM0LjIwM2gxMDIuNjAyVjM5Mi43SDI1OS44NzN6IiBkYXRhLW9yaWdpbmFsPSIjZDhkOGQ4Ij48L3BhdGg+PC9nPjwvc3ZnPg=="
                                   alt={`How To, Step Two Icon`} height={36} width={36}/>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Connect With Us</p>
                        </div>
                        <ul className={`flex flex-col font-uk-reg-plates gap-2`}>
                            <li>
                                <span className={`text-blue-800 hover:text-orange-600 hover:cursor-pointer`}>Option 1: Give Us a Call</span> - Dial our number and talk directly with our expert team, ready and waiting to assist you with your tyre needs.
                            </li>
                            <li>
                                <span className={`text-blue-800 hover:text-orange-600  hover:cursor-pointer`}>Option 2: Request a Callback</span> - Prefer we reach out to you? No problem! Simply request a callback and one of our professionals will contact you at your earliest convenience.
                            </li>

                            <li className={`flex gap-2`}>
                                <GeneralRequestCallbackDialog/>
                            </li>
                        </ul>
                    </div>


                    <div className={`w-full flex flex-col gap-4`}>
                        <div className={`flex items-center gap-2`}>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Step</p>
                            <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgZGF0YS1uYW1lPSJMYXllciAxIj48ZyBkYXRhLW5hbWU9IjMiPjxwYXRoIGZpbGw9IiNmZWVhMTIiIGQ9Ik01MTIgMjU2YTI1NS45IDI1NS45IDAgMCAxLTIuMDggMzIuNzFjMCAuMjItLjA1LjQ0LS4wOC42NnEtMS42IDEyLjM5LTQuMzkgMjQuMzlhMjU2LjQ2IDI1Ni40NiAwIDAgMS0xMzUuMjQgMTcxLjQxIDI1Mi45MyAyNTIuOTMgMCAwIDEtNTguNjUgMjAuNzdsLS43Ni4xN0EyNTYuMyAyNTYuMyAwIDAgMSAyNTYgNTEyQzExNC42MiA1MTIgMCAzOTcuMzggMCAyNTZTMTE0LjYyIDAgMjU2IDBzMjU2IDExNC42MiAyNTYgMjU2eiIgZGF0YS1vcmlnaW5hbD0iIzA1YzY1MyIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNjZmJmMWEiIGQ9Ik01MDkuOTIgMjg4LjcxYzAgLjIyLS4wNS40NC0uMDguNjZxLTEuNiAxMi4zOS00LjM5IDI0LjM5YTI1Ni40NiAyNTYuNDYgMCAwIDEtMTM1LjI0IDE3MS40MSAyNTIuOTMgMjUyLjkzIDAgMCAxLTU4LjY1IDIwLjc3QzE1MCAzNTMgMTc3IDM2MCAxNzcgMzYwczEwMiA0MiAxNDktNDZjLTgxLTc2LTU5LTU0LTE2Ny0xMzJsMTUwLTYyeiIgZGF0YS1vcmlnaW5hbD0iIzBiOWYzZiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xOTQgMzg3LjJxLTI0LjIxLTE2LjgtMzQuNi01MC40YTM1LjY4IDM1LjY4IDAgMCAxLTEuNi03LjJxMC03LjU5IDkuMi0xMC40bDIyLjgtNy4yYTI2LjQ4IDI2LjQ4IDAgMCAxIDYuNC0xLjYgNy41IDcuNSAwIDAgMSA1LjggMi40IDI0Ljc1IDI0Ljc1IDAgMCAxIDQuMiA3LjZxNiAxOS4yIDE3LjYgMjh0MzQgOC44cTIzLjE5IDAgMzQuNC0xMC42dDExLjItMzAuMnEwLTE5LjItMTAuNC0yOS42dC0zMC40LTEwLjRoLTMxLjJxLTcuMiAwLTEwLTN0LTIuOC0xMC42di0xOHEwLTcuNTkgMi44LTEwLjZ0MTAtM2gyOHExNy42IDAgMjcuMi0xMHQ5LjYtMjcuNnEwLTE4LjM5LTEwLjItMjguNnQtMjkuOC0xMC4ycS0yMS42IDAtMzIuOCA4LjR0LTE3LjIgMjcuMnEtMS42IDUuMjEtNCA3LjZhNy42OCA3LjY4IDAgMCAxLTUuNiAyLjQgMzUuNjggMzUuNjggMCAwIDEtNy4yLTEuNmwtMjAuNC02LjRhMjIuMjMgMjIuMjMgMCAwIDEtNy4yLTQuNCA4LjE0IDguMTQgMCAwIDEtMi40LTYgMTcuNTUgMTcuNTUgMCAwIDEgMS42LTcuMnExMC44LTMzLjIgMzMuOC01MHQ2My0xNi44cTQxLjU5IDAgNjUuMiAyMS42dDIzLjYgNTkuNnEwIDIwLTcuNCAzNS42YTU3LjkyIDU3LjkyIDAgMCAxLTIyLjIgMjQuOCA2MC41NiA2MC41NiAwIDAgMSAyOCAyN3E5LjE5IDE3LjgxIDkuMiA0MC42IDAgMzkuNi0yNC4yIDYzLjJUMjU5LjQgNDA0cS00MS4yIDAtNjUuNC0xNi44eiIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                                   alt={`How To, Step Three Icon`} height={36} width={36}/>
                            <p className={`font-uk-reg-plates text-xl lg:text-2xl`}>Seamless Tyre Installation</p>
                        </div>
                        <ul className={`flex flex-col font-uk-reg-plates`}>
                            <li>
                                Boasting over 1,000 tyre fitting centres across the UK, 24h-tyres.co.uk ensures convenience and flexibility for your tyre fitting needs. Choose a suitable date and time at a garage near you or simply opt for a doorstep fitting - the choice is yours. Once your appointment is confirmed, our dedicated team will ensure your tyres are ready and waiting for you, prioritizing a seamless service tailored to your schedule.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}