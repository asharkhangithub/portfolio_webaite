import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container :{
          center: true,
          padding:"16px",
          
      },
      colors: {
        accent : "#08E69E"
      },
    },
  },
  plugins: [],
};
export default config;
