import {
    createUseStyles
} from 'react-jss';

const useStyles = createUseStyles({
    literatureContainer: {
        backgroundColor: ({
            colors
        })=>colors.mainBackground,
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        display: "flex",
        width: "100%",
        fontSize: 18,
    }
});

export default useStyles;
