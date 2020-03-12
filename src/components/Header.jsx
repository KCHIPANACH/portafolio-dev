import React, {useState} from 'react';
import {Link} from 'react-router-dom';


import codeIcon from '../assets/code.svg';

import iconHome from '../assets/house.svg'; 
import iconAbout from '../assets/user.svg';
import iconSkills from '../assets/process.svg';
import iconProjects from '../assets/eye.svg';
import iconContact from '../assets/email.svg';
import menuIcon from '../assets/list.svg';

import redesTwitter from '../assets/twitter.svg';
import redesLinkdin from '../assets/linkedin.svg';
import redesGithub from '../assets/github.svg';

import '../style/component/header.scss';

const Header = () => {

    const [menuActive, setMenuActive] = useState("icons_menu");
    const [click, setClick] = useState(0);

    const toggleMenu= ()=>{
        if(click == 0){
            setMenuActive("icons_menu icons_active");
            setClick(1);
        }else{
            setMenuActive("icons_menu");
            setClick(0);
        }
    }

    return(
        <>
            <div className="contenedor_header">
                <div className="contenedor_relative">
                    <div className="icon_code">
                        <div className="card_code">
                        <img className="w_100_img__cov" src={codeIcon} alt=""/>
                        </div>
                    </div>
                    <div className={menuActive}>
                        <Link to="/">
                        <div className="icons_menu__cards home" onClick={toggleMenu}>
                          <img className="w_100_img__cov" src={iconHome} alt=""/>
                        </div>
                        </Link>
                        <Link to="/about">
                        <div className="icons_menu__cards about" onClick={toggleMenu}>
                          <img className="w_100_img__cov" src={iconAbout} alt=""/>
                        </div>
                        </Link>
                        <Link to="/skill">
                        <div className="icons_menu__cards skill" onClick={toggleMenu}>
                          <img className="w_100_img__cov" src={iconSkills} alt=""/>
                        </div>
                        </Link>
                        <Link to="/projects">
                        <div className="icons_menu__cards project" onClick={toggleMenu}>
                          <img className="w_100_img__cov" src={iconProjects} alt=""/>
                        </div>
                        </Link>
{/*                         <div className="icons_menu__cards contact" onClick={toggleMenu}>
                          <img className="w_100_img__cov" src={iconContact} alt=""/>
                        </div> */}
                        
                    </div>
                    <div className="icons_redes">
                        <div className="cards_icons_redes">
                            <a href="https://twitter.com/KCHIPANACH" target="_blank">
                            <img className="w_100_img__cov" src={redesTwitter} alt=""/></a>
                        </div>
                        <div className="cards_icons_redes">
                        <a href="https://www.linkedin.com/in/kevinchipana/" target="_blank">
                            <img className="w_100_img__cov" src={redesLinkdin} alt=""/></a>
                        </div>
                        <div className="cards_icons_redes">
                        <a href="https://github.com/KCHIPANACH/" target="_blank">
                            <img className="w_100_img__cov" src={redesGithub} alt=""/></a>
                        </div>
                    </div>

                    <div className="menu_mob">
                        <div className="icon_mob_menu" onClick={toggleMenu}>
                            <img className="w_100_img__cov" src={menuIcon} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );

}

export default Header;