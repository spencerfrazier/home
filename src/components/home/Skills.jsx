import React, { useState, useEffect, Profiler } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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
                  <p className="lead">Java
                  <ProgressBar now={95} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">C#
                  <ProgressBar now={80} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">C/C++
                  <ProgressBar now={75} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Python
                  <ProgressBar now={60} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
              </div>
              <div className="col">
              <br/>
                <p className="lead">JavaScript
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
              </Tab>
              
              <Tab eventKey="soft" title="Soft Skills">
                <div className="row">
                <div className="col">
                <br/>
                  <p className="lead">Goal-Oriented
                  <ProgressBar now={95} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Collaboration
                  <ProgressBar now={92} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Positivity
                  <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Adaptability
                  <ProgressBar now={83} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                </div>
                <div className="col">
                <br/>
                  <p className="lead">Problem Solving
                  <ProgressBar now={90} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Empathy
                  <ProgressBar now={85} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Organization
                  <ProgressBar now={85} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                  <p className="lead">Creativity
                  <ProgressBar now={70} style={{width:'490px', backgroundColor:'white'}}/>
                  </p>
                </div>
                </div>
              </Tab>
            </Tabs>
            {/* <div className="col d-inline">
            <p className="lead">Java
            <ProgressBar now={95} style={{width:'490px', backgroundColor:'white'}}/>
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
            </div> */}
            </div>
          
        </div>
      </div>
  );
};

export default Skills;