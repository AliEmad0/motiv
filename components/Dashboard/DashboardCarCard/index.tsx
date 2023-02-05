import Image from "next/image";
import React from "react";
import { Car_Props } from "../data";

type Item = {
  carData: Car_Props;
  index: number;
};

const DashCarCard = ({ carData, index }: Item) => (
  <div
    className={`w-[318px] h-[236px] flex flex-col rounded-[14px] px-7 py-4 justify-between ${
      index === 0
        ? "bg-[#E1DFA4]"
        : index === 1
        ? "bg-[#E3ECF1]"
        : "bg-[#F4E3E5]"
    }`}
  >
    <div className="flex flex-row gap-x-3 items-center">
      <Image
        height={24}
        width={24}
        src="/images/dashboard/rotate-icon.svg"
        priority
        alt=""
      />
      <h3 className="font-DMSansMedium font-bold text-base leading-[21px] text-[#242731]">
        {carData.recommend}% Recommend
      </h3>
    </div>
    <div>
      <Image
        height={106}
        width={257}
        src={
          index === 0
            ? "/images/dashboard/first-car.svg"
            : index === 1
            ? "/images/dashboard/second-car.svg"
            : "/images/dashboard/third-car.svg"
        }
        priority
        alt=""
      />
    </div>
    <div className="flex flex-col">
      <h3 className="font-DMSansMedium font-bold text-xl leading-[26.08px] text-left text-[#242731]">
        {carData.car}
      </h3>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-x-4">
          <button className="flex flex-row gap-x-4">
            <Image
              height={20}
              width={20}
              src="/images/dashboard/retweet-icon.svg"
              priority
              alt=""
            />
            <span className="font-DMSansRegular font-medium text-sm leading-[18px] text-[#72767C]">
              {carData.retweet}K
            </span>
          </button>
          <button>
            <Image
              height={16}
              width={16}
              src="/images/dashboard/third-icon.svg"
              priority
              alt=""
            />
          </button>
          <button>
            <Image
              height={16}
              width={16}
              src="/images/dashboard/flash-icon.svg"
              priority
              alt=""
            />
          </button>
        </div>
        <p className="font-DMSansRegular font-medium text-sm leading-[18px] text-[#72767C]">
          ${carData.rent}/h
        </p>
      </div>
    </div>
  </div>
);

export default DashCarCard;
