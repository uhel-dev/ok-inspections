import Image from "next/image";

export default function TyreBrandsGrid() {
    return (
        <>
            <div id={`wrapper`} className={``}>
                <div id={`inner-wrapper`}>
                    <div className={`grid grid-cols-4 lg:grid-cols-12 items-center p-4 gap-4`}>
                        <div>
                            <Image src="/tyre-brands/apollo.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand APOLLO"/>
                        </div>


                        <div>
                            <Image src="/tyre-brands/autogreen.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand AUTOGREEN"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/avon.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand AVON"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/bridgestone.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand BRDIGESTONE"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/continental.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand CONTINENTAL"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/firestone.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand FIRESTONE"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/goodyear.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand GOODYEAR"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/michelin.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand MICHELIN"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/pirelli.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand PIRELLI"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/sailun.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand SAILUN"/>
                        </div>

                        <div>
                            <Image src="/tyre-brands/yokohama.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand YOKOHAMA"/>
                        </div>
                        <div>
                            <Image src="/tyre-brands/dunlop.svg"
                                   width={144}
                                   height={144}
                                   alt="Picture of Tyre Brand DUNLOP"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}