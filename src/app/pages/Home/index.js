import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Home = () => {
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
        <div className={classes.container}>
            <div className={classes.content}>
                <img src="./images/home.jpg" className={classes.image} />
                <div className={classes.filter}>
                    <div className={classes.textContainer}>
                        <div className={classes.title}>
                            <h2>{lang.homeTitle}</h2>
                        </div>
                        <div className={classes.text}>
                            <p>
                                {lang.homeText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
