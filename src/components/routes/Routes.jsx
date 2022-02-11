import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Filters from '../filters/Filters'


const Xyz = () => {
    return (
        <>
           <div className='p-4'>
               <Routes>
                   <Route exact path="/" element={<Filters />} />
                   <Route path="/year" element={<Filters />} />
                   <Route path="/launchTrue" element={<Filters />} />
                   <Route path="/landingTrue" element={<Filters />} />
               </Routes>

           </div>
        </>
    )
}

export default Xyz