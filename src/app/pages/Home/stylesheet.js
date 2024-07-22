import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    container: {
        backgroundColor: "red",
        position: "relative",
        display: "flex",
        height: "100%",
        width: "100%",
    },
    content: {
        position: "relative",
        display: "flex",
        height: "100%",
        width: "100%",
        zIndex: 1
    },
    filter: {
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        textAlign: "center",
        display: "flex",
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
    },
    image: {
        height: "1000px",
        width: "100%"
    },
    textContainer: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        zIndex: 2,
        gap: 80,
        "@media screen and (max-width: 1000px)": {
            gap: 20
        },
        "@media screen and (max-width: 750px)": {
            gap: 10
        }
    },
    title: {
        textShadow: "2px 2px #000000",
        fontSize: "2.2rem",
        color: "#d2d4d9",
        display: "flex",
        width: "50%",
        "@media screen and (max-width: 1000px)": {
            fontSize: "1.8rem",
        },
        "@media screen and (max-width: 750px)": {
            fontSize: "1.5rem",
        },
        "@media screen and (max-width: 620px)": {
            fontSize: "1.3rem",
        }
    },
    text: {
        textShadow: "1px 1px #000000",
        letterSpacing: "0.3px",
        fontSize: "1.2rem",
        textIndent: "30px",
        color: "#d2d4d9",
        display: "flex",
        width: "50%",
        "@media screen and (max-width: 1000px)": {
            fontSize: "0.95rem",
            textIndent: "20px",
        },
        "@media screen and (max-width: 750px)": {
            fontSize: "0.9rem",
        },
        "@media screen and (max-width: 620px)": {
            fontSize: "0.8rem",
        }
    }
});

export default useStyles;
