import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#d95f13ff",
        contrastText:'white',
      },
      black: {
        main: "#000000",
      },
    }, 
  });
};
export default getTheme;
