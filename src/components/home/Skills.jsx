import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Profile from "../../editable-stuff/Profile.jpg"

const Skills = () => {
return (
    <div id="skills" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        
            {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
            <div className="d-inline align-self-center">
            <h1 className="display-4 pb-5 text-center">Skills</h1>
            <div className="row">
            <div className="col d-inline">
            <p className="lead">Java
            <ProgressBar now={95} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">C#
            <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">C++
            <ProgressBar now={70} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">Python
            <ProgressBar now={60} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            </div>
            <div className="col d-inline">
            <p className="lead">Javascript
            <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">HTML/CSS
            <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">SQL
            <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            <p className="lead">React
            <ProgressBar now={50} style={{width:'490px', backgroundColor:'white'}}/>
            </p>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;