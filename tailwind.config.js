/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgColor: "#fff",
      btnColor: "#6651cd",
      bgChatBox: "#F2EDED",
      chatTextColor: "#000",
    },
    fontSize: {
      fontHeading: "30px",
      fontBody: "24px",
      fontText: "20px",
    },
    extend: {},
  },
  plugins: [],
};
