/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#131314",
        panel: "#1c1b1c",
        panelHigh: "#201f20",
        stroke: "#27272a",
        strokeHigh: "#3f3f46",
        textMain: "#e5e2e3",
        textMuted: "#c3c5d9",
        textDim: "#8d90a2",
        primary: "#0055ff",
        primarySoft: "#b6c4ff",
        emerald: "#4edea3",
        ruby: "#cf043d",
        amber: "#ffb84d",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        panel: "0 20px 50px rgba(0, 0, 0, 0.42)",
      },
    },
  },
  plugins: [],
};
