import React,{useEffect} from 'react';

import Autoland from '../assets/autoland.jpeg';
import Algoritmo from '../assets/algoritmo.png';
import BTH from '../assets/bth.jpg';
import Mamiscool from '../assets/mamiscool.png';
import Loreal from '../assets/loreal.png';


import '../style/component/projects.scss';


const Projects = () => {

    useEffect(() => { 
        document.title = `KCH - MIS PROYECTOS`; 
      });
      useEffect(()=>{
        let menu_home = document.querySelector(".icons_menu__cards.project");
        let menu_cards = document.querySelectorAll(".icons_menu__cards");
        menu_cards.forEach(element=>{
            element.classList.remove("card_menu_active");
        });
        
         menu_home.classList.add("card_menu_active");
    })


        return (
          
            <>

            <div className="contenedor_projects">

                <div className="contenedor_cards">
                        <div className="flex_cards">
                            <div className="cards">
                                <div className="cards__img">
                                    <img className="w_100_img__cov" src={Loreal} alt=""/>
                                </div>
                                <div className="button_cards">
                                    <div className="button_cards-texto">
                                        <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                                    </div>
                                </div>
                            </div>
                             <div className="cards">
                                <div className="cards__img">
                                    <img className="w_100_img__cov" src={BTH} alt=""/>
                                </div>
                                <div className="button_cards">
                                    <div className="button_cards-texto">
                                        <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                                    </div>
                                </div>
                            </div>                           
                            <div className="cards">
                                <div className="cards__img">
                                    <img className="w_100_img__cov" src={Autoland} alt=""/>
                                </div>
                                <div className="button_cards">
                                    <div className="button_cards-texto">
                                        <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                                    </div>
                                </div>
                            </div>
                             <div className="cards">
                                <div className="cards__img">
                                    <img className="w_100_img__cov" src={Mamiscool} alt=""/>
                                </div>
                                <div className="button_cards">
                                    <div className="button_cards-texto">
                                        <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                                    </div>
                                </div>
                            </div>  
                            <div className="cards">
                                <div className="cards__img">
                                    <img className="w_100_img__cov" src={Algoritmo} alt=""/>
                                </div>
                                <div className="button_cards">
                                    <div className="button_cards-texto">
                                        <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                                    </div>
                                </div>
                            </div>
                             <div className="cards">

                            </div>   
                            <div className="cards">

                            </div>
                             <div className="cards">

                            </div>                           
                            <div className="cards">

                            </div>
                             <div className="cards">

                            </div>  
                            <div className="cards">

                            </div>
                             <div className="cards">

                            </div>                                                         
                        </div>
                </div>

            </div>

            </>
            
        );

}

export default Projects