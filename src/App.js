  import React from "react";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
    return (
        
        <div>
            <Navbar />
            <Location 
            {...data[0]} />
            <Location 
            {...data[1]} />
            <Location 
            {...data[2]} />
        </div>
    )
}
