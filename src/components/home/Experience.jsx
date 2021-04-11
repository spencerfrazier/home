import React, { useState, useEffect, Profiler } from "react";
import Lockheed from "../../editable-stuff/lockheed.png";
import Drizly from "../../editable-stuff/drizly.png"
import GT from "../../editable-stuff/gt.gif"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Experience</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Drizly}
                        alt="drizly logo"
                        width="180"
                        height="100"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Cofounder/CTO  
                        <br/>
                        June 2012 - December 2013
                    </p>
                    {/* <h3>Drizly</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Lockheed}
                        alt="lockheed logo"
                        width="300"
                        height="80"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Lead Software Engineer / Technical Product Manager
                        <br/>
                        May 2014 - Jan 2018
                    </p>
                    {/* <h3>Lockheed Martin</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={GT}
                        alt="gt logo"
                        width="180"
                        height="140"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Intelligent Systems CS PhD Candidate ABD
                        <br/>
                        Jan 2018 - Present
                    </p>
                    {/* <h3>Georgia Tech</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;