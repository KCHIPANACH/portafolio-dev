import React from 'react';


const CardsProject = (props)=>{



return(
        <div className="cards">
                <div className="cards__img">
                   <img className="w_100_img__cov" src={props.imagen} alt=""/>
                </div>
                <div className="button_cards">
                    <div className="button_cards-texto">
                         <h3 className="m_0 f_h6 f_100 font_ubuntu t_center"> ¡Ver <br /> Proyecto! </h3>
                    </div>
                </div>
        </div>    
)

}

export default CardsProject;