import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-spartan">
      <Head>
        <title>Calculator App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <h1>Calculator</h1>
    </div>
  );
}
