import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

module.exports = {
      content: [
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
            extend: {
                  fontFamily: {
                        poppins: ['Poppins']
                  },
                  animation: {
                        zoomIn: 'zoomIn 0.5s ease-out'
                  },
                  keyframes: {
                        zoomIn: {
                              '0%': {
                                    top: '10rem',
                                    opacity: '0'
                              },
                              '100%': {
                                    top: '0rem',
                                    opacity: '1'
                              },
                        }
                  }
            }
      },
      daisyui: {
            themes: ['coffee']
      },
      plugins: [
            require("daisyui")
      ],
} satisfies Config;
