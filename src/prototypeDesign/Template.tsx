import HistoryIcon from "@mui/icons-material/History"
import SettingsIcon from "@mui/icons-material/Settings"
import StorefrontIcon from "@mui/icons-material/Storefront"
import { Badge, Grid, Link } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import { PrototypeDesignTheme } from "./PrototypeDesignTheme"

interface Props {
  children: React.ReactNode
}

export function Template(props: Props) {
  return (
    <PrototypeDesignTheme>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          component="header"
          sx={{
            py: 3,
            px: 0,
            mt: 0,
          }}
        >
          <Container maxWidth="xl">
            <Grid container alignItems="center" justifyContent="flex-end">
              <Grid item marginRight="auto">
                <Typography variant="h4" component="div" fontWeight="600">
                  Bob Hotdog Stand
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  NC State Fair Grounds - Dorton Arena
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" display="block">
                  Last Synced
                </Typography>
                <Badge
                  color="secondary"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    30 minutes ago
                  </Typography>
                </Badge>
              </Grid>
              <Grid item sx={{ ml: 3 }}>
                <RouterLink to="/">
                  <Link>
                    <StorefrontIcon fontSize="large" />
                  </Link>
                </RouterLink>
              </Grid>
              <Grid item sx={{ ml: 3 }}>
                <RouterLink to="/orderHistory">
                  <Link>
                    <HistoryIcon fontSize="large" />
                  </Link>
                </RouterLink>
              </Grid>
              <Grid item sx={{ ml: 3 }}>
                <RouterLink to="/settings">
                  <Link>
                    <SettingsIcon fontSize="large" />
                  </Link>
                </RouterLink>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container component="main" sx={{ mt: 2, mb: 2 }} maxWidth="xl">
          {props.children}
        </Container>
      </Box>
    </PrototypeDesignTheme>
  )
}
