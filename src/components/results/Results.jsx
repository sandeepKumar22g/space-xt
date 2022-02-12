import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../../context/ResultProviderContext';
import { Loading } from './loading/Loading';

const Results = () => {
    const {results, isLoading, getResults, launchResults, launchLandingResults,  yearResults,  launchFilter, yearFilter, landFilter} = useResultContext()
    const location = useLocation()


    useEffect(() => {
            if(location.pathname === "/launchtrue"){
                launchResults()
            }else if(location.pathname === "/landingtrue"){
                launchLandingResults()
            }else if(location.pathname === "/year"){
                yearResults()
            }else{
                getResults()
            }
    }, [location.pathname, launchFilter, yearFilter, landFilter]);
    
    if(isLoading) return <Loading />
    console.log(location.pathname);




    const Output = () =>{
        return(
            <div className='flex flex-wrap justify-around space-y-6 '>
                {results.map(({mission_name, flight_number, launch_year, launch_success, mission_id, links, rocket}, index)=>(
                    <div className='h-80 w-60 mx-4 my-3 border-black border-2 dark:border-white' key={index}>
                        <div className='h-36'>
                        <img src={links.mission_patch} alt="" className='h-36 mx-auto' />
                        </div>
                        <h1 className='text-center text-xl font-bold text-blue-600'>{mission_name} #{flight_number}</h1>
                        <h2 className='mx-3'>Mission-ID : <span className='text-blue-500'> {(mission_id.length>0)?mission_id : "null"} </span></h2>
                        <h2 className='mx-3'>Launch Year : <span className='text-blue-500'> {launch_year} </span></h2>
                        <h2 className='mx-3'>Success Launch: <span className='text-blue-500'> {String(launch_success)} </span></h2>
                        <h2 className='mx-3'>successful Landing: <span className='text-blue-500'> {String(rocket.first_stage.cores[0].land_success)} </span></h2>
                    </div>
                ))}
            </div>
        )    
    }


    const Error = ()=>{
        return(
            <div className='flex justify-center content-center'>
                <h1 className='text-3xl text-red-500'>Oops! there is some error please try after some times</h1>
            </div>
        )
    }




  switch (location.pathname) {
      case '/':
        return <Output />    

    case "/launchtrue" :
        return <Output />
    
    case "/landingtrue":
            return <Output />

    case "/year" :
            return ((yearFilter>2013)? <Output /> : <Error />)
           
    default:
          return "error"
  }
};

export default Results;
