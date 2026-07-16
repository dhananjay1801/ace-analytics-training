import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 63,
    height: 32,
    padding: 0,
    display: "flex",

    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 30,
        },

        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(31px)",
        },
    },

    "& .MuiSwitch-switchBase": {
        padding: 3,
        transitionDuration: "300ms",

        "&.Mui-checked": {
            transform: "translateX(31px)",
            color: "#fff",

            "& + .MuiSwitch-track": {
                backgroundColor: "#1890ff",
                opacity: 1,
            },
        },
    },

    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px rgb(0 35 11 / 20%)",
        width: 26,
        height: 26,
        borderRadius: "50%",
        transition: theme.transitions.create("width", {
            duration: 200,
        }),
    },

    "& .MuiSwitch-track": {
        borderRadius: 16,
        opacity: 1,
        backgroundColor: "#BDBDBD",
        boxSizing: "border-box",
        transition: theme.transitions.create("background-color", {
            duration: 300,
        }),
    },
}));

export default AntSwitch;