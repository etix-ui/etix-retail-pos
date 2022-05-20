import { Box, Grid, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs } from "@mui/material"
import Typography from "@mui/material/Typography"
import React, { ReactNode } from "react"
import { Template } from "./Template"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
export function SettingsPage() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Template>
      <Box marginBottom={4}>
        <Typography variant="h5" component="div" fontWeight="600" sx={{ mb: 1 }}>
          Settings
        </Typography>

        <Grid spacing={3}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Account" {...a11yProps(0)} />
                <Tab label="Device" {...a11yProps(1)} />
                <Tab label="Products" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <SettingsDetailContainer>
                <SettingsDetailItem label="TEST">
                  <Box>TEST</Box>
                </SettingsDetailItem>
              </SettingsDetailContainer>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>{" "}
        </Grid>
      </Box>
    </Template>
  )
}

interface SettingsDetailProps {
  children: ReactNode
  label: ReactNode
}

function SettingsDetailContainer({ children }: { children: ReactNode }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  )
}

function SettingsDetailItem({ label, children }: SettingsDetailProps) {
  return (
    <TableRow>
      <TableCell style={{ width: "175px", fontWeight: "bold" }}>{label}</TableCell>
      <TableCell>{children}</TableCell>
    </TableRow>
  )
}
