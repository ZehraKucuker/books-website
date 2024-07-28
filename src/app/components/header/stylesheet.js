import {
    createUseStyles
} from 'react-jss';
import {
    clickEvent 
} from '../../themes/helpers/index';

const useStyles = createUseStyles({
    headerContainer: {
        backgroundColor: ({
            colors
        })=>colors.backgroundColor,
        flexDirection: "row",
        alignItems: "center",
        display: "flex",
        height: "80px",
        width: "100%",
        "@media screen and (max-width: 900px)": {
            justifyContent:"space-between"
        }
    },
    headerLeftSideContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft:"50px",
        display: "flex",
        width:"40%"
    },
    headerRightSideContainer:{
        marginRight:"30px",
        width:"60%"
    },
    logo: {
        height: "50px",
        width: "50px"
    },
    headerDescContainer: {
        marginLeft: "20px",
        "&:active": {
            transition: "transform 0.05s",
            transform: "translateY(1px)",
        }
    },
    headerContent: {
        color: ({
            colors
        })=>colors.textColor,
        fontWeight: "bold",
        fontSize: "24px",
        "&:hover": {
            color: ({
                colors
            })=>colors.headHoverColor,
        }
    },
    menuVisible: {
        justifyContent: "space-between",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            justifyContent: "space-between",
            backgroundColor: ({
                colors
            })=>colors.menuColor,
            flexDirection:"column-reverse",
            transition:"all .5s",
            position:"absolute",
            display:"flex",
            opacity:"0.9",
            height:"100%",
            width:"350px",
            right:"0px",
            top:"80px",
            zIndex:"2",
        }
    },
    menuHidden: {
        justifyContent:"space-between",
        alignItems:"center",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            justifyContent:"center",
            flexDirection:"column",
            transition:"all .5s",
            position:"fixed",
            display:"flex",
            right:"-350px",
            width:"350px",
            height:"80vh",
            top:"100px",
            zIndex:"2",
        }
    },
    menuContentContainer: {
        justifyContent:"space-between",
        display: "flex",
        width: "100%",
        ...clickEvent,
        "@media screen and (max-width: 900px)": {
            paddingBottom: "400px",
            flexDirection:"column",
            paddingLeft: "80px",
            alignItems: "start",
            fontSize: "30px",
            display: "flex",
            width:"175px",
            gap: "10px"
        },
        "&:active": {
            transition: "transform 0.05s",
            transform: "translateY(1px)",
        }
    },
    menuContent: {
        color: ({
            colors
        })=>colors.textColor,
        transition: "0.5s ease",
        textDecoration: "none",
        fontWeight: "inherit",
        fontSize: 20,
        "&:hover": {
            color: ({
                colors
            })=>colors.headHoverColor
        },
        "@media screen and (max-width: 900px)": {
            "&:hover": {
                color: ({
                    colors
                })=>colors.backgroundColor
            }
        }
    },
    menuShow: {
        display:"none",
        "@media screen and (max-width: 900px)":{
            color: ({
                colors
            })=>colors.textColor,
            marginRight: "20px",
            display:"flex"
        }
    },
    iconContainer :{
        color: ({
            colors
        })=>colors.textColor,
        flexDirection: "column",
        marginLeft: "35px",
        display:"flex",
        gap: "5px",
        "@media screen and (max-width: 900px)": {
            flexDirection: "row",
            paddingLeft: "60px",
            paddingTop: "60px",
            alignItems: "start",
            fontSize: "30px",
            display: "flex",
            width:"175px",
            gap: "20px"
        }
    },
    iconLang:{
        "&:hover": {
            color: ({
                colors
            })=>colors.headHoverColor,
        }
    },
    iconTheme: {
        "&:hover": {
            color: ({
                colors
            })=>colors.headHoverColor,
        }
    }
});

export default useStyles;
