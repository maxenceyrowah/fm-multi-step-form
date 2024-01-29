/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // primary
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue: "hsl(243, 100%, 62%)",
        pastelblue: "hsl(228, 100%, 84%)",
        lightblue: "hsl(206, 94%, 87%)",
        strawberryred: "hsl(354, 84%, 57%)",

        // neutral
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        whiteNeutral: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
