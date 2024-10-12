import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import ListCard from "../ListCard/ListCard";
import useFetch from '../hooks/useFetch';
import Loader from '../Loader/Loader'

function SearchContent() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [sliderValue, setSliderValue] = useState(10000); 
  const { data, loading, error } = useFetch('https://api.jsonbin.io/v3/b/670a0febe41b4d34e4414a40/latest');

  useEffect(() => {
    if (data) {
      applyFilters();
    }
  }, [data, search, sliderValue]);

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

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center">
      <Loader />
    </div>;
  }

  if (error) {
    return <div className="w-full h-screen flex justify-center items-center text-red-500">Error: {error.message}</div>;
  }

  return (
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
        <p className="text-black text-center w-full my-5 font-semibold text-lg lg:hidden">Search Results</p>
        <div className="right">
          <ListCard data={filtered}/>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
