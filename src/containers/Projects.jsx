import React,{useEffect} from 'react';

import CardsProject from '../components/Projects/CardsProject';

import Autoland from '../assets/autoland.jpeg';
import Algoritmo from '../assets/algoritmo.png';
import BTH from '../assets/bth.jpg';
import Mamiscool from '../assets/mamiscool.png';
import Loreal from '../assets/loreal.png';


import '../style/component/projects.scss';


const Projects = () => {

    useEffect(() => { 
        document.title = `KCH - MIS PROYECTOS`; 
        console.log(Loreal)
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
                            <CardsProject imagen={Loreal}/>
                            <CardsProject imagen={BTH}/>
                            <CardsProject imagen={Autoland}/>
                            <CardsProject imagen={Mamiscool}/>
                            <CardsProject imagen={Algoritmo}/>                            
                        </div>
                </div>

            </div>

            </>
            
        );

}

export default Projects