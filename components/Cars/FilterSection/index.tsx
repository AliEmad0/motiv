import Image from "next/image";
import React from "react";
import DropDown from "../../DropDown";
import { Model_Option, Car_Model_Option } from "../data";

type Props = {
  openFilter: boolean;
  modelYear: string;
  setModelYear: any;
  carModel: string;
  setCarModel: any;
  displayMode: string;
  setDisplayMode: any;
  setOpenFilter: any;
};

const FilterSection = ({
  openFilter,
  modelYear,
  setModelYear,
  carModel,
  setCarModel,
  displayMode,
  setDisplayMode,
  setOpenFilter,
}: Props) => {
  return (
    <div className="flex flex-row w-full items-center justify-between">
      <div className="flex gap-x-4">
        {openFilter ? (
          <>
            <DropDown
              buttonValue={modelYear}
              setButtonValue={setModelYear}
              modelOption={Model_Option}
            />
            <DropDown
              buttonValue={carModel}
              setButtonValue={setCarModel}
              modelOption={Car_Model_Option}
            />
          </>
        ) : null}
      </div>
      <div className="flex gap-x-4">
        <button
          onClick={() => {
            if (displayMode === "grid") {
              setDisplayMode("line");
            } else {
              setDisplayMode("grid");
            }
          }}
          className="w-11 h-11 rounded-[30px] shadow-lg bg-white flex items-center justify-center"
        >
          <Image
            height={24}
            width={24}
            src="/images/cars/grayDisplay.svg"
            priority
            alt=""
          />
        </button>
        <button
          onClick={() => setOpenFilter((prev: boolean) => !prev)}
          className={`w-11 h-11 rounded-[30px] shadow-lg flex items-center justify-center ${
            openFilter ? "bg-[#A162F7]" : "bg-white"
          }`}
        >
          <Image
            height={24}
            width={24}
            src={`/images/cars/${
              openFilter ? "whiteFilter.svg" : "grayFilter.svg"
            }`}
            priority
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
