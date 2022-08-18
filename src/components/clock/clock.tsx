import React, { useEffect, useState } from "react";

function Today(){
    const [counter, setCounter] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    return (
      <div>
        <h1>{counter.getHours()>=12 ? "오후: " + (counter.getHours()-12) : "오전: " + counter.getHours()}
        :{counter.getMinutes()<10? "0"+counter.getMinutes() : counter.getMinutes()}
        :{counter.getSeconds()<10? "0"+counter.getSeconds() : counter.getSeconds()}
        </h1>
      </div>
    );
}

export default Today;