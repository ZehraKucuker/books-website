import React from 'react';
import HistorySection from './historySection';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const History = () => {
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
            <h1>{lang.category5}</h1>
        </div>
        <HistorySection/>
    </div>;
};
export default History;
