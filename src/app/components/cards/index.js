import React, {
    useState 
} from 'react';
import useStyles from './stylesheet';
import {
    useTheme 
} from '../../context/themeContext';

const Cards = (
    {
        title, author, publisher, description, imageURL, buyURL
    }
) => {
    const {
        activeTheme
    }=useTheme();
    const classes = useStyles({
        colors: activeTheme.color
    });
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () =>{
        setIsHover(false);
    };
    return (
        <div>
            <div className={classes.cardContainer}>
                <div className={classes.cardContentContainer} style={{
                    display: "flex",
                }}>
                    <div className={classes.cardContent}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className={classes.card}>
                            {
                                isHover ? <img src="./images/icons/sayfa.jpg" alt={title} style={{
                                    WebkitTransform: "scale(1.5)",
                                    transform: "scale(1.5)",
                                    position:"relative",
                                    height: "300px",
                                    width: "100%",
                                    opacity: 0.8,
                                    zIndex: 2
                                }}/> : <img src={imageURL} alt={title} style={{
                                    height: "300px",
                                    width: "100%"
                                }}/>
                            }
                            <div className={classes.cardBackSide} style={isHover ? {
                                position: "absolute",
                                zIndex: 3,
                            } : {
                                display: "none"
                            }}>
                                <h1 style={{
                                    fontSize: "16px"
                                }}>{title}</h1>
                                <h2 style={{
                                    fontSize: "12px"
                                }}>{author}</h2>
                                <h3 style={{
                                    fontSize: "12px"
                                }}>{publisher}</h3>
                                <p style={{
                                    fontSize: "8px"
                                }}>{description}</p>
                                <button className={classes.button}>
                                    <a style={{
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        color: "white"
                                    }} href={buyURL} target="_blank">Satın Al</a>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
        </div>
        
    );
};

export default Cards;
