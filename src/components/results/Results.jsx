import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../../context/ResultProviderContext';
import { Loading } from './loading/Loading';

const Results = () => {
    const {results, isLoading, getResults, launchResults, launchLandingResults,  yearResults} = useResultContext()
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
    }, []);
    
    if(isLoading) return <Loading />
    console.log(location.pathname);

  switch (location.pathname) {
      case '/':
        return(
            <div className='flex flex-wrap justify-between space-y-6 absolute'>
                {results.map(({mission_name, flight_number, launch_year, launch_success, mission_id, links, rocket}, index)=>(
                    <div className='h-72 w-60 mx-4 my-3 border-2' key={index}>
                        <div className='h-36'>
                        <img src={links.mission_patch} alt="" className='h-36 mx-auto' />
                        </div>
                        <h1>{mission_name} #{flight_number}</h1>
                        <h2>Mission-ID : {mission_id}</h2>
                        <h2>Launch Year : {launch_year}</h2>
                        <h2>Success Launch: {String(launch_success)}</h2>
                        <h2>successful Landing: {String(rocket.first_stage.cores[0].land_success)} </h2>
                    </div>
                ))}
            </div>
        )    


    case "/launchtrue" :
        return (
            <div className='flex flex-wrap justify-between space-y-6 absolute'>
                {results.map(({mission_name, flight_number, launch_year, launch_success, mission_id, links, rocket}, index)=>(
                    <div className='h-72 w-60 mx-4 my-3 border-2' key={index}>
                        <div className='h-36'>
                        <img src={links.mission_patch} alt="" className='h-36 mx-auto' />
                        </div>
                        <h1>{mission_name} #{flight_number}</h1>
                        <h2>Mission-ID : {mission_id}</h2>
                        <h2>Launch Year : {launch_year}</h2>
                        <h2>Success Launch: {String(launch_success)}</h2>
                        <h2>successful Landing: {String(rocket.first_stage.cores[0].land_success)} </h2>
                    </div>
                ))}
            </div>
        )
    
        case "/landingtrue":
                return(
                    <div className='flex flex-wrap justify-between space-y-6 absolute'>
                    {results.map(({mission_name, flight_number, launch_year, launch_success, mission_id, links, rocket}, index)=>(
                        <div className='h-72 w-60 mx-4 my-3 border-2' key={index}>
                            <div className='h-36'>
                            <img src={links.mission_patch} alt="" className='h-36 mx-auto' />
                            </div>
                            <h1>{mission_name} #{flight_number}</h1>
                            <h2>Mission-ID : {mission_id}</h2>
                            <h2>Launch Year : {launch_year}</h2>
                            <h2>Success Launch: {String(launch_success)}</h2>
                            <h2>successful Landing: {String(rocket.first_stage.cores[0].land_success)} </h2>
                        </div>
                    ))}
                </div>
                )
        case "/year" :
            return(
                <div className='flex flex-wrap justify-between space-y-6 absolute'>
                {results.map(({mission_name, flight_number, launch_year, launch_success, mission_id, links, rocket}, index)=>(
                    <div className='h-72 w-60 mx-4 my-3 border-2' key={index}>
                        <div className='h-36'>
                        <img src={links.mission_patch} alt="" className='h-36 mx-auto' />
                        </div>
                        <h1>{mission_name} #{flight_number}</h1>
                        <h2>Mission-ID : {mission_id}</h2>
                        <h2>Launch Year : {launch_year}</h2>
                        <h2>Success Launch: {String(launch_success)}</h2>
                        <h2>successful Landing: {String(rocket.first_stage.cores[0].land_success)} </h2>
                    </div>
                ))}
            </div>
            )
      default:
          return "error"
  }
};

export default Results;
