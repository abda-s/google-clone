import React, {useState} from 'react'
import "./index.css"

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

export const App = () => {
    const [darkTheme,setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-100">
            App
        </div>
    </div>
  )
}
export default App;
