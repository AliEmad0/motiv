import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Motiv</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex w-full flex-1 flex-col h-[500vh] items-center px-[30px] text-center">
        I'm Main
      </div>
    </div>
  );
};

export default Home;
