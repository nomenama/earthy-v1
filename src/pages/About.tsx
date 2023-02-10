import React from "react";
import Title from "../components/Title/Title";

const About = () => {
    return (
        <main>
            <div className="w-full custom-gradient">
                <section className="container bg-transparent py-[50px] flex flex-col gap-[50px]">
                    <Title title="Know About Us" />

                    <div className="flex flex-row gap-[10px] ml-20">
                        <h1 className="w-1/2 text-heading_01 text-dark_02 font-bold leading-none">
                            We are a nonprofit team working worldwide
                        </h1>

                        <div className="w-1/2 flex flex-col gap-[20px]">
                            <h3 className="text-dark_02 font-bold text-xl">
                                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
                                ut sem vitae risus tristique posuere.
                            </h3>

                            <p className="text-dark_02">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius enim in eros elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Suspendisse varius enim elementum tristique.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/bg.png"
                            alt="banner"
                        />
                    </div>

                    <div className="flex flex-row gap-10 justify-between mx-10">
                        <div className="flex flex-col gap-5">
                            <h4 className="font-bold text-dark_02 tracking-widest leading-4">
                                Our Mission
                            </h4>
                            <h2 className="text-heading_03 text-dark_02 font-bold">
                                We make the world we save our own environment
                            </h2>
                            <p className="text-dark_02 opacity-70 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius enim in eros elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                                imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            <h4 className="font-bold text-dark_02 tracking-widest leading-4">
                                Our Vision
                            </h4>
                            <h2 className="text-heading_03 text-dark_02 font-bold">
                                Plant more trees to make world air pollution free
                            </h2>
                            <p className="text-dark_02 opacity-70 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius enim in eros elementum tristique. Duis cursus, mi quis
                                viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
                                imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <div className="flex gap-[20px] justify-start items-center">
                            <p className="text-dark_02 uppercase font-medium">our supporters</p>
                            <div className="flex-1 h-[1px] bg-dark_05" />
                        </div>

                        <div className="w-full flex flex-wrap justify-between items-center gap-[20px] py-6">
                            <img
                                src="/sponsors/logo-1.png"
                                alt="sponsor"
                            />

                            <img
                                src="/sponsors/logo-2.png"
                                alt="sponsor"
                            />

                            <img
                                src="/sponsors/logo-3.png"
                                alt="sponsor"
                            />

                            <img
                                src="/sponsors/logo-4.png"
                                alt="sponsor"
                            />

                            <img
                                src="/sponsors/logo-5.png"
                                alt="sponsor"
                            />

                            <img
                                src="/sponsors/logo-6.png"
                                alt="sponsor"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <section className="container bg-white py-[50px] flex flex-col gap-[50px]">
                <h1 className="text-heading_01 text-dark_02 font-bold flex justify-center">
                    {" "}
                    Awards & Recognitions
                </h1>

                <div className="flex flex-row flex-wrap justify-between gap-10 mx-10">
                    <img
                        src="/awards/award1.png"
                        alt="Best NGO Award"
                    />
                    <img
                        src="/awards/award2.png"
                        alt="Global Award"
                    />
                    <img
                        src="/awards/award3.png"
                        alt="Foresto Award"
                    />
                    <img
                        src="/awards/award4.png"
                        alt="Earth Saver Award"
                    />
                </div>

                <div className="bg-dark_01 rounded-lg py-14 flex justify-end gap-10">
                    <div className="flex flex-col justify-center gap-4 ml-10">
                        <h3 className="text-white font-bold uppercase leading-4 tracking-widest">
                            Our Journey
                        </h3>
                        <h1 className="text-heading_01 font-bold text-white">How we raised 34M</h1>
                        <p className="text-white opacity-60 leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            Aenean faucibus nibh.
                        </p>
                        <div className="flex flex-row justify-start gap-5">
                            <div className="flex-col gap-3">
                                <h3 className="text-white text-2xl">34M+</h3>
                                <p className="text-white text-xs opacity-60">Donation Received</p>
                            </div>

                            <div className="flex-col gap-3">
                                <h3 className="text-white text-2xl">400+</h3>
                                <p className="text-white text-xs opacity-60">Volunteers</p>
                            </div>

                            <div className="flex-col gap-3">
                                <h3 className="text-white text-2xl">40K+</h3>
                                <p className="text-white text-xs opacity-60">Trees planted</p>
                            </div>
                        </div>
                    </div>

                    <img
                        src="/image-2.png"
                        alt="our team"
                    />
                </div>
            </section>
        </main>
    );
};

export default About;
