import React from 'react';
import Popup from "reactjs-popup";
import { connect } from 'react-redux';


import '../../style/component/CardsProject.scss'

const CardsProject = (props)=>{
 
const {imagen, nombre,logo,descripcion,tecnologia, url} = props;
 
return(
    <>
        <div className="cards"> 
                <div className="cards__img">
                   <img className="w_100_img__cov" src={logo} alt=""/>
                </div>
                <Popup trigger={<button className="button_cards"> ¡Ver <br />Proyecto! </button>} modal>
                    {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                                &times;
                            </a>
                            <div className="header"> <h3 className="m_0 font_ubuntu f_h4 t_center">{nombre} </h3></div>
                            <div className="content">
                                    <div className="imagen_print">
                                        <img className="w_100_img__cov" src={imagen} alt=""/>
                                    </div> 
                                    <div className="content_descrip"> 
                                         <p className="m_0 t_h4 font_ubuntu t_center"> {descripcion}</p>
                                    </div> 
                            </div>
                            <div className="actions">
                                    <Popup
                                        trigger={<button className="button button_tecologia"> Tecnologias </button>}
                                        position="top center"
                                        closeOnDocumentClick
                                    >
                                        <span className="t_center tecnologias">
                                            {tecnologia}
                                        </span>
                                    </Popup>
                                    <a href={url} target="_blank">
                                        <button className="button_tecologia">
                                          ¡Visitalo!
                                        </button>
                                    </a>   
{/*                                     <button
                                        className="button"
                                        onClick={() => {
                                        console.log("modal closed ");
                                        close();
                                        }}
                                    >
                                        close modal
                                    </button> */}
                            </div>
                        </div> 
                    )}
                </Popup>                  
        </div>
        

   </>   
)

}

const mapStateToProps = state =>{
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps, null)(CardsProject);