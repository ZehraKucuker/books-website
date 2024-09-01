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
    },
    loading: {
        justifyContent: "center",
        display: "flex",
        height: "80vh",
        width: "100%"
    }
});
export default useStyles;
