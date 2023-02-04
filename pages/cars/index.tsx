import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useMemo, useState } from "react";
import DropDown from "../../components/DropDown";
import CarCard from "../../components/Cars/CarCard";
import { Car_Props } from "../../components/Dashboard/DashboardCarCard/data";
import Spinner from "../../components/Spinner";

const Model_Option: {
  title: string;
  value: string;
}[] = [
  { title: "New", value: "New" },
  { title: "Old", value: "Old" },
];
const Car_Model_Option: {
  title: string;
  value: string;
}[] = [
  { title: "All", value: "All" },
  { title: "Volkswagen", value: "Volkswagen" },
  { title: "Jeep", value: "Jeep" },
  { title: "Mitsubishi", value: "Mitsubishi" },
  { title: "Porsche", value: "Porsche" },
  { title: "Mercedes", value: "Mercedes" },
  { title: "Chevrolet", value: "Chevrolet" },
  { title: "Buick", value: "Buick" },
  { title: "Mazda", value: "Mazda" },
  { title: "Dodge", value: "Dodge" },
  { title: "Audi", value: "Audi" },
  { title: "Ford", value: "Ford" },
  { title: "GMC", value: "GMC" },
  { title: "Honda", value: "Honda" },
  { title: "Cadillac", value: "Cadillac" },
  { title: "Pontiac", value: "Pontiac" },
];

type Props = {
  cars: Car_Props[];
};

const Cars: NextPage<Props> = (cars: Props) => {
  console.log("cars:", cars);
  const [data, setData] = useState<Car_Props[]>([]);
  const [loading, setLoading] = useState(true);
  const [modelYear, setModelYear] = useState<string>("New");
  const [carModel, setCarModel] = useState("All");
  const [displayMode, setDisplayMode] = useState("grid");
  const [openFilter, setOpenFilter] = useState(true);

  console.log("modelYear:", modelYear);
  console.log("carModel:", carModel);
  console.log("data:", data);

  useEffect(() => {
    setLoading(true);
    if (carModel === "All") {
      setData(cars.cars);
    } else {
      setData(cars.cars.filter((c) => c.car.includes(carModel)));
    }
    setLoading(false);
  }, [carModel]);

  const FilteredData = useMemo(() => {
    let newData = [];
    if (modelYear === "New") {
      newData = data.sort((a, b) => b.car_model_year - a.car_model_year);
    } else {
      newData = data.sort((a, b) => a.car_model_year - b.car_model_year);
    }
    return newData;
  }, [modelYear, data]);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Motiv | Cars</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="flex w-full flex-1 flex-col px-[30px] py-[30px] gap-y-[34px]">
        <h2 className="font-DMSansMedium font-bold text-3xl leading-[39px] text-[#242731]">
          Booking
        </h2>
        {/* // ! Filter Section */}
        <div className="flex flex-row w-full items-center justify-between bg-slate-500">
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
              onClick={() => setOpenFilter((prev) => !prev)}
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

        {/* // ! Cards Section */}
        {loading ? (
          <Spinner />
        ) : data?.length ? (
          <div className="flex flex-wrap gap-6">
            {FilteredData.map((car) => (
              <CarCard key={car.id} data={car} />
            ))}
          </div>
        ) : (
          <p>No data in this list</p>
        )}
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

export default Cars;
