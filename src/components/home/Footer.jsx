import React, { useState } from "react";
import {
  icons,
} from "../../editable-stuff/configurations.json";

  const Footer = () => {
    // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
    const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

    const [hoverstatus, setHoverstatus] = useState(
      new Array(icons.length).fill("sociali")
    );
  
    const toggleHover = (data) => {
      const newhoverStatus = [...hoverstatus];
  
      if (data.event === "enter") {
        newhoverStatus[data.icon.id] = "socialh";
        return setHoverstatus(newhoverStatus);
      } else if (data.event === "leave") {
        newhoverStatus[data.icon.id] = "sociali";
        return setHoverstatus(newhoverStatus);
      }
    };

  return (
    <div id="contact" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
    <div className="container container-fluid">
          <div className="d-inline align-self-center">
          <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
          <p className="lead text-center" style={{fontSize:'22px'}}>I'm currently looking for full-time Software Engineering opportunities! If you know of 
            any positions available, have any questions, or just want to say hi, please feel free to email me at  
            <a href="mailto:ana.a.ashrafi@gmail.com">{" "}
               ana.a.ashrafi@gmail.com
            </a>{"."}
          </p>
          
            {/* {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
         */}
    <footer style={{backgroundColor:'#f7f7f7'}} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/anaashrafi"
        aria-label="My GitHub"
      >
        Ana Ashrafi
      </a>{" "}
      using <i className="fab fa-react"></i>
    </footer>
    </div>
      </div>
      </div>
  );
};

export default Footer;
