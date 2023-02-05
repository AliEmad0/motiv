import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import CarCard from "../../components/Cars/CarCard";
import { Car_Props } from "../../components/Dashboard/data";
import Spinner from "../../components/Spinner";
import Layout from "../../components/Layout";
import FilterSection from "../../components/Cars/FilterSection";

type Props = {
  cars: Car_Props[];
};

const Cars: NextPage<Props> = (cars: Props) => {
  const [data, setData] = useState<Car_Props[]>([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modelYear, setModelYear] = useState<string>("New");
  const [carModel, setCarModel] = useState("All");
  const [displayMode, setDisplayMode] = useState("grid");
  const [openFilter, setOpenFilter] = useState(true);
  const [inputValue, setInputValue] = useState("");

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
      newData = data
        .sort((a, b) => b.car_model_year - a.car_model_year)
        .filter((c) => c.car.toLowerCase().includes(inputValue.toLowerCase()));
    } else {
      newData = data
        .sort((a, b) => a.car_model_year - b.car_model_year)
        .filter((c) => c.car.toLowerCase().includes(inputValue.toLowerCase()));
    }
    return newData;
  }, [modelYear, data, inputValue]);

  return (
    <div className="h-full w-full">
      <Head>
        <title>Motiv | Cars</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout inputValue={inputValue} setInputValue={setInputValue}>
        <div className="flex w-full flex-1 flex-col px-[30px] py-[30px] gap-y-[34px]">
          <h2 className="font-DMSansMedium font-bold text-3xl leading-[39px] text-[#242731]">
            Booking
          </h2>
          {/* // ! Filter Section */}
          <FilterSection
            openFilter={openFilter}
            modelYear={modelYear}
            setModelYear={setModelYear}
            carModel={carModel}
            setCarModel={setCarModel}
            displayMode={displayMode}
            setDisplayMode={setDisplayMode}
            setOpenFilter={setOpenFilter}
          />

          {/* // ! Cards Section */}
          {loading ? (
            <Spinner />
          ) : FilteredData?.length ? (
            <div className="flex flex-wrap gap-6">
              {FilteredData.map((car) => (
                <CarCard
                  key={car.id}
                  data={car}
                  favoriteList={favoriteList}
                  setFavoriteList={setFavoriteList}
                  displayMode={displayMode}
                />
              ))}
            </div>
          ) : (
            <p>No data in this list</p>
          )}
        </div>
      </Layout>
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
