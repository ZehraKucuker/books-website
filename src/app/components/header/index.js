import React from 'react';
import useStyles from './stylesheet';
import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <div className={classes.headerContainer} style={{background: "linear-gradient(#1349c6, #688fea)" }}>
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
            <FiAlignJustify onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
    </div>
  );
}

export default Header;