import React from "react";
import '../../../src/_styles.scss'
import "../Skills/Skills.scss";
import reactLogo from '../../images/reactjs.svg';
import nodeLogo from '../../images/nodejs.svg';
import expressLogo from '../../images/expressjs.svg';
import mongoLogo from '../../images/mongodb.svg';
import sqlLogo from '../../images/sql.svg';
import javascriptLogo from '../../images/javascript.svg';
import pythonLogo from '../../images/python.svg';
import figmaLogo from '../../images/figma.svg';

function Skills() {
  return (
    <div class="grid-container">
      <div class="grid-item">
        <img src={reactLogo} className="skills-icons" alt="react-icon"/>
        <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>React.js</p>
      </div>
      <div class="grid-item">
      <img src={nodeLogo} className="skills-icons" alt="node-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>Node.js</p>
      </div>
      <div class="grid-item">
      <img src={expressLogo} className="skills-icons" alt="express-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>Express.js</p>
      </div>
      <div class="grid-item">
      <img src={mongoLogo} className="skills-icons" alt="mongo-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>MongoDB</p>
      </div>
      <div class="grid-item">
      <img src={sqlLogo} className="skills-icons" alt="sql-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>SQL</p>
      </div>
      <div class="grid-item">
      <img src={javascriptLogo} className="skills-icons" alt="javascript-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>JavaScript</p>
      </div>
      <div class="grid-item">
      <img src={pythonLogo} className="skills-icons" alt="javascript-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>Python</p>
      </div>
      <div class="grid-item">
      <img src={figmaLogo} className="skills-icons" alt="javascript-logo"/>
      <p style={{fontFamily: "lato-regular", fontSize: "1.2rem", marginTop: "5px"}}>Figma</p>
      </div>
    </div>
  );
}

export default Skills;
