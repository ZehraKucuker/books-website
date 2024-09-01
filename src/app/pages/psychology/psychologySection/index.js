import React, {
    useEffect,
    useState
} from 'react';
import useStyles from './stylesheet';
import {
    Cards
} from '../../../components';
import axios from 'axios';

const PsychologySection = () => {
    const classes = useStyles();
    const [cards,setCards]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const fetchData = async () => {
        try {
            const {
                data: res
            } = await axios.get(`http://localhost:3001/psychology`);
            setCards(res.payload);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <div className={classes.cards}>
        {isLoading ? <div className={classes.loading}> <img src="./images/icons/loading.gif" style={{
            paddingTop: "100px",
            height: "80px",
            width: "80px"
        }}/>
        </div> :
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
    </div>;
};

export default PsychologySection;