/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            screens: {
                mf: "990px",
            },
            colors: {
                primary: "#70c174",
                secondary: "#bef3c0",
                dark_01: "#0b0706",
                dark_02: "#1d2130",
                dark_03: "#525560",
                dark_04: "#ebf0f9",
                dark_05: "#e5e5e5",
            },
            backgroundColor: {
                primary: "#70c174",
                secondary: "#bef3c0",
                dark_01: "#0b0706",
                dark_02: "#1d2130",
                dark_03: "#525560",
                dark_04: "#ebf0f9",
                dark_05: "#e5e5e5",
                green_01: "#eff7f2",
                green_02: "#83D187",
            },
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
            },
            fontSize: {
                home_heading: "64px",
                heading_01: "56px",
                heading_02: "48px",
                heading_03: "28px",
                heading_04: "20px",
                heading_05: "14px",
                heading_06: "12px",
            },
            padding: {
                "1/3": "33.33333%",
                "2/3": "66.66667%",
            },
            backgroundImage: {
                forest: "url('./assets/forest.jpg')",
                city: "url('./assets/city.jpg')",
                "wild-life": "url('./assets/wild-life.jpg')",
            },
        },
    },
    plugins: [],
};
