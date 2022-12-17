import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Links } from "../../types";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const links: Links[] = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about-us" },
        { name: "What We Do", link: "/what-we-do" },
        { name: "Media", link: "/media" },
        { name: "Contact", link: "/contact" },
    ];

    const toggleNavbar = () => {
        setIsNavOpen((prevState) => !prevState);
    };

    return (
        <header className="w-full bg-white backdrop-blur-md shadow-md">
            <nav className="container md:flex justify-between items-center">
                <a href="/">
                    <img
                        src="/logo/logo.jpg"
                        alt="logo"
                        className="w-20 h-20 object-cover"
                    />
                </a>

                <div className="md:hidden absolute right-8 top-7">
                    {isNavOpen ? (
                        <MdOutlineClose
                            onClick={toggleNavbar}
                            fontSize={24}
                            className="cursor-pointer text-primary"
                        />
                    ) : (
                        <GiHamburgerMenu
                            onClick={toggleNavbar}
                            fontSize={24}
                            className="cursor-pointer text-primary"
                        />
                    )}
                </div>

                <ul
                    className={`md:flex md:items-center justify-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-300 ease-in 
                    ${isNavOpen ? "top-20 opacity-100" : "top-[-200px] md:opacity-100 opacity-0"}`}>
                    {links.map(({ name, link }, index) => (
                        <li
                            key={name}
                            className="md:px-5 md:py-0 py-2 text-center">
                            <Link
                                to={link}
                                key={name + index}
                                className="text-dark_03 hover:text-primary duration-100 font-medium">
                                {name}
                            </Link>
                        </li>
                    ))}
                    <div className="md:w-auto w-full flex justify-center items-center">
                        <button className="button-navbar font-medium md:mb-0 mb-5">Donate</button>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
