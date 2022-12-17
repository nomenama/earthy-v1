import React from "react";
import { MdPlayCircleOutline, MdWaves } from "react-icons/md";
import { Link } from "react-router-dom";
import Title from "../components/Title/Title";
import Mission, { MissionProps } from "../components/MissionList/Mission";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbPlant } from "react-icons/tb";
import { FaDog } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Home = () => {
    const missionList: MissionProps[] = [
        {
            icon: <HiOutlineBuildingOffice2 />,
            heading: "Build Healthy Cities",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            icon: <TbPlant />,
            heading: "Tree Plantation",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            icon: <MdWaves />,
            heading: "Protect Land and Water",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
        {
            icon: <FaDog />,
            heading: "Animal Safety",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        },
    ];

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
                        <h2 className="text-dark_02 text-heading_02 leading-[50px] font-bold pl-[92px]">
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

            <section className="w-full bg-green_01 py-[50px]">
                <div className="container flex flex-col mf:flex-row justify-between items-start gap-[50px]">
                    <div className="w-full mf:max-w-[55%] pt-10 flex flex-col items-start justify-between gap-10">
                        <Title title="what we do" />

                        <h2 className="text-dark_02 text-heading_02 leading-[50px] font-bold pl-[92px]">
                            We care for earth, care for the coming birth
                        </h2>

                        <p className="text-dark_03 pl-[92px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique.
                        </p>

                        <div className="flex gap-6 pl-[92px]">
                            <div className="flex-1 min-w-[1px] bg-dark_05 z-10" />

                            <div className="flex flex-col gap-[30px]">
                                {missionList.map(({ icon, heading, text }, index) => (
                                    <Mission
                                        key={heading + index}
                                        icon={icon}
                                        heading={heading}
                                        text={text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-fit md:max-w-[45%]">
                        <img
                            src="/image-1.png"
                            alt="man playing with dog"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            <section className="container bg-white py-[50px] flex flex-col gap-[20px]">
                <Title title="projects we have done" />

                <h2 className="w-full md:max-w-[50%] text-dark_02 text-heading_02 leading-[50px] font-bold pl-[92px]">
                    We are creating sustainable society, for everyone and forever.
                </h2>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9">
                    <ProjectCard
                        backGroundImg="bg-forest"
                        heading="Mission 40K: Tree plantation"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit itaque modi numquam omnis quasi quisquam?"
                    />

                    <ProjectCard
                        backGroundImg="bg-city"
                        heading="Weekly cleanliness program in city"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit itaque modi numquam omnis quasi quisquam?"
                    />

                    <ProjectCard
                        backGroundImg="bg-wild-life"
                        heading="Wildlife safety program 2023"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit itaque modi numquam omnis quasi quisquam?"
                    />
                </div>
            </section>

            <section className="w-full bg-dark_01">
                <div className="container flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10 py-[50px]">
                    <div className="w-full md:max-w-[60%] flex flex-col gap-10">
                        <h2 className="text-white text-heading_03 leading-[50px] md:text-heading_02">
                            How we spend your donations and where it goes
                        </h2>

                        <p className="text-dark_04 ">
                            We understand that when you make a donation, you want to know exactly
                            where your money is going and we pledge to be transparent.
                        </p>

                        <div className="flex flex-wrap justify-start items-center gap-8">
                            <div className="flex flex-nowrap justify-start items-center gap-3">
                                <div className="w-[16px] h-[16px] bg-green-200 rounded-sm" />
                                <p className="text-white">40% planting trees</p>
                            </div>

                            <div className="flex flex-nowrap justify-start items-center gap-3">
                                <div className="w-[16px] h-[16px] bg-purple-300 rounded-sm" />
                                <p className="text-white">35% cleanliness program</p>
                            </div>

                            <div className="flex flex-nowrap justify-start items-center gap-3">
                                <div className="w-[16px] h-[16px] bg-yellow-100 rounded-sm" />
                                <p className="text-white">10% helping people</p>
                            </div>

                            <div className="flex flex-nowrap justify-start items-center gap-3">
                                <div className="w-[16px] h-[16px] bg-orange-300 rounded-sm" />
                                <p className="text-white">10% animal safety</p>
                            </div>

                            <div className="flex flex-nowrap justify-start items-center gap-3">
                                <div className="w-[16px] h-[16px] bg-pink-300 rounded-sm" />
                                <p className="text-white">5% feeding the poor</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/chart.png"
                            alt="chart"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
