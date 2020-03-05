import React from 'react';
import {Link} from 'react-router-dom';


import codeIcon from '../assets/code.svg';

import iconHome from '../assets/house.svg';
import iconAbout from '../assets/user.svg';
import iconSkills from '../assets/process.svg';
import iconProjects from '../assets/eye.svg';
import iconContact from '../assets/email.svg';

import redesTwitter from '../assets/twitter.svg';
import redesLinkdin from '../assets/linkedin.svg';
import redesGithub from '../assets/github.svg';

import '../style/component/header.scss';

const Header = () => {

    return(
        <>
            <div className="contenedor_header">
                <div className="contenedor_relative">
                    <div className="icon_code">
                        <div className="card_code">
                        <img className="w_100_img__cov" src={codeIcon} alt=""/>
                        </div>
                    </div>
                    <div className="icons_menu">
                        <Link to="/">
                        <div className="icons_menu__cards home">
                          <img className="w_100_img__cov" src={iconHome} alt=""/>
                        </div>
                        </Link>
                        <Link to="/about">
                        <div className="icons_menu__cards about">
                          <img className="w_100_img__cov" src={iconAbout} alt=""/>
                        </div>
                        </Link>
                        <Link to="/skill">
                        <div className="icons_menu__cards skill">
                          <img className="w_100_img__cov" src={iconSkills} alt=""/>
                        </div>
                        </Link>
                        <div className="icons_menu__cards project">
                          <img className="w_100_img__cov" src={iconProjects} alt=""/>
                        </div>
                        <div className="icons_menu__cards contact">
                          <img className="w_100_img__cov" src={iconContact} alt=""/>
                        </div>
                        
                    </div>
                    <div className="icons_redes">
                        <div className="cards_icons_redes">
                            <img className="w_100_img__cov" src={redesTwitter} alt=""/>
                        </div>
                        <div className="cards_icons_redes">
                            <img className="w_100_img__cov" src={redesLinkdin} alt=""/>
                        </div>
                        <div className="cards_icons_redes">
                            <img className="w_100_img__cov" src={redesGithub} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );

}

export default Header;