import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    cardContainer: {
        backgroundColor: ({
            colors
        })=>colors.mainBackground,
        justifyContent: "center",
        paddingBottom: "50px",
        display: "flex",
        height: "300px",
        width: "100%"
    },
    cardContentContainer: {
        paddingRight: "90px",
        paddingLeft: "90px",
        display: "felx"
    },
    cardContent: {
        position: "relative",
        display: "flex",
        height: "300px",
        width: "200px",
    },
    cardBackSide: {
        justifyContent: "center",
        flexDirection:"column",
        fontSize: "10px",
        display: "flex",
        bottom: 0,
        top: 0
    },
    button: {
        backgroundColor: ({
            colors
        })=>colors.backgroundColor,
        justifyContent: "center",
        borderRadius: "30px",
        display: "flex",
        width: "100%"
    }
});

export default useStyles;
