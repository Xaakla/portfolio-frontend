import React from 'react';
import './styles.scss';

import { FaCss3, FaHtml5, FaJsSquare, FaSass, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="skills">
        <h1 className="block-name">Habilidades</h1>

        <div className="skills-container">
          {/* <h2 className="skills-subtitle">Profesional Skills</h2>
          <p className="skills-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque sapiente dignissimos alias id, optio ipsum laborum repudiandae accusantium esse corporis. Minus, autem odit? Delectus eaque quibusdam natus itaque quos!</p> */}

          <div className="skills-data">
            <div className="skills-names">
              <FaHtml5 className="skills-icon skills-icon-html" />
              <span className="skills-name">HTML5</span>
            </div>
            <div className="skills-percentage">100%</div>
            <div className="skills-bar skills-html" data-anime="html"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaCss3 className="skills-icon skills-icon-css" />
              <span className="skills-name">CSS3</span>
            </div>
            <div className="skills-percentage">82%</div>
            <div className="skills-bar skills-css" data-anime="css"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaSass className="skills-icon skills-icon-sass" />
              <span className="skills-name">SASS</span>
            </div>
            <div className="skills-percentage">43%</div>
            <div className="skills-bar skills-sass" data-anime="sass"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaJsSquare className="skills-icon skills-icon-javascript" />
              <span className="skills-name">JavaScript</span>
            </div>
            <div className="skills-percentage">87%</div>
            <div className="skills-bar skills-javascript" data-anime="js"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <span className="iconify skills-icon skills-icon-typescript" data-icon="simple-icons:typescript" data-inline="false"></span>
              <span className="skills-name">TypeScript</span>
            </div>
            <div className="skills-percentage">83%</div>
            <div className="skills-bar skills-typescript" data-anime="ts"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaReact className="skills-icon skills-icon-reactjs" />
              <span className="skills-name">ReactJS</span>
            </div>
            <div className="skills-percentage">89%</div>
            <div className="skills-bar skills-reactjs" data-anime="reactjs"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaReact className="skills-icon skills-icon-reactnative" />
              <span className="skills-name">React Native</span>
            </div>
            <div className="skills-percentage">80%</div>
            <div className="skills-bar skills-reactnative" data-anime="reactnative"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaNodeJs className="skills-icon skills-icon-nodejs" />
              <span className="skills-name">NodeJS</span>
            </div>
            <div className="skills-percentage">78%</div>
            <div className="skills-bar skills-nodejs" data-anime="nodejs"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaDatabase className="skills-icon skills-icon-mysql" />
              <span className="skills-name">MySQL</span>
            </div>
            <div className="skills-percentage">65%</div>
            <div className="skills-bar skills-mysql" data-anime="mysql"></div>
          </div>

          <div className="skills-data">
            <div className="skills-names">
              <FaDatabase className="skills-icon skills-icon-mongodb" />
              <span className="skills-name">MongoDB</span>
            </div>
            <div className="skills-percentage">60%</div>
            <div className="skills-bar skills-mongodb" data-anime="mongodb"></div>
          </div>

        </div>
    </div>
  );
}

export default Skills;