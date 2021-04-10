import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
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
                      CTO and Founder. Primary Investigator and advisor to Chief Science Officer on quantum-encryption related research project. Technical Product Manager/ Engineering Lead for DARPA simulation effort in a team of 15+. Co-lead engineer responsible for delivering in person program updates to DARPA (as a proxy for primary investigator). Advanced Technical Leadership Class of 2019. Authored veteran warfighter financial readiness machine learning proposal for ADL/DoD in collaboration with StandardsWork. Co-authored DARPA proposal award at 7-8 figure cost estimates. Lead machine learning engineer for dismounted UAV/HMD/AR research effort. Held regular coding interviews and advised on hiring decisions. Transitioned multiple internal “Destination Innovation” research proposals to patents and IRAD programs. Delivered recruitment talks at Boston-area schools (MIT) on distributed systems and human-machine trust. Agile scrum leader/TPM on multiple projects.
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                {/*
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Culture}
                    alt="culture"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                    <h2>Student Engineering Council Vice President</h2>
                    <h5>Cultivated an organizational culture of inclusivity, collaboration, and ambition.</h5>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Service}
                    alt="service"
                    width="615"
                    height="450"
                  /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering Council Service Director</h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div> */}
                {/* <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                {/* <Carousel.Item>
                  <img
                    className="rounded"
                    src={Code}
                    alt="codeorange"
                    width="300"
                    height="475"
                  /> 
                  </Carousel.Item> */}
                {/* </div>
                </div> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Sec}
                    alt="SEC"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Zilker}
                    alt="zilker"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Custodians}
                    alt="custodialappreciation"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Committee}
                    alt="committee"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Park}
                    alt="volunteer"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Retreat}
                    alt="family"
                    width="615"
                    height="450"
                  /> 
                  </Carousel.Item>
                </Carousel>*/}
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Leadership;