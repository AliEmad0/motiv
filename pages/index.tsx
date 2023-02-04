import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import DashCarCard from "../components/Dashboard/DashboardCarCard";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";
import { Car_Props } from "../components/Dashboard/DashboardCarCard/data";
import { motion, useMotionValue, useTransform } from "framer-motion";

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

  const pathLength = useMotionValue(0.5);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Motiv</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex w-full flex-1 flex-col items-center md:items-start px-[30px] text-center py-7 gap-y-[30px]">
        {/* // ! First Section */}
        <div className="w-fit grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 justify-items-center md:justify-items-start gap-[36px]">
          <div className="w-[232px] h-[266px] rounded-[14px] flex flex-col items-center bg-[#A162F7] justify-center">
            <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#a66ff0]">
              <Image
                height={20}
                width={20}
                src="/images/dashboard/energy.svg"
                priority
                alt=""
              />
            </div>
            <p className="font-DMSansMedium font-bold text-2xl leading-[31px] text-white mt-[10px] mb-[30px]">
              Energy
            </p>
            {/* // ! */}

            <div className="relative flex items-center justify-center w-[112px] h-[95px]">
              <svg
                className="relative"
                width="112"
                height="95"
                viewBox="0 0 112 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="absolute"
                  d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
                  fill="#F4F5F9"
                />
                <motion.path
                  key="path"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.25 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  }}
                  style={{ pathLength: 0.25 }}
                  strokeDashoffset="1.1"
                  strokeDasharray="0 1"
                  className="absolute"
                  d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
                  fill="#FF7E86"
                />
              </svg>
              <p className="absolute font-DMSansMedium font-bold text-2xl leading-[31px] text-white">
                45%
              </p>
            </div>

            {/* // ! */}
          </div>
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
    "https://mocki.io/v1/424de33c-5a45-40f7-a480-2b7532c586fe"
  );
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  };
}

export default Home;
