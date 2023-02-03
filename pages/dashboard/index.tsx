import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";

const Dashboard: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Motiv | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Layout> */}
      <div className="flex w-full flex-1 flex-col h-[500vh] items-center px-[30px] text-center">
        I'm Dashboard
      </div>
      {/* </Layout> */}
    </div>
  );
};

export default Dashboard;
