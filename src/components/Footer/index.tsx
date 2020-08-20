import React from 'react';
import './styles.scss';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

import profileImg from '../../assets/profile.png';

const Footer: React.FC = () => {
  return (
    <div id="about" className="footer">
        <h1 className="block-name">Sobre</h1>

        <div className="content">
          <div className="profile-image">
            <div className="image-box">
              <img src={profileImg} alt="profile"/>
            </div>
            <div className="bio-info">
              <span className="bio-name">
                Diego Rocha 
                <FaChevronUp className="bio-icon" />
              </span>
              <span className="bio">
                Sou programador FullStack, trabalho com NodeJS no backend e com ReactJS e React Native no frontend usando JavaScript e TypeScript. <br/><br/>
                Começei a estudar JavaScript em Junho de 2019, já desenvolvi projetos como freelancer usando a linguagem e até projetos pessoias. <br/><br/>
                Pretendo chegar mais longe e aprimorar meus conhecimentos ganhando mais experiência de trabalho.
              </span>
            </div>
          </div>

          <div className="profile-info">
            <legend>
              <fieldset>
                <span>Idade: </span>
                16 anos
              </fieldset>

              <fieldset>
                <span>Nacionalidade: </span>
                Brasileiro
              </fieldset>

              <fieldset>
                <span>Cidade: </span>
                Goiânia - GO
              </fieldset>

              <fieldset>
                <span>Linguagem: </span>
                JavaScript / TypeScript
              </fieldset>

              <fieldset>
                <span>Framework: </span>
                ReactJS / React Native
              </fieldset>              
            </legend>
          </div>
        </div>
    </div>
  );
}

export default Footer;