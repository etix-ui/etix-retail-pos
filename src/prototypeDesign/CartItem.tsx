import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material"
import React from "react"
import { CartItem } from "./SellPage"

interface Props {
  cart: CartItem
}

export function CartItemComponent(props: Props) {
  return (
    <>
      {" "}
      <Grid container spacing={3} sx={{ mb: 3 }} alignItems="flex-start" justifyContent="flex-start">
        <Grid item>
          <Box
            component="img"
            sx={{
              height: 60,
              width: 60,
            }}
            src={props.cart.image}
            alt={props.cart.name}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h6">{props.cart.name}</Typography>
          <Typography variant="body1">{props.cart.variations} </Typography>
        </Grid>
        <Grid item sx={{ ml: "auto", textAlign: "center" }}>
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
            <Button>-</Button>
            <Button disabled>1</Button>
            <Button>+</Button>
          </ButtonGroup>
        </Grid>
        <Grid item sx={{ ml: "auto" }}>
          <Typography variant="h6">{props.cart.price}</Typography>
        </Grid>
      </Grid>
    </>
  )
}
