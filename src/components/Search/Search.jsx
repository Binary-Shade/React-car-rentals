import React, { useState } from 'react';
import DatePicker from './DatePicker';

const Search = ({ search, setSearch, sliderValue, setSliderValue }) => {
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    // date range state
    const [dateValue, setDateValue] = useState({ 
        startDate: null, 
        endDate: null
    });

    const handleSliderChange = (event) => {
        const value = parseInt(event.target.value);
        setSliderValue(value);
    };

    const handleReset = () => {
        setSearch('');
        setPickupDate('');
        setDropoffDate('');
        setSliderValue(5000);
    };

    const handleChange = (newValue) => {
        setDateValue(newValue)
        console.log(newValue);
    };
    

    return (
        <div className='container'>
            <div>
                <form className="w-max-[380px] w-max shadow-lg lg:w-max bg-white p-5 rounded" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium text-stone-600">Car Name</label>
                            <input 
                                type="text" 
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Enter car name" 
                                className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
                            />
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="pickupDate" className="text-sm font-medium text-stone-600">Date Range</label>
                        <DatePicker dateValue={dateValue} setDateValue={setDateValue} handleChange={handleChange}/>
                        </div>
        

                        <div className="flex flex-col">
                            <label htmlFor="vehicleType" className="text-sm font-medium text-stone-600">Vehicle Type</label>
                            <select id="vehicleType" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                <option>SUV</option>
                                <option>Sedan</option>
                                <option>HatchBack</option>
                                <option>MuV</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="priceRange" className="text-sm font-medium text-stone-600">Price Range</label>
                            <input 
                                type="range" 
                                id="priceRange" 
                                value={sliderValue} 
                                onChange={handleSliderChange} 
                                className="w-full accent-indigo-600" 
                                min="0" 
                                max="10000" 
                            />
                            <div className="flex justify-between text-gray-500 mt-2">
                                <span>$0</span>
                                <span>{`$${sliderValue}`}</span>
                                <span>$10000</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                        <button 
                            type="button" 
                            onClick={handleReset} 
                            className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
