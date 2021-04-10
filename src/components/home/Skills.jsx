import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const Skills = () => {
return (
    <div id="skills" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        
            {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
            <div className="d-inline align-self-center">
            <h1 className="display-4 pb-5 text-center">Skills</h1>
            
            <Tabs defaultActiveKey="home" justify variant="tabs" transition={false} id="skills-tabs" style={{backgroundColor:'#f7f7f7', fontSize:'1.25rem'}}>
            <Tab eventKey="home" title="Hard Skills">
                <div className="row">
                <div className="col">
                <br/>
                  <p className="lead">Agile/Lean Methodologies
                  <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">JavaScript
                  <ProgressBar now={87} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">C#
                  <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">C/C++
                  <ProgressBar now={70} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Python
                  <ProgressBar now={60} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
              </div>
              <div className="col">
              <br/>
                <p className="lead">Java
                <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">HTML/CSS
                <ProgressBar now={85} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">Test-Driven Development
                  <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                <p className="lead">SQL
                <ProgressBar now={75} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
                <p className="lead">React
                <ProgressBar now={50} style={{width:'490px', backgroundColor:'white'}}/>
                </p>
              </div>
              </div>
              </Tab>
              
              <Tab eventKey="soft" title="Soft Skills">
              <div className="col d-lg-inline align-self-center">
                <br/>
                <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center">Collaboration</p>
                <img src="https://img.icons8.com/ios/75/000000/collaboration-female-male.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Problem Solving</p>
                <img src="https://img.icons8.com/ios/75/000000/critical-thinking.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Positivity</p>
                <img src="https://img.icons8.com/ios/75/000000/happy-cloud.png"/>
                </div>
                </div>
                <br/>
                <div className="row" style={divStyle}>
                <div className="col text-center">
                <p className="lead text-center">Goal Setting</p>
                <img src="https://img.icons8.com/ios/75/000000/goal.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Organization</p>
                <img src="https://img.icons8.com/ios/75/000000/to-do.png"/>
                </div>
                <div className="col text-center">
                <p className="lead text-center">Empathy</p>
                <img src="https://img.icons8.com/ios/75/000000/trust.png"/>
                </div>
                </div>
                </div>
              </Tab>
            </Tabs>
            </div>
          
        </div>
      </div>
  );
};

export default Skills;