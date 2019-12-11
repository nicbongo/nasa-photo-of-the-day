import React, { useState } from "react";

const HeaderCard = props => {
    console.log(props)

    


    return (
    <div className="pic-of-the-day">
        <img src={props.image} alt="Nasa's pic of the day"/>
        <br></br>
        <button>Standard</button>
        <button>HD</button>
    </div>
    )
        
    
}

export default HeaderCard