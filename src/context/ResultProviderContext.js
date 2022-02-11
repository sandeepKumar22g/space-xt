import React, {createContext, useState, useContext} from 'react';



const ResultContext = createContext();


export const ResultProviderContext = ({children}) => {
    const [isLoading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [launchFilter, setLaunchFilter] = useState(false)
    const [landFilter, setLandFilter] = useState(true)
    const [yearFilter, setYearFilter] = useState(2014)




    const getResults = async()=>{
        const baseURL = "https://api.spaceXdata.com/v3/launches?limit=100"
        setLoading(true)
        const response = await fetch(baseURL)
        const data = await response.json()
       
        console.log(data);

        setResults(data)
        setLoading(false)
    }

    const launchResults = async() =>{
        const baseURL = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchFilter}`
        setLoading(true)
        const response = await fetch(baseURL)
        const data = await response.json()
        console.log(data);
        setResults(data)
        setLoading(false)
    }


    const launchLandingResults = async()=>{
        const baseURL = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${landFilter}`
        setLoading(true)
        const response = await fetch(baseURL)
        const data = await response.json()
        console.log(data);
        setResults(data)
        setLoading(false)
    }

    const yearResults = async()=>{
        const baseURL = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${yearFilter}`

        setLoading(true)

        const response = await fetch(baseURL)
        const data = await response.json()
        console.log(data);
        setResults(data)
        setLoading(false)
    }

  return(
      <>
        <ResultContext.Provider value={{getResults, results, isLoading, setLaunchFilter, launchResults, setLandFilter, launchLandingResults, yearResults, setYearFilter}}>
            {children}
        </ResultContext.Provider>
      </>
  )
};


export const useResultContext = () => useContext(ResultContext)