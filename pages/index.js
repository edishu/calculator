import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mainBg1">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="font-spartan w-1/3">
        <section className="flex justify-between w-full text-topText1">
          <h2 className="">calc</h2>
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
        <section className="flex justify-between w-full">
          <h2>399,881</h2>
        </section>
      </div>
    </div>
  );
}
