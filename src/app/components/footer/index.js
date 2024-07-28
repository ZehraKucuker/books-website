import React from "react";
import useStyles from "./stylesheet";
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Footer = () => {
    const {
        activeLanguage
    }=useLanguage(); 
    const {
        activeTheme
    }=useTheme();
    const lang=activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color
    });
    return (
        <div className={classes.footerContainer}>
            <div className={classes.logo}>
                <img src="./images/icons/logo2.png" alt="" style={{
                    width: "40px",
                    height: "40px"
                }}/>
            </div>
            <div className={classes.copyrighter}>
                <span>{lang.copyright}</span>
            </div>
        </div>
    );
};

export default Footer;
