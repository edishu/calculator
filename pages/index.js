import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mainBg1">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="font-spartan w-1/3">
        <section className="flex justify-between items-end w-full text-topText1 mb-8">
          <h2 className="text-3xl">calc</h2>
          <div className="flex items-end">
            <h3 className="mr-5 text-sm">THEME</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-1">
              <div className="col-start-1 col-end-2 row-start-1 row-end-2 m-auto pl-1">
                1
              </div>
              <div className="col-start-2 col-end-3 row-start-1 row-end-2 m-auto">
                2
              </div>
              <div className="col-start-3 col-end-4 row-start-1 row-end-2 m-auto pr-1">
                3
              </div>
              <div className="col-start-1 col-end-2 row-start-2 row-end-3 z-10 m-auto  pl-1">
                <div className="bg-eqBg1 h-4 w-4 rounded-full"></div>
              </div>
              <div className="col-start-2 col-end-3 row-start-2 row-end-3 z-10 m-auto">
                <div className="bg-eqBg1 h-4 w-4 rounded-full"></div>
              </div>
              <div className="col-start-3 col-end-4 row-start-2 row-end-3 z-10 m-auto pr-1">
                <div className="bg-eqBg1 h-4 w-4 rounded-full"></div>
              </div>
              <div className="bg-keypadBg1 col-start-1 col-end-4 row-start-2 row-end-3 rounded-full"></div>
            </div>
          </div>
        </section>
        <section className="flex justify-end w-full bg-screenBg1 text-topText1 p-8 rounded-lg mb-8">
          <h2 className="text-4xl">399,881</h2>
        </section>
        <section className="bg-keypadBg1 p-8 rounded-lg">
          <div className="grid grid-cols-4 grid-rows-5 gap-4">
            <Key>7</Key>
            <Key>8</Key>
            <Key>9</Key>
            <p className="rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 bg-delBg1 border-delShad1 text-delText1 text-center">
              DEL
            </p>
            <Key>4</Key>
            <Key>5</Key>
            <Key>6</Key>
            <Key>+</Key>
            <Key>1</Key>
            <Key>2</Key>
            <Key>3</Key>
            <Key>-</Key>
            <Key>.</Key>
            <Key>0</Key>
            <Key>/</Key>
            <Key>x</Key>

            <p className="rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 bg-delBg1  border-delShad1 text-delText1 text-center col-span-2">
              RESET
            </p>
            <p className="rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 bg-eqBg1  border-eqShad1 text-delText1 text-center col-span-2">
              =
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

const Key = ({ children, className }) => {
  return (
    <p
      className={`rounded-lg border-b-4 flex flex-col justify-center pt-2 pb-1 bg-keyBg1 border-keyShad1 text-keyText1 text-center text-3xl ${className}`}
    >
      {children}
    </p>
  );
};
