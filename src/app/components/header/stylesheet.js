import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    headerContainer: {
        boxShadow: "1px 3px 1px #9E9E9E",
        alignItems: "center",
        flexDirection: "row",
        userSelect: "none",
        display: "flex",
        width: "100%",
        height: "80px",
        "@media screen and (max-width: 900px)":{
            justifyContent:"space-between"
        }
    },
    headerLeftSideContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width:"40%",
        marginLeft:"20px",
       
    },
    headerRightSideContainer:{
        width:"60%",
        marginRight:"20px",
        "@media screen and (max-width: 900px)":{
        }
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
        fontSize: "24px"
    },
    menuVisible: {
        justifyContent: "space-between",
        display:"flex",
        "@media screen and (max-width: 900px)":{
            display:"flex",
            flexDirection:"column",
            justifyContent: "space-between",
            backgroundColor: "#7c98d2",
            transition:"all .5s",
            position:"absolute",
            opacity:"0.9",
            height:"100%",
            width:"350px",
            top:"80px",
            right:"0px",
            zIndex:"2",
        }
    },
    menuHidden: {
        justifyContent:"space-between",
        alignItems:"center",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            backgroundColor:"#7c98d2",
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
        width: "100%",
        display: "flex",
        marginRight: "50px",
        justifyContent:"space-between",
        "@media screen and (max-width: 900px)": {
            flexDirection:"column",
            display: "flex",
            alignItems: "start",
            padding:"60px 100px",
            width:"175px",
            gap: "30px"
        }
    },
    menuContent: {
        textDecoration: "none",
        fontSize: 20,
        color: "#000000",
        fontWeight: "inherit",
    },
    menuShow: {
        display:"none",
        "@media screen and (max-width: 900px)":{
            display:"flex",
            marginRight: "20px"
        }
    }
})

export default useStyles;