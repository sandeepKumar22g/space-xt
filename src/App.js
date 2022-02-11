import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import Routes from "./components/routes/Routes";
import React, { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
     <div className={darkTheme ? "dark" : ""}>
        <div className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-200'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes />
          <Footer />
        </div>
     </div>
    </>
  );
}

export default App;
