export const clickEvent = () => {
    return {
        "&:active": {
            transition: "transform 0.05s",
            transform: "translateY(1px)",
        },
        "&:hover": {
            color: ({
                colors
            })=>colors.headHoverColor,
        }
    };
};
