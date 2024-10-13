import React from 'react'
import { useState } from "react"; 
import Datepicker from "react-tailwindcss-datepicker";
// import dayjs from 'dayjs';

const DatePicker = ({dateValue, setDateValue, handleChange}) => {
    
  return (
        <Datepicker
            value={dateValue} 
            onChange={(dateValue)=>handleChange(dateValue)}
            inputClassName={'bg-white'}
            toggleClassName={'bg-white'}
            containerClassName={'bg-white'}
            classNames={'bg-white'}
            placeholder='Enter Your Pickup-Date range'
        /> 
  )
}

export default DatePicker