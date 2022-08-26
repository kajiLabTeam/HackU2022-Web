import { createTheme } from "@material-ui/core/styles";

const ChangeColor = createTheme({
  // palette: {
  //   primary: {
  //     main: "#ffffff",
  //     contrastText: "#96b4b4",
  //   },
  //   background: {
  //     default: "#ff0000",
  //   },
  //   text: { primary: "#ff9800" },
  // },
  palette: {
    primary: {
      main: "#009688",
      contrastText: "#795548",
    },
    background: {
      default: "#ff0000",
    },
    text: { primary: "#ff9800" },
  },
});

export default ChangeColor;
