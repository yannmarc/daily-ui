import React, { Fragment } from 'react'
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = () => {
    const [active, setActive] = useState(false);
    const years = [ "2017-2018","2019-2020", "2021-2022"];

    const handleActive = () => {
        setActive((prevState) => !prevState);
    }
  return (
    <Fragment>
        <div className="input flex flex-col px-[30px] py-[24px] bg-gray-100 rounded-sm rign-offset-1 focus:ring-4 ring-[#0B3C49] relative" onClick={handleActive}>
           <div className="data flex justify-between items-center">
                <span>Academic Year</span>
                <span className={`${active ? 'rotate-180' : 'rotate-0'} transition-all`}><FaAngleDown onClick={handleActive}/></span>
           </div>
        
            <div className={`${active ? "block" : "hidden"} dropdown mt-4 absolute top-[50px] left-0 bg-[#3F93B2] w-full`}>
                <ul className='px-[20px] py-[12px]'>
                    {
                        years.map((year) => {
                            return(
                                <li key={year} className="hover:bg-gray-50 text-white hover:text-[#3F93B2] mt-1 p-2">{year}</li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    </Fragment>
  )
}

export default Dropdown