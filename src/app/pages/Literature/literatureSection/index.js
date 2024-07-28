import React, {
    useEffect,
    useState
} from 'react';
import useStyles from './stylesheet';
import {
    Cards
} from '../../../components';
import axios from 'axios';

const LiteratureSection = () => {
    const [cards,setCards]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const classes = useStyles();
    useEffect(() => {
        axios.get(`http://localhost:3001/literature`)
            .then(res => {
                if(res.data.code === 200) {
                    setCards(res.data.payload);
                    setIsLoading(false);
                } else {
                    throw new Error(res.message);
                }
            })
            .catch(err => {
                alert(err.message);
                console.log(err);
            });
    }, []);
    return (
        <div className={classes.cards}>
            {isLoading ? <span>Loading</span> :
                cards.map((item,index)=>{
                    return(
                        <Cards
                            key={index}              
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
    );
};

export default LiteratureSection;
