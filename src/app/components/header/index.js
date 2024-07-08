import React from 'react';
import useStyles from './stylesheet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { FaLeaf } from 'react-icons/fa';

const Header = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={classes.headerContainer} style={{backgroundImage: "linear-gradient(to right, #0036a6, #426cc4)" }}>
        <div className={classes.headerLeftSideContainer}>
            <img
                src="./images/logo4.png"
                className={classes.logo}
                alt=""
            />
            <div className={classes.headerDescContainer}>
                <span className={classes.headerContent}>
                    Popüler Kitaplar
                </span>
            </div>
        </div>
        <div className={classes.headerRightSideContainer}>
        
            <div className={isMenuOpen ? classes.menuVisible : classes.menuHidden}>
            
                <div className={classes.menuContentContainer}>
                    <div>
                        <Link to="/home" className={classes.menuContent}>Anasayfa</Link>
                    </div>
                    <div>
                        <Link to="/literature" className={classes.menuContent}>Edebiyat</Link>
                    </div>
                    <div>
                        <Link to="/philosophy" className={classes.menuContent}>Felsefe</Link>
                    </div>
                    <div>
                        <Link to="/culture" className={classes.menuContent}>Kültür</Link>
                    </div>
                    <div>
                        <Link to="/psychology" className={classes.menuContent}>Psikoloji</Link>
                    </div>
                    <div>
                        <Link to="/history" className={classes.menuContent}>Tarih</Link>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className={classes.menuShow}>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen}/>
        </div>
    </div>
  );
}

export default Header;