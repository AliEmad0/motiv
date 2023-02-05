import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";

type Props = {
  img: string;
  title: string;
  number: string;
  iconWidth: number;
  rate: number;
};

const FirstCard = ({ img, title, number, iconWidth, rate }: Props) => {
  return (
    <div
      className={`w-[232px] h-[266px] rounded-[14px] flex flex-col items-center justify-center ${
        title === "Energy"
          ? "bg-[#A162F7] text-white"
          : "bg-white text-[#242731]"
      }`}
    >
      <div
        className={`w-[38px] h-[38px] rounded-full flex items-center justify-center ${
          title === "Energy"
            ? "bg-[#a66ff0]"
            : title === "Range"
            ? "bg-[#ff7e861a]"
            : title === "Break fluid"
            ? "bg-[#a162f71a]"
            : "bg-[#f6cc0d1a]"
        }`}
      >
        <Image height={20} width={iconWidth} src={img} priority alt="" />
      </div>
      <p className="font-DMSansMedium font-bold text-2xl leading-[31px] mt-[10px] mb-[30px]">
        {title}
      </p>

      <div className="relative flex items-center justify-center w-[112px] h-[95px]">
        <svg
          className="absolute"
          width="112"
          height="95"
          viewBox="0 0 112 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
            fill={title === "Energy" ? "#B37EFC" : "#F4F5F9"}
          />
        </svg>
        <svg
          className="absolute left-0"
          width={rate}
          height="95"
          viewBox={`0 0 ${rate} 95`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.1 }}
            fill={
              title === "Energy"
                ? "#FFFFFF"
                : title === "Range"
                ? "#FF7E86"
                : title === "Break fluid"
                ? "#A162F7"
                : "#F6CC0D"
            }
          />
        </svg>

        <p className="absolute font-DMSansMedium font-bold text-2xl leading-[31px]">
          {number}
        </p>
      </div>
    </div>
  );
};

export default FirstCard;