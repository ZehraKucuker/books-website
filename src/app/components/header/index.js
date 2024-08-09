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
    useMenu
} from '../../constants';
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
    const MENU = useMenu();
    const [isIconActive, setIsIconActive] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const {
        activeTheme, changeTheme
    }=useTheme();
    const {
        activeLanguage , changeLanguage
    }=useLanguage();
    const lang=activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color, isMenuOpen
    });
    const handleThemeChange = () => {
        setIsIconActive(!isIconActive);
        changeTheme();
    };
    const handleLinkClick = (index) => {
        setActiveIndex(index);
    };
    return <div className={classes.headerContainer} >
        <div className={classes.headerLeftSideContainer}>
            <img
                src="./images/icons/logo2.png"
                className={classes.logo}
                alt=""
            />
            <div className={classes.headerDescContainer}>
                <Link to="/home" className={classes.headerContent}>{lang.headTitle}</Link>
            </div>
        </div>
        <div className={classes.headerRightSideContainer}>
            <div className={classes.menuVisible}>  
                <div className={classes.menuContentContainer}>
                    {MENU.map((item, index) => {
                        return <Link
                            key={`menu-item-${index}`}
                            to={item.path}
                            className={index === activeIndex ? classes.activeMenuContent : classes.menuContent}
                            onClick={() => handleLinkClick(index)}
                        >
                            {item.title}
                        </Link>;
                    })
                    }
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
    </div>;
};
export default Header;
