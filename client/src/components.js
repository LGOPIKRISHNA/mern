import React, { useState } from "react";
import React from 'react';

function Header1(){
    //const array=["ravi","krishna","gopi"];
    const [name,change]=useState(0)
    function changename(){
        change("gopi");
    }
   /* function increment(){
        setCount(count+1);
    }*/
    return(
        <div>
            <h1>HI{array[0]}</h1>
            <button onclick={changename()}>click me</button>
        </div>
    )
};

export default Header1;