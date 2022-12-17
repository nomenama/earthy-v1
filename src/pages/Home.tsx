import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="w-full h-[730px] banner">
                <div className="max-w-[90%] 3xl:max-w-[80%] mx-auto h-full flex flex-col justify-between items-start pt-[60px] pb-[40px]">
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
        </main>
    );
};

export default Home;
