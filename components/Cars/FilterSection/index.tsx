import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
          {openFilter ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-4"
            >
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
            </motion.div>
          ) : null}
        </AnimatePresence>
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
