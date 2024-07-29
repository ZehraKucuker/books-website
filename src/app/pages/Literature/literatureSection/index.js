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
        const fetchData = async () => {
            try {
                const {
                    data: res
                } = await axios.get(`http://localhost:3001/literature`);
                setCards(res.payload);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);
    return <div className={classes.cards}>
        {isLoading ? <img src="./images/icons/loading.gif" style={{
            paddingTop: "100px",
            height: "80px",
            width: "80px"
        }}/> :
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
export default LiteratureSection;
