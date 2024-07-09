import {createUseStyles} from 'react-jss';
import { clickEvent } from '../../themes/helpers';

const useStyles = createUseStyles({
    headerContainer: {
        boxShadow: "1px 3px 1px #9E9E9E",
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
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
        marginRight:"20px",
        width:"60%"
    },
    logo: {
        height: "50px",
        width: "50px"
    },
    headerDescContainer: {
        paddingLeft: "20px",
    },
    headerContent: {
        fontWeight: "bold",
        fontSize: "24px",
        color: "#ffffff"
    },
    menuVisible: {
        justifyContent: "space-between",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            justifyContent: "space-between",
            backgroundColor: "#577ece",
            flexDirection:"column",
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
        marginRight: "50px",
        display: "flex",
        width: "100%",
        ...clickEvent,
        "@media screen and (max-width: 900px)": {
            flexDirection:"column",
            padding:"60px 100px",
            alignItems: "start",
            fontSize: "30px",
            display: "flex",
            width:"175px",
            gap: "30px"
        },
        "&:hover div:not(:hover)": {
            filter: "blur(0.5px)",
            opacity: 0.5
        },
        "&:active": {
            transition: "transform 0.05s",
          transform: "translateY(1px)",
        }
    },
    menuContent: {
        transition: "0.5s ease",
        textDecoration: "none",
        fontWeight: "inherit",
        color: "#ffffff",
        fontSize: 20,
        "&:hover": {
            color: "#00143c"
        },
        "@media screen and (max-width: 900px)": {
            "&:hover": {
                color: "#001b53"
            }
        }
    },
    menuShow: {
        display:"none",
        "@media screen and (max-width: 900px)":{
            marginRight: "20px",
            color: "#ffffff",
            display:"flex"
        }
    }
})

export default useStyles;