import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    cards: {
        alignContent: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        display: "flex",
        width: "100%",
        gap: 30
    }
});

export default useStyles;
