import React, { useEffect, useState } from "react";
import './clock.css'
function Today(){
    const [counter, setCounter] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="position">
        <h1>{counter.getHours()>=12 ? "Afternoon: " + (counter.getHours()-12) : "Morning: " + counter.getHours()}
        :{counter.getMinutes()<10? "0"+counter.getMinutes() : counter.getMinutes()}
        :{counter.getSeconds()<10? "0"+counter.getSeconds() : counter.getSeconds()}
        </h1>
      </div>
    );
}

export default Today;