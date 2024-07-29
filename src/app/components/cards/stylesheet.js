import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    cardContainer: {
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
        width: "200px"
    },
    cardBackSide: {
        flexDirection:"column",
        fontSize: "10px",
        display: "flex",
        bottom: 0,
        gap: 20,
        top: 0
    },
    centerContainer: {
        backgroundColor: ({
            colors
        })=>colors.centerDivColor,
        transform: "translate(-50%, -50%)",
        boxShadow: " 1px 1px 4px 1px #000",
        border: "1px solid #000",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "40px",
        position: "fixed",
        display: "flex",
        height: "65%",
        width: "50%",
        left: "50%",
        top: "50%",
        zIndex: 2
    },
    centerLeftSide: {
        flexDirection: "column",
        paddingBottom: "60px",
        paddingLeft: "50px",
        display: "flex",
        width: "50%",
        gap: 50
    },
    centerRightSide: {
        flexDirection: "column",
        alignItems: "center",
        paddingRight: "50px",
        display: "flex",
        width: "50%",
        gap: 20
    },
    description: {
        "@media screen and (max-width: 1200px)": {
            fontSize: "12px"
        },
        "@media screen and (max-width: 830px)": {
            fontSize: "9px"
        }
    },
    button: {
        backgroundImage: ({
            colors
        })=>colors.backgroundColor,
        borderColor: ({
            colors
        })=>colors.headHoverColor,
        color: ({
            colors
        })=>colors.textColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "30px",
        display: "flex",
        height: "40px",
        width: "100%",
        fontSize: 14
    },
    buttonText: {
        color: ({
            colors
        })=>colors.textColor,
        textDecoration: "none",
        "@media screen and (max-width: 800px)": {
            fontSize: "9px"
        }
    }
});
export default useStyles;
