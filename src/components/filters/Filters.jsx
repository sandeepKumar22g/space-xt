import React from 'react';
import Results from '../results/Results';
import "./filters.css"

const Filters = () => {
  return(
  <div className='main '>
      <div className='filters'>
          <div className='border dark:border-white mx-2'>
           <h1 className='text-xl text-black dark:text-white px-3'>Filters</h1>
                <p className='text-sm flex justify-center underline mb-2'> &nbsp; &nbsp; Launch Year &nbsp;&nbsp;</p>
                <div className='grid grid-cols-2'>
                    <button>2006</button>
                    <button>2007</button>
                    <button>2008</button>
                    <button>2009</button>
                    <button>2010</button>
                    <button>2011</button>
                    <button>2012</button>
                    <button>2013</button>
                    <button>2014</button>
                    <button>2015</button>
                    <button>2016</button>
                    <button>2017</button>
                    <button>2018</button>
                    <button>2019</button>
                    <button>2020</button>
        
                </div>
            <p className='text-sm flex justify-center underline mt-2 mb-2'>&nbsp;Successful Launch&nbsp;</p>
            <div className='grid grid-cols-2'>
                <button>True</button>
                <button>False</button>
            </div>
            <p className='text-sm flex justify-center underline mt-2 mb-2'>&nbsp;Successful Landing&nbsp;</p>
            <div className='grid grid-cols-2'>
                <button>True</button>
                <button>False</button>
            </div>
          </div>
      </div>
      <div className='results'>
          <Results />
      </div>
  </div>

)};

export default Filters;
