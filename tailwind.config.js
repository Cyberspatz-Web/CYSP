/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0C",
          raised: "#131316",
          overlay: "#1B1B20",
        },
        border: {
          DEFAULT: "#242429",
          strong: "#323238",
        },
        paper: {
          DEFAULT: "#F5F7FA",
          dim: "#C6CCD6",
        },
        steel: {
          DEFAULT: "#8992A3",
          light: "#AAB2C0",
        },
        // Official brand palette from the client-supplied brand board.
        brand: {
          blue: "#3972C2",
          "blue-bright": "#5596EA",
          "blue-deep": "#2B4887",
          amber: "#D78825",
          "amber-bright": "#E89F22",
          "amber-deep": "#A8650F",
        },
        // Primary interactive/accent color — blue, matching the logo's
        // dominant tone. Amber is used as the secondary brand accent.
        signal: {
          DEFAULT: "#3972C2",
          soft: "#1B2A45",
          bright: "#5596EA",
        },
        live: {
          DEFAULT: "#5FA37A",
        },
      },
      fontFamily: {
        display: ["'Inter Tight'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2.8vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(245,243,238,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,243,238,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
