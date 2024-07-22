import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    cardContainer: {
        backgroundColor: ({
            colors
        })=>colors.mainBackground
    },
    card: {
        height: "300px",
        display: "flex",
        width: '400px'
    },
    cardContent: {
        transformStyle: "preserve-3d",
        transition: "transform 3s",
        padding: "15rem 5rem",
        position: "relative"
    },
    "card:hover cardContent": {
        transform: "rotateY(180deg)"
    },
    cardFront: {
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        padding: "2rem",
        display: "flex",
        inset: 0
    },
    cardBack: {
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        display: "flex",
        padding: "2rem",
        inset: 0,
    }
});

export default useStyles;
