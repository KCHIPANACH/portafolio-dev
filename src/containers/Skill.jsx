import React, {useEffect} from 'react';

import '../style/component/skill.scss';
import '../assets/js/tagNube.js';

const Skill = ()=>{


  useEffect(()=>{
      try {
        TagCanvas.textColour = '#ffffff';

        TagCanvas.outlineMethod= null;
        TagCanvas.Start('myCanvas', 'tags');
      } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
  });
    return (
        <>
        <div className="contenedor_skill">
            <div className="contenedor_text_skill">
                    <div className="contenedor_texto__title">
                        <h3 className="m_0 font_ubuntu f_h1 c_yellow">Mis Skills & Experiencia </h3>
                    </div>
                    <div className="contenedor_parrafo">
                        <p className="m_0 font_ubuntu f_h6 c_white f_100">
                            Me considero una persona con un alto deseo o hambre de crear o emprender algo, solucionar algo en especifico. <br /> <br />
                            Tengo experiencia en el mundo WEB, he realizado multiples proyectos desde Landing Pages hasta Sistemas o Dashboard informaticos, domino tanto tecnologías frontend como backend por lo que me he desempeñado como full-stack developer. <br /> <br />
                            Actualmente me encuentro junto a unos amigos realizando "HOPE" una plataforma que unificará todas las casas de adopción de mascotas abandonadas, tambien me encuentro aprendiendo diariamente nuevas tecnologías, ademas de ingles y como meta personal de este año deseo aprender IA y terminar HOPE. 
                        </p>
                    </div>              
            </div>
            <div className="contenedor_tag">
                <div id="myCanvasContainer">
                  <canvas  width="300" height="300" id="myCanvas">
                  <p>In Internet Explorer versions up to 8, things inside the canvas are inaccessible!</p>
                  </canvas>
                  <div id="tags">
                      <ul>
                          <a> JavaScript</a>
                          <a>Java</a>
                          <a>HTML5</a>
                          <a>CSS3</a>
                          <a>PHP</a>
                          <a>WordPress</a>
                          <a>Woocommerce</a>
                          <a>React</a>
                          <a>Angular</a>
                          <a>NodeJS</a>
                          <a>API/REST</a>
                          <a>NPM</a>
                          <a>JSON</a>
                          <a>BOOSTRAP</a>
                          <a>BEM</a>
                          <a>REDUX</a>
                          <a>REACT HOOKS </a>
                          <a>LEARN IA</a>
                          
                      </ul>
                    </div> 
                </div>
            </div>            
          </div>  
     
        </>
    );

}

export default Skill