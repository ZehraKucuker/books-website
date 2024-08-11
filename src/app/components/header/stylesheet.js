import {
    createUseStyles
} from 'react-jss';
import {
    clickEvent 
} from '../../themes/helpers';

const useStyles = createUseStyles((theme) => ({
    headerContainer: {
        backgroundImage: ({
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
        marginLeft: "20px"
    },
    headerContent: {
        color: ({
            colors
        })=>colors.textColor,
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "24px",
        ...clickEvent()
    },
    menuVisible: {
        justifyContent: "space-between",
        display:"flex",
        "@media screen and (max-width: 1000px)": {
            justifyContent: "space-evenly",
            backgroundColor: ({
                colors
            })=>colors.menuColor,
            flexDirection:"column-reverse",
            transition:"all .5s",
            position:"fixed",
            display:"flex",
            opacity:"0.9",
            height:"100%",
            width:"350px",
            right: ({
                isMenuOpen 
            }) => (isMenuOpen ? "0px" : "-350px"),
            top:"80px",
            zIndex:"2"
        }
    },
    menuContentContainer: {
        justifyContent:"space-between",
        alignItems: "center",
        display: "flex",
        width: "100%",
        "@media screen and (max-width: 1000px)": {
            paddingBottom: "400px",
            flexDirection:"column",
            paddingLeft: "80px",
            alignItems: "start",
            fontSize: "30px",
            display: "flex",
            width:"175px",
            gap: "20px"
        }
    },
    menuContent: {
        transition: "0.5s ease",
        textDecoration: "none",
        fontWeight: "inherit",
        fontSize: 20,
        color: ({
            colors 
        }) => colors.textColor,
        ...clickEvent(),
        "@media screen and (max-width: 1000px)": {
            "&:hover": {
                color: ({
                    colors
                })=>colors.backgroundColor
            }
        }
    },
    activeMenuContent: {
        color: ({
            colors 
        }) => colors.selectionColor,
        textDecoration: "none",
        fontWeight: "inherit",
        fontSize: 20,
    },
    menuShow: {
        display:"none",
        "@media screen and (max-width: 1000px)":{
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
        "@media screen and (max-width: 1000px)": {
            flexDirection: "row",
            paddingLeft: "60px",
            paddingTop: "30px",
            alignItems: "start",
            fontSize: "30px",
            display: "flex",
            width:"175px",
            gap: "20px"
        }
    },
    iconLang:{
        ...clickEvent()
    },
    iconTheme: {
        ...clickEvent()
    }
}));
export default useStyles;
