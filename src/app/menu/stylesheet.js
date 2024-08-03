import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    menuContentContainer: {
        justifyContent:"space-between",
        alignItems: "center",
        display: "flex",
        width: "100%",
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
        }
    },
});
export default useStyles;
