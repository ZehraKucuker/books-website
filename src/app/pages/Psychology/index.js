import React from 'react';
import PsychologySection from './psychologySection';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Psychology = () => {
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
            <h1>{lang.category4}</h1>
        </div>
        <PsychologySection/>
    </div>;
};
export default Psychology;
