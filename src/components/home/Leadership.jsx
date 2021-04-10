import React, { useState, useEffect, Profiler } from "react";
import Service from "../../editable-stuff/service.jpg"
import Culture from "../../editable-stuff/culture.jpg"
import Committee from "../../editable-stuff/committee.jpg"
import Park from "../../editable-stuff/park.jpg"
import Zilker from "../../editable-stuff/zilker.jpg"
import Retreat from "../../editable-stuff/retreat.jpg"
import Sec from "../../editable-stuff/sec.jpg"
import Custodians from "../../editable-stuff/custodians.jpg"

const Leadership = () => {
    return (
        <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Leadership</h1>
                {/* <p className="lead text-center" style={{fontSize:'22px'}}>
                    I empower people to acheive their goals. And I absolutely love it.
                </p><br/><br/> */}
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
                      Throughout my college career, I've been extremely grateful to have opportunities to lead my peers
                      and make an impact on the Austin community. In my role as the <b>Vice President of the 
                      Student Engineering Council</b>, I cultivated a culture of 
                      inclusivity, collaboration, and ambition through leading new-member recruitment and 
                      community building events.
                      Prior to that position, I led service intiatives
                      that contributed 28,664 meals to the Central Texas Food Bank and over $3,000 to the
                      SAFE Alliance in my position as the <b>Service Director of the Student Engineering Council</b>.
                      Outside of these roles, I worked to level the playing field in STEM by mentoring and teaching children
                      of lower socioeconomic status through my role as a <b>Code Orange Mentor</b>.
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Leadership;