import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    footerContainer: {
        backgroundColor:({
            colors
        })=>colors.backgroundColor,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        height: "75px",
        width: "100%",
        bottom: 0,
        right: 0,
        left: 0
    },
    logo: {
        marginLeft: "75px"
    },
    copyrighter :{
        color:({
            colors
        })=>colors.textColor,
        marginRight: "75px",
        fontSize: "22px"
    },
    "@media screen and (max-width: 900px)": {
        footerContainer: {
            height: "75px"
        },
        copyrighter: {
            fontSize: "18px"
        }
    },
    "@media screen and (max-width: 750px)": {
        copyrighter: {
            fontSize: "15px"
        }
    },
    "@media screen and (max-width: 620px)": {
        copyrighter: {
            fontSize: "13px"
        }
    }
});

export default useStyles;
