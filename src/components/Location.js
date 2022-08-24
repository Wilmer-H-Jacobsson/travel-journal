import React from "react"

export default function Location(props) {
    
    return (
        <section className="loc-sec">
            <img src={props.imageUrl} />
            <div className="text-part">
                <div className="loc-row">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.location}</h3>
                    <a href="">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span><b>{props.startDate}</b></span>
                <span><b> - </b></span>
                <span><b>{props.endDate}</b></span>
                <p>{props.description}</p>
            </div>
            
            
            
        </section>
    )
}