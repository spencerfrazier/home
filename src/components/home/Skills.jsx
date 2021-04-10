import React, { useState, useEffect, Profiler } from "react";

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
            
          
        </div>
      </div>
  );
};

export default Skills;