module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      spartan: ["Spartan", "ui-sans-serif", "system-ui"]
    },
    extend: {
      colors: {
        mainBg1: "hsl(222, 26%, 31%)",
        keypadBg1: "hsl(223, 31%, 20%)",
        screenBg1: "hsl(224, 36%, 15%)",
        delBg1: "hsl(225, 21%, 49%)",
        delShad1: "hsl(224, 28%, 35%)",
        eqBg1: "hsl(6, 63%, 50%)",
        eqShad1: "hsl(6, 70%, 34%)",
        keyBg1: "hsl(30, 25%, 89%)",
        keyShad1: "hsl(28, 16%, 65%)",
        topText1: "hsl(0, 0, 100%)",
        keyText1: "hsl(221, 14%, 31%)",
        delText1: "hsl(0, 0, 100%)",
        eqText1: "hsl(0, 0, 100%)",

        mainBg2: "hsl(0, 0%, 90%)",
        keypadBg2: "hsl(0, 5%, 81%)",
        screenBg2: "hsl(0, 0%, 93%)",
        delBg2: "hsl(185, 42%, 37%)",
        delShad2: "hsl(185, 58%, 25%)",
        eqBg2: "hsl(25, 98%, 40%)",
        eqShad2: "hsl(25, 99%, 27%)",
        keyBg2: "hsl(45, 7%, 89%)",
        keyShad2: "hsl(35, 11%, 61%)",
        topText2: "hsl(60, 10%, 19%)",
        keyText2: "hsl(60, 10%, 19%)",
        delText2: "hsl(0, 0, 100%)",
        eqText2: "hsl(0, 0, 100%)",

        mainBg3: "hsl(268, 75%, 9%)",
        keypadBg3: "hsl(268, 71%, 12%)",
        screenBg3: "hsl(268, 71%, 12%)",
        delBg3: "hsl(281, 89%, 26%)",
        delShad3: "hsl(285, 91%, 52%)",
        eqBg3: "hsl(176, 100%, 44%)",
        eqShad3: "hsl(177, 92%, 70%)",
        keyBg3: "hsl(268, 47%, 21%)",
        keyShad3: "hsl(290, 70%, 36%)",
        topText3: "hsl(52, 100%, 62%)",
        keyText3: "hsl(52, 100%, 62%)",
        delText3: "hsl(0, 0, 100%)",
        eqText3: "hsl(198, 20%, 13%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
