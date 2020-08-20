import React from 'react';
import './styles.scss';

import js from '../../assets/js.png';

const Inicial: React.FC = () => {
  return (
    <div id="inicial" className="inicial" data-block="inicial">
      <div className="left">
        <h1 id="tec">
          Desenvolvo Aplicações<br/>em&nbsp;
          <span 
            className="txt-type"
            data-wait="3000"
            data-words='["JavaScript", "ReactJS", "React Native", "NodeJS", "TypeScript"]'
          ></span>
        </h1>

        <a href="#about" className="button inicial-button">
          Sobre
        </a>
      </div>

      <div className="right">
        <canvas width="600" height="400" id="canvas"></canvas>
        <img src={js} alt="js" id="js-img" style={{display: 'none'}} />
      </div>

    </div>
  );
}

export default Inicial;