import React from 'react';
import Results from '../results/Results';
import "./filters.css"
import { useResultContext } from '../../context/ResultProviderContext';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const year = [
    {url: "/year", text: 2006},
    {url: "/year", text: 2007},
    {url: "/year", text: 2008},
    {url: "/year", text: 2009},
    {url: "/year", text: 2010},
    {url: "/year", text: 2011},
    {url: "/year", text: 2012},
    {url: "/year", text: 2013},
    {url: "/year", text: 2014},
    {url: "/year", text: 2015},
    {url: "/year", text: 2016},
    {url: "/year", text: 2017},
    {url: "/year", text: 2018},
    {url: "/year", text: 2019},
    {url: "/year", text: 2020},
]

const launch = [
    {url: "/launchtrue", text: true},
    {url: "/launchtrue", text: false},
]

const land=[
    {url: "/landingtrue", text: true},
    {url: "/landingtrue", text: false},
]


const Filters = () => {
    const {setLaunchFilter, setLandFilter, setYearFilter} = useResultContext()
  return(
  <div className='main '>
      <div className='filters '>
          <div className='border border-black border-2 dark:border-white mx-2'>
           <h1 className='text-xl text-black dark:text-white px-3'>Filters</h1>
                <p className='text-sm flex justify-center underline mb-2'> &nbsp; &nbsp; Launch Year &nbsp;&nbsp;</p>
                <div className='grid grid-cols-2 mx-2 px-2'>
                {year.map(({url, text}, index)=>(
                       <Button onClick={()=>setYearFilter(text)} type="button" variant='outlined' size='small' style={{margin: "6px"}} key={index}>
                            <NavLink to={url} key={index}>
                                {text}
                            </NavLink>
                        </Button>
                ))}
                    </div>
            <p className='text-sm flex justify-center underline mt-2 mb-2'>&nbsp;Successful Launch&nbsp;</p>
            <div className='grid grid-cols-2 mx-6'>
                {launch.map(({url, text}, index)=>(
                    <Button onClick={()=>setLaunchFilter(text)} type="button" variant='outlined'size='small' style={{margin: "6px"}} key={index} >
                    <NavLink to={url}  key={index}>
                        {String(text)}
                    </NavLink>
                    </Button>
                ))}
            </div>
            <p className='text-sm flex justify-center underline mt-2 mb-2'>&nbsp;Successful Landing&nbsp;</p>
            <div className='grid grid-cols-2 mx-6'>
                {land.map(({url, text}, index)=>(
                    <Button  onClick={()=>setLandFilter(text)} type="button" variant='outlined'size='small' style={{margin: "6px"}} key={index}>
                    <NavLink to={url} key={index}>
                        {String(text)}
                    </NavLink>
                    </Button>
                ))}
            </div>
          </div>
      </div>
      <div className='results'>
          <Results />
      </div>
  </div>

)};

export default Filters;
