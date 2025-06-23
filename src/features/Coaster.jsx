import React from "react";

const Coaster = ({coaster}) => {
    return (
        <div>
            <h1>{coaster.name}</h1>
            <h2>{coaster.park}</h2>
            <li>{coaster.type}</li>
            <li>{coaster.height} ft</li>
            <li>{coaster.speed }mph</li>
            <li>{coaster.inversions} inversions</li>
            <li>{coaster.minheightreq} in</li>
        </div>
    )
}


export default Coaster;
