import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Car_Props } from "../../Dashboard/data";

type Item = {
  data: Car_Props;
  favoriteList: any;
  setFavoriteList: any;
  displayMode: string;
};

const Cars_Image: any = {
  Volkswagen: "/images/cars/first-car.svg",
  Jeep: "/images/cars/second-car.svg",
  Mitsubishi: "/images/cars/third-car.svg",
  Porsche: "/images/cars/fourth-car.svg",
  "Mercedes-Benz": "/images/cars/fifth-car.svg",
  Chevrolet: "/images/cars/sixth-car.svg",
  Buick: "/images/cars/first-car.svg",
  Mazda: "/images/cars/second-car.svg",
  Dodge: "/images/cars/third-car.svg",
  Audi: "/images/cars/fourth-car.svg",
  Ford: "/images/cars/fifth-car.svg",
  GMC: "/images/cars/sixth-car.svg",
  Honda: "/images/cars/first-car.svg",
  Cadillac: "/images/cars/second-car.svg",
  Pontiac: "/images/cars/third-car.svg",
};

const CarCard = ({
  data,
  favoriteList,
  setFavoriteList,
  displayMode,
}: Item) => {
  const handleClick = (item: Car_Props) => {
    if (favoriteList.find((c: Car_Props) => c.id === item.id)) {
      const newFilters = favoriteList.filter(
        (e: Car_Props) => e.id !== item.id
      );
      setFavoriteList([...newFilters]);
    } else {
      setFavoriteList([...favoriteList, item]);
    }
  };
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className={`h-[267px] rounded-[16px] p-6 bg-white flex flex-col items-center justify-between ${
        displayMode === "grid" ? "w-[325px]" : "w-full"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="font-DMSansMedium text-lg font-bold leading-6 text-[#242731]">
          {data.car} {data.car_model}
        </h3>
        <button onClick={() => handleClick(data)}>
          <Image
            height={20}
            width={20}
            src={
              favoriteList.find((c: Car_Props) => c.id === data.id)
                ? "/images/cars/redHeart.svg"
                : "/images/cars/grayHeart.svg"
            }
            priority
            alt=""
          />
        </button>
      </div>
      <p className="font-DMSansMedium text-base font-normal leading-[21px] text-[#72767C] text-left w-full">
        {data.type}
      </p>
      <Image
        height={105}
        width={233}
        src={Cars_Image[data.car]}
        priority
        alt=""
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-x-5">
          <div className="flex gap-x-1">
            <Image
              height={20}
              width={20}
              src="/images/cars/seat.svg"
              priority
              alt=""
            />
            <p className="font-DMSansMedium text-lg font-normal leading-6 text-[#72767C]">
              {data.seat}
            </p>
          </div>
          <div className="flex gap-x-1">
            <Image
              height={20}
              width={20}
              src="/images/cars/retweet.svg"
              priority
              alt=""
            />
            <p className="font-DMSansMedium text-lg font-normal leading-6 text-[#72767C]">
              {data.gear_transmission}
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-DMSansMedium text-lg font-medium leading-6 text-[#242731]">
            {data.price}
            <span className="text-lg font-normal leading-6 text-[#72767C]">
              /d
            </span>
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
