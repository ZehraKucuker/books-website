import React, {
    useState 
} from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';
import {
    FaTimes 
} from "react-icons/fa";

const Cards = (
    {
        title, 
        author, 
        publisher, 
        description, 
        imageURL, 
        buyURL
    }
) => {
    const {
        activeTheme
    }=useTheme();
    const classes = useStyles({
        colors: activeTheme.color
    });
    const [showDiv, setShowDiv] = useState(false);
    const handleButtonClick = (e) => {
        setShowDiv(!showDiv);
    };
    return <div>
        <div className={classes.cardContainer}>
            <div className={classes.cardContentContainer}>
                <div className={classes.cardContent}>
                    <div className={classes.card}>
                        <img src={imageURL} alt={title} onClick={handleButtonClick} style={{
                            height: "300px",
                            width: "100%",
                            zIndex: 1
                        }}/>
                        {showDiv && (
                            <div className={classes.centerContainer}>
                                <FaTimes className={classes.icon} onClick={handleButtonClick}/>
                                <div className={classes.centerLeftSide}>
                                    <h1 style={{
                                        fontSize: 26
                                    }}>{title}</h1>
                                    <h3 style={{
                                        fontSize: 16
                                    }}>{author} | {publisher}</h3>
                                </div>
                                <div style={{
                                    width: "40px",
                                    height: "300px",
                                    borderLeft: "2px solid #0a1526"
                                }}></div>  
                                <div className={classes.centerRightSide}>
                                    <p className={classes.description}>{description}</p>
                                    <button className={classes.button}>
                                        <a className={classes.buttonText} href={buyURL} target="_blank">Detaylı bilgi almak veya satın almak için tıklayınız.</a>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Cards;
