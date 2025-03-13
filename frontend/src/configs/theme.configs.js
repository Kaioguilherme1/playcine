import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#0000ff", // Blue color
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#1e90ff", // DodgerBlue color
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#131313"
      }
    } : {
      primary: {
        main: "#0000ff" // Blue color
      },
      secondary: {
        main: "#1e90ff" // DodgerBlue color
      },
      background: {
        default: colors.grey["100"],
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        },
        MuiTable: {
          styleOverrides: {
            root: {
              backgroundColor: mode === themeModes.dark ? "#131313" : colors.grey["100"],
              color: mode === themeModes.dark ? "#ffffff" : "#000000"
            }
          }
        }
      }
    });
  }
};

export default themeConfigs;