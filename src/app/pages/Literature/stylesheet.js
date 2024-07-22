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
        height: "auto",
        width: "100%"
    },
    title: {
        justifyContent: "center",
        display: "flex",
        fontSize: 18
    }
});

export default useStyles;
