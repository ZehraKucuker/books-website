import React from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Cards = (
    {
        title, author, publisher, description, imageURL, buyURL
    }
) => {
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
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.cardFront} style={{
                        backgroundImage: "url({imageURL})",
                        backgroundColor: "rgba(255, 163,42, 0.2)",
                        alignItems: "center"
                    }}>
                        <img src={imageURL} alt={title}/>
                        <h1>{title}</h1>
                        <h2>{author}</h2>
                        <h3>{publisher}</h3>
                    </div>
                    <div className={classes.cardBack} style={{
                        backgroundImage: "url('./images/sayfa.jpg')",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transform: "translateZ(4.4rem)",
                        gap: "0.5rem"
                    }}>
                        <p>{description}</p>
                        <button>
                            <a href={buyURL} rel="external">Satın Al</a>
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Cards;
