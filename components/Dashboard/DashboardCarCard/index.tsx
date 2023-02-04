import Image from "next/image";
import React from "react";

type Item = {
  carData: {
    id: number;
    name: string;
    recommend: string;
    price: string;
    retweet: string;
    img: string;
    color: string;
  };
};

const DashCarCard = ({
  carData: { name, recommend, img, retweet, price, color },
}: Item) => (
  <div
    className={`w-[318px] h-[236px] flex flex-col rounded-[14px] px-7 py-4 justify-between bg-[${color}]`}
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
        {recommend} Recommend
      </h3>
    </div>
    <div>
      <Image height={106} width={257} src={img} priority alt="" />
    </div>
    <div className="flex flex-col">
      <h3 className="font-DMSansMedium font-bold text-xl leading-[26.08px] text-left text-[#242731]">
        {name}
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
              {retweet}
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
          ${price}/h
        </p>
      </div>
    </div>
  </div>
);

export default DashCarCard;
