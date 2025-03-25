import { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF8F5", // light cream background
        surface: "#F2EEE6", // card/bg containers
        text: "#1A1A1A", // main body text
        accent: "#8CA58F", // soft sage green
        highlight: "#B7A77C", // muted sand gold
        button: "#A3B18A", // olive green
        "button-hover": "#94A684", // darker olive
      },
    },
  },
  plugins: [],
};

export default config;
