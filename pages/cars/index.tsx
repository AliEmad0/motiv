import type { NextPage } from "next";
import Head from "next/head";

const Cars: NextPage = () => (
  <div className="h-screen w-full">
    <Head>
      <title>Motiv | Cars</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <div className="flex w-full flex-1 flex-col h-[500vh] items-center px-[30px] text-center">
      I'm Cars
    </div>
  </div>
);

export default Cars;
