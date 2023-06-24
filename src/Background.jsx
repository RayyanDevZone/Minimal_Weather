import React, { useState } from "react";
function Background({weather}) {
    const[background,setBackground]=useState("")
  const currentDate = new Date(); 
  const currentTime = currentDate.toLocaleString(); 
    return(<>
 <h3 id="date">{currentDate.toDateString()}</h3>
      <h3 id="time">{currentTime}</h3>
      <h1>{weather || "Loading..."} °C</h1>
  </>)
}
export default Background;
