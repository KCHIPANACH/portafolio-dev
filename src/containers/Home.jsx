import React, {useEffect} from 'react';

import Perfil from '../assets/perfil.jpg'
import JS from '../assets/js.png'
import Code from '../assets/code.png'

import '../style/component/background.scss';

const Home = ()=>{

    useEffect(() => { 

        document.title = `KCH - BIENVENIDO A MI PORTAFOLIO PERSONAL`;
    
      });


    return (

        <>
        <div className="contenedor_img_header">
            <div className="imagen_background">
                <div className="contenedor_foto">

                    <div className="cuadro_nombre">
                         <div className="cuadro_nombre-title">
                            <h3 className="m_0 f_h1 c_white font_ubuntu t_center">KEVIN CHIPANA</h3>
                        </div>                       
                    </div>
                    <div className="contenedor_foto__cnt">
                        <div className="contenedor_foto__img">
                            <img className="w_100_img__cov" src={Perfil} alt=""/>
                        </div>                        
                        <div className="icon_js">
                            <img className="w_100_img__cov" src={Code} alt=""/>
                        </div>
                    </div>
                    <div className="contenedor_foto__txt">
                        <div className="__txt_grado">
                            <p className="m_0 f_h3 t_center">Engineer | Full-Stack Developer | Learn IA </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </>

    );

}

export default Home;