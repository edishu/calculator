import Head from "next/head";
import { useState } from "react";

const themes = {
  1: {
    mainBg: "bg-mainBg1",
    keypadBg: "bg-keypadBg1",
    screenBg: "bg-screenBg1",
    delBg: "bg-delBg1",
    delShad: "border-delShad1",
    eqBg: "bg-eqBg1",
    eqShad: "border-eqShad1",
    keyBg: "bg-keyBg1",
    keyShad: "border-keyShad1",
    topText: "text-topText1",
    keyText: "text-keyText1",
    delText: "text-delText1",
    eqText: "text-eqText1"
  },
  2: {
    mainBg: "bg-mainBg2",
    keypadBg: "bg-keypadBg2",
    screenBg: "bg-screenBg2",
    delBg: "bg-delBg2",
    delShad: "border-delShad2",
    eqBg: "bg-eqBg2",
    eqShad: "border-eqShad2",
    keyBg: "bg-keyBg2",
    keyShad: "border-keyShad2",
    topText: "text-topText2",
    keyText: "text-keyText2",
    delText: "text-delText2",
    eqText: "text-eqText2"
  },
  3: {
    mainBg: "bg-mainBg3",
    keypadBg: "bg-keypadBg3",
    screenBg: "bg-screenBg3",
    delBg: "bg-delBg3",
    delShad: "border-delShad3",
    eqBg: "bg-eqBg3",
    eqShad: "border-eqShad3",
    keyBg: "bg-keyBg3",
    keyShad: "border-keyShad3",
    topText: "text-topText3",
    keyText: "text-keyText3",
    delText: "text-delText3",
    eqText: "text-eqText3"
  }
};

export default function Home() {
  const [theme, setTheme] = useState("1");

  return (
    <div
      className={`min-h-screen px-8 sm:px-0 flex flex-col sm:items-center justify-center ${themes[theme].mainBg}`}
    >
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="font-spartan sm:w-1/2 md:w-1/3">
        <section
          className={`flex justify-between items-end w-full ${themes[theme].topText} mb-8`}
        >
          <h2 className="text-xl sm:text-3xl">calc</h2>
          <div className="flex items-end">
            <h3 className="mr-5 text-xs sm:text-sm">THEME</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-1">
              <label
                onClick={() => setTheme("1")}
                className="col-start-1 col-end-2 row-start-1 row-end-2 m-auto pl-1 cursor-pointer text-xs sm:text-base"
              >
                1
              </label>
              <div
                onClick={() => setTheme("2")}
                className="col-start-2 col-end-3 row-start-1 row-end-2 m-auto cursor-pointer text-xs sm:text-base"
              >
                2
              </div>
              <div
                onClick={() => setTheme("3")}
                className="col-start-3 col-end-4 row-start-1 row-end-2 m-auto pr-1 cursor-pointer text-xs sm:text-base"
              >
                3
              </div>
              <div className="col-start-1 col-end-2 row-start-2 row-end-3 z-10 m-auto  pl-1">
                <div
                  onClick={() => setTheme("1")}
                  className={`${
                    theme === "1" ? themes[theme].eqBg : ""
                  } h-4 w-4 rounded-full cursor-pointer`}
                ></div>
              </div>
              <div className="col-start-2 col-end-3 row-start-2 row-end-3 z-10 m-auto">
                <div
                  onClick={() => setTheme("2")}
                  className={`${
                    theme === "2" ? themes[theme].eqBg : ""
                  } h-4 w-4 rounded-full cursor-pointer`}
                ></div>
              </div>
              <div className="col-start-3 col-end-4 row-start-2 row-end-3 z-10 m-auto pr-1">
                <div
                  onClick={() => setTheme("3")}
                  className={`${
                    theme === "3" ? themes[theme].eqBg : ""
                  } h-4 w-4 rounded-full cursor-pointer`}
                ></div>
              </div>
              <div
                className={`${themes[theme].keypadBg} col-start-1 col-end-4 row-start-2 row-end-3 rounded-full`}
              ></div>
            </div>
          </div>
        </section>
        <section
          className={`flex justify-end w-full ${themes[theme].screenBg} text-topText${theme} p-8 rounded-lg mb-8`}
        >
          <h2 className="text-4xl">399,881</h2>
        </section>
        <section className={`bg-keypadBg${theme} p-8 rounded-lg`}>
          <div className="grid grid-cols-4 grid-rows-5 gap-4">
            <Key theme={theme}>7</Key>
            <Key theme={theme}>8</Key>
            <Key theme={theme}>9</Key>
            <p
              className={`rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 ${themes[theme].delBg} ${themes[theme].delShad} ${themes[theme].delText} text-center`}
            >
              DEL
            </p>
            <Key theme={theme}>4</Key>
            <Key theme={theme}>5</Key>
            <Key theme={theme}>6</Key>
            <Key theme={theme}>+</Key>
            <Key theme={theme}>1</Key>
            <Key theme={theme}>2</Key>
            <Key theme={theme}>3</Key>
            <Key theme={theme}>-</Key>
            <Key theme={theme}>.</Key>
            <Key theme={theme}>0</Key>
            <Key theme={theme}>/</Key>
            <Key theme={theme}>x</Key>

            <p
              className={`rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 ${themes[theme].delBg} ${themes[theme].delShad} ${themes[theme].delText} text-center col-span-2`}
            >
              RESET
            </p>
            <p
              className={`rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 ${themes[theme].eqBg} ${themes[theme].eqShad} ${themes[theme].eqText} text-center col-span-2`}
            >
              =
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

const Key = ({ children, className, theme }) => {
  return (
    <p
      className={`rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 ${themes[theme].keyBg} ${themes[theme].keyShad} ${themes[theme].keyText}  text-center text-3xl ${className}`}
    >
      {children}
    </p>
  );
};
