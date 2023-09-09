import React, {useState, useEffect} from "react";
import './App.css'

function App() {
  
 const [change, setChange] = useState(10);
 const handleChange = (e) => {
   console.log(e.target.value);
  setChange(e.target.value)

 }

  return (
    <>
     <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slide to grow</label>
     <input id="medium-range" type="range" onChange={handleChange}  defaultValue="0" className="w-96 h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
     <div className="w-full h-full bg-green-500 px-8 
        pt-16 pb-24 rounded-lg overflow-hidden 
        text-center relative">
  
        <div style={{width: `${change *2}px`,  height: `${change *2}px`}} 
            className={` rounded-full 
                inline-flex items-center justify-center 
                bg-white text-gray-700 text-[5] font-bold`}>
           {change }
        </div>
    </div>
    </>
  )
}

export default App
