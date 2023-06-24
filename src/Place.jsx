import React, { useState } from "react";
function Place({location}){
    return(
        <div>
            <h1><i class="fa-thin fa-street-view"></i>{location}</h1>
            <h1 className="temp"></h1>
            <h3 className="tempmin_max"></h3>
        </div>
    )
}
export default Place;