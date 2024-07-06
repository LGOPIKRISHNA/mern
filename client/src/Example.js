import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
//provider-->produces the data
export default function Example(){
    //provide the data
    const [text,setText]=useState("")
    return(
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>
                <header/>
                {/* 
                you can add as many componnets u want
                provider will provde all the props to
                the components 
                */}
            </Mycontext.Provider>
        </div>
    )
}