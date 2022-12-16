import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "What We Do", link: "/" },
        { name: "Media", link: "/" },
        { name: "Contact", link: "/" },
    ];

    const toggleNavbar = () => {
        setIsNavOpen((prevState) => !prevState);
    };

    return (
        <header className="w-full bg-white backdrop-blur-md shadow-md fixed top-0 left-0">
            <nav className="max-w-[90%] 3xl:max-w-[80%] md:flex justify-between items-center mx-auto">
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
                    className={`md:flex md:items-center justify-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in 
                    ${isNavOpen ? "top-20 opacity-100" : "top-[-200px] md:opacity-100 opacity-0"}`}>
                    {Links.map(({ name, link }, index) => (
                        <li
                            key={link.name}
                            className="md:px-5 md:py-0 py-2">
                            <a
                                href={link}
                                key={name + index}
                                className="text-dark_03 hover:text-primary duration-100 font-medium">
                                {name}
                            </a>
                        </li>
                    ))}
                    <button className="button-navbar font-medium">Donate</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
