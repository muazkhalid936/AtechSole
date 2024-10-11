/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(22, 22, 156, 0.5)",
        light: "#EDF5FF",
        "over-light": "#f8f9fa",
        footer: "#202942",
        "footer-text": "#858585",
      },
      height: {
        "77p": "77%",
        "77p-2": "71.5%",
      },
    },
  },
  plugins: [],
};
