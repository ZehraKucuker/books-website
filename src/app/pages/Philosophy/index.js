import React from 'react';
import PhilosophySection from './philosophySection';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Philosophy = () => {
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
            <h1>{lang.category2}</h1>
        </div>
        <PhilosophySection/>
    </div>;
};
export default Philosophy;
