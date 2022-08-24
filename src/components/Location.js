import React from "react"

export default function Location(props) {
    
    return (
        <section className="loc-sec">
            <img src={props.imageUrl} alt={props.imageAlt}/>
            <div className="text-part">
                <div className="loc-row">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="dates"><b>{props.startDate} - {props.endDate}</b></p>
                <p className="desc">{props.description}</p>
            </div>
            
            
            
        </section>
    )
}