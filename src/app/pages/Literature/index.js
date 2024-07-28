import React, {
    useEffect,
    useState
} from 'react';
import LiteratureSection from './literatureSection';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Literature = () => {
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
    
    return (
        <div className={classes.literatureContainer}>
            <div className={classes.title}>
                <h1>{lang.category1}</h1>
            </div>
            <LiteratureSection/>
        </div>
    );
};

export default Literature;
