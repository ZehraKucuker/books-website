export const clickEvent = () => {
    return {
        "&:hover": {
            cursor: "pointer",
            color: "#7ba6ff"
        },
        "&:active": {
            transform: "translateY(2px)",
            transition: "transform 0.1s",
            userSelect: "none"
        },
        "&:selection": {
            color: "#7ba6ff"
        }
    };
};