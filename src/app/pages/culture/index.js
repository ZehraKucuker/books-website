import React from 'react';
import CultureSection from './cultureSection';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Culture = () => {
    const {
        activeTheme
    }=useTheme();
    const {
        activeLanguage
    }=useLanguage();
    const lang=activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color 
    });
    return <div className={classes.literatureContainer}>
        <div className={classes.title}>
            <h1>{lang.category3}</h1>
        </div>
        <CultureSection/>
    </div>;
};
export default Culture;
