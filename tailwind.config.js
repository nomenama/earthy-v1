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
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
