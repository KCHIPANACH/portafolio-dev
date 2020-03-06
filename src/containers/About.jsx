import React, {useEffect} from 'react';

import Piramide from '../components/Piramide';

import '../style/component/about.scss';

const About = ()=> {

    useEffect(() => { 

        document.title = `KCH - UN POCO SOBRE MI`;
    
      });
      
      useEffect(()=>{
        let menu_home = document.querySelector(".icons_menu__cards.about");
        let menu_cards = document.querySelectorAll(".icons_menu__cards");
        menu_cards.forEach(element=>{
            element.classList.remove("card_menu_active");
        });
        
         menu_home.classList.add("card_menu_active");
    })


    return(
    <>
        <div className="contendor_about">
                <div className="contenedor_texto">
                    <div className="contenedor_texto__title">
                        <h3 className="m_0 font_ubuntu f_h1 c_yellow">Sobre mi</h3>
                    </div>
                    <div className="contenedor_parrafo">
                        <p className="m_0 font_ubuntu f_h6 c_white f_100">
                            Soy un joven de 25 años, profesional egresado de la carrera de Ingeniería de Sistemas de la Universidad César Vallejo. <br /> <br />
                            Me gustan mucho los retos y estar en constante aprendizaje, tengo el afán de nunca parar de aprender ya que eso junto a nuevos retos me llena de emoción. <br /> <br />
                            Como pasatiempos me gusta ver películas y One Piece cada Viernes, ademas soy hincha de la FPF y me gustan los animales, referente a ello pienso que debería haber mas personas a ayudar a muchos que están en la calle.
                        </p>
                    </div>
                </div>
                <div className="contenedor_cubo">
                <Piramide />
                </div>
        </div>
    </>
    );


}

export default About;
