import React from "react";
import mock from "../../data";
import './index.css'

const Vision = () => {
    const visionData = mock.find(item => item.title === "Vision");
  
    return (
      <section className="vision">
        <div className="vision-content">
          <div className="vision-left">
            <h2>Vision</h2>
          </div>
          <div className="vision-right">
            <p>{visionData.description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Vision;
  