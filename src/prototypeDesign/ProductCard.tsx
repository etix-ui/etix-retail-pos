import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  useTheme,
} from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { TransitionProps } from "@mui/material/transitions"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Product } from "./SellPage"
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported"

interface Props {
  product: Product
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export function ProductCard(props: Props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const selectedByDefault = props.product.variations.filter((x) => x.selectedByDefault === true).map((x) => x.name)
  const [selectedVariations, setSelectedVariations] = React.useState(selectedByDefault)

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleClickOpen}>
        {props.product.image !== "" ? (
          <CardMedia component="img" height="140" image={props.product.image} alt="{props.product.name}" />
        ) : (
          <Box
            sx={{
              backgroundColor: "#e7e8e9",
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              verticalAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              color: "#999",
            }}
          >
            <ImageNotSupportedIcon sx={{ fontSize: "60px" }} />
            <Typography variant="h6">No Image Found</Typography>
          </Box>
        )}
        <CardContent style={{ minHeight: "105px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {props.product.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between" sx={{ pl: 1, pr: 1, pb: 0 }}>
            <Grid item>
              <Typography variant="h6" component="div" color="primary" sx={{ color: theme.palette.primary.light }}>
                {props.product.price}
              </Typography>
            </Grid>
            <Grid item>
              <Chip sx={{ color: "#fff", backgroundColor: theme.palette.secondary.light }} label="2" size="small" />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{"Customize " + props.product.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.product.variations.map((variation) => {
              const isSelected = selectedVariations.includes(variation.name)
              return (
                <Button
                  key={variation.name}
                  variant={isSelected ? "contained" : "outlined"}
                  sx={{ m: 1 }}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedVariations(selectedVariations.filter((x) => x !== variation.name))
                    } else {
                      setSelectedVariations([...selectedVariations, variation.name])
                    }
                  }}
                >
                  {variation.name}
                </Button>
              )
            })}
            {/* <pre>{JSON.stringify(selectedVariations, null, 2)}</pre> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Button variant="text" onClick={handleClose}>
            Back
          </Button>
          <Button onClick={handleClose}>Add to Order</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
