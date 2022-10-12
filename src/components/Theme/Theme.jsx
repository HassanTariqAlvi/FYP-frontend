import { createTheme } from "@mui/material/styles";

// Raleway
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const companyColor = "#0b5347";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      grey: arcGrey,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
    company: {
      main: companyColor,
    },
  },
  typography: {
    fontFamily: "DM Sans",
    h5: {
      fontWeight: 500,
      fontSize: "1.2rem",
      color: arcBlue,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.2rem",
      color: arcBlue,
      lineHeight: 1,
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#06d1b6",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "white",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
          color: companyColor,
          fontWeight: "bold",
          "&:hover": {
            color: "white",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: arcBlue,
          fontSize: "0.9rem",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
        },
        body: {},
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSelect-icon": {
            fill: arcOrange,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          fontSize: "0.9em",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
