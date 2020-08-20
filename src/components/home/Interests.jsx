import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {/* <p className="lead text-center">
              Outside of software engineering, I love to meditate, read, and play soccer!
            </p><br/> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Meditation</p>
                <img src="https://img.icons8.com/nolan/128/light.png"/>
                <p className="lead text-center">
                  Every morning, I begin my day with <a href="https://www.headspace.com/" target="_blank">Headspace</a>.
                  I started meditating about one year ago and have learned how to be more focused, mindful, and relaxed. 
                  So far, I've meditated for a total of 1,385 minutes, and I am continuing to grow this number every day!
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/nolan/128/saving-book.png"/>
                <p className="lead text-center">
                  I had never been much of a reader until this year. When quarantine started, I thought it'd be a 
                  great opportunity to get into reading and find books I really enjoy. I've read 7 books
                  since March and can't wait to read more. Check out what I've been reading on <a href="https://www.goodreads.com/ana_ashrafi" target="_blank">Goodreads</a>!
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Soccer</p>
                <img src="https://img.icons8.com/nolan/128/football2.png"/>
                <p className="lead text-center">
                  I first picked up a soccer ball when I was 4 years old and have played the beautiful game since. 
                  I played competitively for FC Dallas, while also playing for my high school soccer team. In college, I play intramural soccer
                  and frequently look for pick-up games to play!
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Food</p>
                <img src="https://img.icons8.com/nolan/128/meal.png"/>
                <p className="lead text-center">
                  I am a big foodie! Growing up with a mom who cooks the best Persian food, I fell in love with food at an early age. I'm currently working on a cookbook of all my mom's
                  original recipes and am learning more about cooking too. I love trying new restaurants and recipes!
                </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
