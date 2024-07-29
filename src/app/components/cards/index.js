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
        title, author, publisher, description, imageURL, buyURL
    }
) => {
    const {
        activeTheme
    }=useTheme();
    const classes = useStyles({
        colors: activeTheme.color
    });
    const [showDiv, setShowDiv] = useState(false);
    const handleButtonClick = () => {
        setShowDiv(!showDiv);
    };
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () =>{
        setIsHover(false);
    };
    return <div>
        <div className={classes.cardContainer}>
            <div className={classes.cardContentContainer} style={{
                display: "flex",
            }}>
                <div className={classes.cardContent} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className={classes.card} style={{
                        boxShadow: isHover ? "6px 10px 6px #000" : "3px 6px 3px #000",
                    }}>
                        <img src={imageURL} alt={title} onClick={handleButtonClick} style={{
                            height: "300px",
                            width: "100%",
                            zIndex: 1
                        }}/>
                        {showDiv && (
                            <div className={classes.centerContainer}>
                                <FaTimes style={{
                                    position: "fixed",
                                    right: 30,
                                    top: 30,
                                    width: "30px",
                                    height: "30px"
                                }} onClick={handleButtonClick}/>
                                <div className={classes.centerLeftSide}>
                                    <h1 style={{
                                        fontSize: 30
                                    }}>{title}</h1>
                                    <h3>{author} | {publisher}</h3>
                                </div>
                                <div style={{
                                    width: "40px",
                                    height: "400px",
                                    borderLeft: "2px solid #0a1526"
                                }}></div>  
                                <div className={classes.centerRightSide}>
                                    <p className={classes.description}>{description}</p>
                                    <button className={classes.button}>
                                        <a className={classes.buttonText} href={buyURL} target="_blank">Detaylı bilgi için tıklayınız.</a>
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
