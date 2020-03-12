import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import CardsProject from '../components/Projects/CardsProject';




import '../style/component/projects.scss';


const Projects = (props) => {

    const {projects} = props;

    useEffect(() => { 
        document.title = `KCH - MIS PROYECTOS`;
        document.querySelector(".contenedor_footer").style.display="none";
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
{/*                             {projects.length > 0 && 
/*                                 {projects.map(item =>
                                    <CardsProject key={item.id} {...item}/>
                                )}  */              
                            }
                                {(projects.length > 0)? 
                                <>
                                        {projects.map(item =>
                                        <CardsProject 
                                            key={item.id}
                                            {...item}
                                            islist
                                            /> 
                                        )} 
                                </>      
                                : ""}                                
                        </div>                       
                </div>

            </div>

            </>
            
        );

}

const mapStateToProps = state =>{
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps, null)(Projects);