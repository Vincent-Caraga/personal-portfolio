import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div className="services" id="service">
      <div className="services-title">
        <h1>My Projects</h1>
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                {service.link ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                ) : (
                  <p>Read more</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
