import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import ListCard from "../ListCard/ListCard";
import data from "../../Data/cars";

function SearchContent() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(data);
  const [sliderValue, setSliderValue] = useState(10000); 

  useEffect(() => {
    applyFilters();
  }, [search, sliderValue]); 

  const applyFilters = () => {
    const result = data.filter((item) => {
      const itemPrice = parseInt(item.pricePerDay.replace("Rs", "").trim());
      return (
        item.carTitle.toLowerCase().includes(search.toLowerCase()) &&
        itemPrice <= sliderValue
      );
    });
    setFiltered(result);
  };

  return (
    <>
      <div className="overflow-hidden p-2 lg:px-32 py-10 bg-white w-full">
        <div className="flex flex-wrap justify-center lg:justify-evenly w-full">
          <div className="left">
            <Search
              search={search}
              setSearch={setSearch}
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
          </div>
          <p className="text-white text-center w-full my-5 font-semibold text-lg lg:hidden">search results</p>
          <div className="right">
            <ListCard data={filtered} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchContent;
