import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    container: {
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
        height: "750px",
        width: "100%",
        "@media screen and (min-width: 1000px)": {
            height: "900px"
        }
    },
    textContainer: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        zIndex: 2,
    },
    title: {
        textShadow: "2px 2px #000000",
        marginBottom: "50px",
        color: "#d2d4d9",
        fontSize: "2rem",
        display: "flex",
        width: "50%",
        "@media screen and (max-width: 1000px)": {
            marginBottom: "50px",
            fontSize: "1.75rem",
            display: "flex"
        }
    },
    text: {
        textShadow: "1px 1px #000000",
        letterSpacing: "0.3px",
        fontSize: "1.1rem",
        textIndent: "30px",
        color: "#d2d4d9",
        display: "flex",
        width: "50%",
        "@media screen and (max-width: 1000px)": {
            fontSize: "0.85rem",
            textIndent: "20px",
            display: "flex"
        }
    }
})

export default useStyles;
