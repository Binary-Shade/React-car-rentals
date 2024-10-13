import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import ListCard from "../ListCard/ListCard";
import useFetch from '../hooks/useFetch';
import Loader from '../Loader/Loader'

function SearchContent() {
  // search input 
  const [search, setSearch] = useState('');
  // filtered array
  const [filtered, setFiltered] = useState([]);
  // slider value state
  const [sliderValue, setSliderValue] = useState(10000); 
  // useHook fetch api
  const { data, loading, error } = useFetch('https://api.jsonbin.io/v3/b/670a0febe41b4d34e4414a40/latest');

  // user effect to apply filters based on changes
  useEffect(() => {
    if (data) {
      applyFilters();
    }
  }, [data, search, sliderValue]);

  // apply filters function
  const applyFilters = () => {
    const result = data.filter((item) => {
      const itemPrice = parseInt(item.pricePerDay.replace("Rs", "").trim());
      return (
        // condition checking based on filters
        item.carTitle.toLowerCase().includes(search.toLowerCase()) &&
        itemPrice <= sliderValue
      );
    });
    setFiltered(result);
  };

  return (
    <div>
      {
      loading ? (
        <>
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
        </>
      ) : error ? (
        <div className='w-full h-screen flex justify-center items-center'>
        <div className="w-full h-screen flex justify-center items-center text-red-500">Error: {error.message}</div>
        </div>
      ) : (
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
          <p className="text-black text-center w-full my-5 font-semibold text-lg lg:hidden">Search Results</p>
          {
            filtered.length ? (
              <div className="right">
                <ListCard data={filtered}/>
            </div>
            ) : (
              <p className="text-red-500">No results found !</p>
            )
          }
        </div>
      </div>
        </>
      )
    }
    </div>
  );
}

export default SearchContent;
