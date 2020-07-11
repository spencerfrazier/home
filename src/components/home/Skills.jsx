import React, { useState, useEffect, Profiler } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import Profile from "../../editable-stuff/Profile.jpg"

import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from "../../editable-stuff/configurations.json";


const Skills = () => {
return (
    <div id="skills" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
            <div className="col-5 d-none d-lg-inline align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={Profile}
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
            <div className="col d-none d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p><br/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;