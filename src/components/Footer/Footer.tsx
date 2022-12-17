import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0b0706]">
            <div className="container py-[50px] flex flex-col-reverse lg:flex-row justify-between lg:gap-[100px] gap-10">
                <div className="flex-1 flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-start gap-[50px] sm:gap-6">
                    <h4 className="text-white text-2xl text-center">Save the Earth</h4>
                    <div className="flex flex-col justify-start items-center text-white gap-6">
                        <p className="text-white font-bold">Our Team</p>
                        <Link
                            to={"/about-us"}
                            className="text-[14px] hover:text-primary">
                            About Us
                        </Link>
                        <Link
                            to={"/about-us#team"}
                            className="text-[14px] hover:text-primary">
                            Team
                        </Link>
                        <Link
                            to={"/what-we-do"}
                            className="text-[14px] hover:text-primary">
                            What we do
                        </Link>
                        <Link
                            to={"/contact"}
                            className="text-[14px] hover:text-primary">
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-col justify-start items-center text-white gap-6">
                        <p className="text-white font-bold">More</p>
                        <Link
                            to={"/about-us"}
                            className="text-[14px] hover:text-primary">
                            Projects
                        </Link>
                        <Link
                            to={"/about-us#team"}
                            className="text-[14px] hover:text-primary">
                            Events
                        </Link>
                        <Link
                            to={"/what-we-do"}
                            className="text-[14px] hover:text-primary">
                            Donate
                        </Link>
                        <Link
                            to={"/contact"}
                            className="text-[14px] hover:text-primary">
                            Blog
                        </Link>
                    </div>
                    <div className="flex flex-col justify-start items-center text-white gap-6">
                        <p className="text-white font-bold">Connect</p>
                        <a
                            href={"//"}
                            className="text-[14px] hover:text-primary">
                            Facebook
                        </a>
                        <a
                            href={"//"}
                            className="text-[14px] hover:text-primary">
                            Instagram
                        </a>
                        <a
                            href={"/"}
                            className="text-[14px] hover:text-primary">
                            Twitter
                        </a>
                        <a
                            href={"/"}
                            className="text-[14px] hover:text-primary">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-10">
                    <h1 className="text-white lg:text-4xl text-2xl">
                        Subscribe to get latest <br /> updates
                    </h1>

                    <div className="w-full max-w-[450px] relative">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="w-full text-white h-full flex-1 p-3 bg-transparent border border-color-[#ebf0f9] rounded-sm outline-0"
                        />
                        <button className="button-secondary px-5 absolute top-0 right-0 h-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
