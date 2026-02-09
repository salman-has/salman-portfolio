import React from "react";
import './services.css';
import Services_data from "../../assets/services_data";
const Services=()=>{
    return(
        <div className="services" id="services">
            <div className="services-title">
                <h1>My services</h1>
                {/* <img src="" alt=""></img> */}
            </div>
            <div className="services-container">
                {Services_data.map((service,index)=>{
                    return <div className="service-format" key={index}>
                        {/* <h3>{service.s_no}</h3> */}
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <span className="">--------&gt;</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services