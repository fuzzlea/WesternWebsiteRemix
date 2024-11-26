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
