import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import DashCarCard from "../components/Dashboard/DashboardCarCard";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";
import { Car_Props } from "../components/Dashboard/DashboardCarCard/data";

// const Cars_Data: Item[] = [
//   {
//     id: 1,
//     name: "Mini Cooper",
//     recommend: "64%",
//     price: "32",
//     retweet: "132K",
//     img: "/images/dashboard/first-car.svg",
//     color: "#E1DFA4",
//   },
//   {
//     id: 2,
//     name: "Porsche 911 Carrera",
//     recommend: "74%",
//     price: "28",
//     retweet: "130K",
//     img: "/images/dashboard/second-car.svg",
//     color: "#E3ECF1",
//   },
//   {
//     id: 3,
//     name: "Porsche 911 Carrera",
//     recommend: "74%",
//     price: "28",
//     retweet: "130K",
//     img: "/images/dashboard/third-car.svg",
//     color: "#F4E3E5",
//   },
// ];

type Props = {
  cars: Car_Props[];
};

const Home: NextPage<Props> = (cars: Props) => {
  const [data, setData] = useState<Car_Props[]>([]);
  const [loading, setLoading] = useState(false);
  console.log("cars:", cars);
  console.log("data:", data);

  useEffect(() => {
    setLoading(true);
    setData(cars.cars);
    setLoading(false);
  }, []);

  const getLargestThree = useMemo(
    () =>
      data
        ?.sort((a: { retweet: number }, b: { retweet: number }) =>
          a.retweet < b.retweet ? 1 : a.retweet > b.retweet ? -1 : 0
        )
        ?.slice(0, 3),
    [data]
  );
  console.log("getLargestThree:", getLargestThree);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Motiv</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex w-full flex-1 flex-col items-center md:items-start px-[30px] text-center py-7 gap-y-[30px]">
        {/* // ! First Section */}
        <div className="w-fit grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 justify-items-center md:justify-items-start gap-[36px]">
          <div className="w-[232px] h-[266px] bg-slate-600">1</div>
          <div className="w-[232px] h-[266px] bg-slate-600">2</div>
          <div className="w-[232px] h-[266px] bg-slate-600">3</div>
          <div className="w-[232px] h-[266px] bg-slate-600">4</div>
        </div>

        {/* // ! Second Section */}
        <div className="w-full flex flex-wrap gap-[30px] justify-center md:justify-start">
          <div className="w-[554px] h-[222px] bg-[#FFE0BA] rounded-[4px] flex flex-row items-center pl-6 justify-between">
            <div className="flex flex-col text-left">
              <h3 className="font-EffraBold font-bold text-2xl leading-[28.51px] text-[#0F2837]">
                Apply for a car loan !
              </h3>
              <p className="font-EffraMedium font-normal text-base leading-[19px] text-[#0F2837]">
                This is a sample of a generated text
              </p>
              <button className="w-[125px] h-[38px] flex items-center justify-center bg-[#0F2837] rounded-[4px] mt-6 text-white font-EffraBold font-bold text-xs leading-[14px]">
                Discover More
              </button>
            </div>
            <div>
              <Image
                height={185.83}
                width={226.11}
                src="/images/dashboard/first-image.svg"
                priority
                alt=""
              />
            </div>
          </div>
          <div className="w-[210px] h-[222px] bg-[#0F2837] flex flex-col rounded-[4px] pl-6 pt-5 items-center">
            <div className="flex flex-row text-left w-full">
              <h3 className="text-white font-EffraBold font-bold text-2xl leading-[28.51px]">
                You
                <br />
                have
                <br />
                earned
                <br />
                <span className="text-[#FF9619] font-EffraBold font-bold text-[40px] leading-[48px]">
                  20
                </span>
                <br />
                Badges!
              </h3>
              <Image
                height={110}
                width={110}
                src="/images/dashboard/second-image.svg"
                priority
                alt=""
                className="mb-auto -ml-[10px]"
              />
            </div>
            <p className="text-[#FF9619] font-Effra font-normal text-xs leading-[14px] text-left w-full">
              Hooray! Way to go Mohammed!
            </p>
          </div>
          <div className="w-[210px] h-[222px] bg-[#6E1946] flex flex-col rounded-[4px] pl-6 pt-5 items-center">
            <div className="flex flex-row text-left w-full">
              <h3 className="text-white font-EffraBold font-bold text-2xl leading-[28.51px]">
                You
                <br />
                have
                <br />
                earned
                <br />
                <span className="text-[#FAC39B] font-EffraBold font-bold text-[40px] leading-[48px]">
                  1500
                </span>
                <br />
                Points!
              </h3>
              <Image
                height={101}
                width={101}
                src="/images/dashboard/third-image.svg"
                priority
                alt=""
                className="mb-auto -ml-5"
              />
            </div>
            <p className="text-[#FAC39B] font-Effra font-normal text-xs leading-[14px] text-left w-full">
              Redeem and claim your rewards!
            </p>
          </div>
        </div>

        {/* // ! Third Section */}
        {loading ? (
          <Spinner />
        ) : data?.length ? (
          <div className="w-fit grid grid-rows-3 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 justify-items-center md:justify-items-start gap-[40px]">
            {getLargestThree?.map((car: Car_Props, i: number) => (
              <DashCarCard key={car.id} carData={car} index={i} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://mocki.io/v1/e212a2b9-5b2f-4e02-b021-4c650314a043"
  );
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

export default Home;
