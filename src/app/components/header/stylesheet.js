import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    headerContainer: {
        boxShadow: "1px 3px 1px #9E9E9E",
        justifyContent: "space-between",
        paddingRight: "100px",
        alignItems: "center",
        paddingLeft: "100px",
        flexDirection: "row",
        userSelect: "none",
        display: "flex",
        padding: "8px",
        width: "100%",
        height: 60
    },
    headerLeftSideContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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
        
    },
    menuHidden: {
        
    },
    menuContentContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 80,
        padding: 150
    },
    menuContent: {
        textDecoration: "none",
        fontSize: 20,
        color: "#000000",
        fontWeight: "inherit",
    },
    menuShow: {
        justifyContent: "flex-end",
        
    }
})

export default useStyles;
