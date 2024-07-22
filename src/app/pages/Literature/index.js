import React from 'react';
import useStyles from './stylesheet';
import {
    useState, useEffect 
} from 'react';
import {
    Cards
} from '../../components';
import {
    useTheme 
} from '../../context/themeContext';
import {
    useLanguage 
} from '../../context/languageContext';

const Literature = ({
    isMainFooterVisible
}) => {
    const [cards,setCards]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
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
    // eğer background olmazsa card daki ustheme lar kalkacak
    // useEffect api
    return (
        <div className={classes.literatureContainer}>
            <div className={classes.title}>
                <h1>{lang.category1}</h1>
            </div>
            <div>
                {isLoading ? <span>Loading</span> :
                    cards.map((item,index)=>{
                        return(
                            <Cards
                                key={`literature-${index}`}              
                                imageURL={item.imageURL}
                                title={item.title}
                                author={item.author}
                                publisher={item.publisher}
                                description={item.description}
                                buyURL={item.buyURL}
                            />);
                    })
                }
            </div>
        </div>
    );
};

export default Literature;
