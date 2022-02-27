const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  mode: "jit",
  purge: ["./src/**/*.html"],
  //dark: "media", // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      backgroundImage: (theme) => ({
        heroPattern: "url('../images/heroPattern.svg')",
        nftHero: "url('../images/nftHero.svg')",
        personHero: "url('../images/person.png')",
        indexHeroBg: "url('../images/indexHeroBg.png')",
      }),
      boxShadow: {
        static: "0px 10px 0px -10px rgba(151,163,184,.5), 0px 20px 10px -20px rgba(151,163,184,.5),0px 30px 20px -25px rgba(151,163,184,.5),0px 40px 30px -30px rgba(151,163,184,.5),0px 50px 50px -35px rgba(151,163,184,.5);",
        staticButton: "0px 10px 0px -10px rgba(43, 84, 248,.7), 0px 20px 10px -20px rgba(43, 84, 248,.7),0px 30px 20px -25px rgba(43, 84, 248,.7)",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
        "13xl": "11rem",
        "14xl": "12rem",
        "15xl": "13rem",
        "16xl": "14rem",
        "17xl": "15rem",
        "18xl": "16rem",
        "19xl": "17rem",
        "20xl": "18rem",
      },
      colors: {
        //wicked whites
        ghost: "#f9fafe",
        antiflash: "#f2f2f5",
        lilac: "#e6e7eb",
        zircon: "#dbdde4",
        cat: "#d0d2db",
        metal: "#c5c7d3",
        cadet: "#b7b9c8",
        fish: "#a8abbd",
        stone: "#9a9db2",
        club: "#8186a0",
        waterloo: "#777c97",
        storm: "#6c718e",
        kim: "#636883",
        comet: "#5b5f78",
        bay: "#52566d",
        cloud: "#383c4b",
        pearl: "#1f2129",
        vulcan: "#16181d",

        //primary
        gitter: "#e4eeff",
        icy: "#d5ddfe",
        periwinkly: "#bfccfd",
        pastel: "#aabbfc",
        widowmaker: "#95aafc",
        periblue: "#8098fb",
        punch: "#6b87fa",
        oyster: "#5576f9",
        mana: "#4065f9",
        ultramarine: "#445cff",
        crayoln: "#2b54f8",
        palatinate: "#274cdf",
        azulo: "#2243c6",
        //tertiary
        bubble: "#e9fdff",
        marvel: "#d7faff",
        onahau: "#c2f9fe",
        celeste: "#b0f6ff",
        anakiwa: "#9cf3ff",
        electric: "#87f2fe",
        babe: "#4ceaff",
        coise: "#3ae8fe",
        spiro: "#22e5ff",
        aqua: "#00e0fe",

      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({
      addVariant,
      e,
      postcss
    }) {
      addVariant("firefox", ({
        container,
        separator
      }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
