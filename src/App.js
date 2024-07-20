import React, { useState } from "react";

function App() {
  const[color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}  >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2
      px-2">

        <div className="flex flex-wrap justify-center gap-3 rounded-3xl shadow-lg
         bg-white  px-3 py-3">


          <button 
          onClick={() => setColor("#735d78")}
          className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{background : "#735d78"}}>COLOR 1</button>

        <button 
        onClick={() => setColor("#b392ac")}
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{background : "#b392ac"}}>COLOR 2</button>

        <button 
        onClick={() => setColor("#d1b3c4")}
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{background : "#d1b3c4"}}>COLOR 3</button>

<button 
        onClick={() => setColor("#e8c2ca")}
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{background : "#e8c2ca"}}>COLOR 4</button>

<button 
        onClick={() => setColor("#f7d1cd")}
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
          style={{background : "#f7d1cd"}}>COLOR 5</button>
        </div>
      </div>
    </div>
  );
}

export default App;
