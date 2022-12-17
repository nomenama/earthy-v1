import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";

const Home = () => {
    return (
        <main>
            <section className="w-full h-[730px] banner">
                <div className="container h-full flex flex-col justify-between items-start pt-[60px] pb-[40px]">
                    <div className="flex flex-col gap-6">
                        <h1 className="w-[70%] md:w-[640px] lg:text-[4rem] text-[3rem] text-white lg:leading-[5rem]">
                            Save the environment today for a better tomorrow
                        </h1>

                        <div className="flex gap-3">
                            <Link
                                to={"/what-we-do"}
                                className="button-secondary">
                                What we do
                            </Link>
                            <button className="px-2 flex text-white justify-start items-center gap-2">
                                <MdPlayCircleOutline />
                                Play Video
                            </button>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center gap-4">
                        <p className="text-white text-sm md:text-lg">23,800 trees planted</p>
                        <div className="flex-1 h-[1px] bg-[#e5e5e5]" />
                        <p className="text-white text-sm md:text-lg">5840 donations collected</p>
                    </div>
                </div>
            </section>

            <section className="container bg-white py-[50px] flex flex-col gap-[50px]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-[50px]">
                    <div className="w-full md:max-w-[55%] pt-10 flex flex-col items-start justify-between gap-10">
                        <Title title="Know about us" />
                        <h2 className="text-dark_02 text-heading_02 leading-10 font-bold pl-[92px]">
                            We help nature smile and survive everywhere
                        </h2>

                        <p className="text-dark_03 pl-[92px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.
                            <br />
                            <br />
                            ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id
                            rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                        </p>

                        <button className="button-primary ml-[92px]">Learn more</button>
                    </div>

                    <div className="w-fit md:max-w-[45%]">
                        <img
                            src="/video.png"
                            alt="video"
                            className="object-cover w-full h-full"
                        />
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
        </main>
    );
};

export default Home;
