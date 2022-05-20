import { Box, Grid } from "@mui/material"
import Typography from "@mui/material/Typography"
import React from "react"
import { Template } from "./Template"
import { OrderHistoryTable } from "./OrderHistoryTable"

export function OrderHistoryPage() {
  return (
    <Template>
      <Box marginBottom={4}>
        <Typography variant="h5" component="div" fontWeight="600" sx={{ mb: 1 }}>
          Order History
        </Typography>

        <Grid spacing={3}>
          <OrderHistoryTable></OrderHistoryTable>
        </Grid>
      </Box>
    </Template>
  )
}
