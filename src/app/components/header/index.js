import React from 'react';
import useStyles from './stylesheet';
import {
    useState 
} from 'react';
import {
    Link 
} from 'react-router-dom';
import {
    Fade as Hamburger 
} from 'hamburger-react';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';
import {
    GrLanguage 
} from "react-icons/gr";
import {
    IoSunnySharp 
} from "react-icons/io5";
import {
    FaMoon 
} from "react-icons/fa6";

const Header = () => {
    const [isIconActive, setIsIconActive] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {
        activeTheme, changeTheme
    }=useTheme();
    const {
        activeLanguage , changeLanguage
    }=useLanguage();
    const lang=activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color
    });
    const handleThemeChange = () => {
        setIsIconActive(!isIconActive);
        changeTheme();
    };
    return (
        <div className={classes.headerContainer} >
            <div className={classes.headerLeftSideContainer}>
                <img
                    src="./images/icons/logo2.png"
                    className={classes.logo}
                    alt=""
                />
                <div className={classes.headerDescContainer}>
                    <span className={classes.headerContent}>
                        {lang.headTitle}                
                    </span>
                </div>
            </div>
            <div className={classes.headerRightSideContainer}>
        
                <div className={isMenuOpen ? classes.menuVisible : classes.menuHidden}>
            
                    <div className={classes.menuContentContainer}>
                        <div>
                            <Link to="/home" className={classes.menuContent}>{lang.home}</Link>
                        </div>
                        <div>
                            <Link to="/literature" className={classes.menuContent}>{lang.cateName1}</Link>
                        </div>
                        <div>
                            <Link to="/philosophy" className={classes.menuContent}>{lang.cateName2}</Link>
                        </div>
                        <div>
                            <Link to="/culture" className={classes.menuContent}>{lang.cateName3}</Link>
                        </div>
                        <div>
                            <Link to="/psychology" className={classes.menuContent}>{lang.cateName4}</Link>
                        </div>
                        <div>
                            <Link to="/history" className={classes.menuContent}>{lang.cateName5}</Link>
                        </div>
                    </div>
                    <div className={classes.iconContainer}>
                        <div className={classes.iconLang}>
                            <GrLanguage size="1.1rem" onClick={()=>changeLanguage()}/>
                        </div>
                        <div className={classes.iconTheme}>
                            {   isIconActive ? 
                                <FaMoon size="1.1rem" onClick={handleThemeChange} /> : 
                                <IoSunnySharp size="1.1rem" onClick={handleThemeChange} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.menuShow}>
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen}/>
            </div>
        </div>
    );
};

export default Header;
