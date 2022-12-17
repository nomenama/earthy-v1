/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
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
        },
    },
    plugins: [],
};
