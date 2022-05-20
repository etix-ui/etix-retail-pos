import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

interface Props {
  children: React.ReactNode
}

export function PrototypeDesignTheme(props: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#065fae",
        dark: "#07559a",
        light: "#157dd9",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#48a224",
        dark: "#07559a",
        light: "#83ca37",
      },
      mode: "light",
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
