import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CloseIcon from "@mui/icons-material/Close"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast"
import GridViewIcon from "@mui/icons-material/GridView"
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  Paper,
  Slide,
  SvgIconTypeMap,
  Typography,
  useTheme,
} from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { TransitionProps } from "@mui/material/transitions"
import React, { useEffect, useState } from "react"
import { HorizontalScrollBox } from "../shared/HorizontalScrollBox"
import { CircleRegularIcon } from "../shared/icons/CircleRegular"
import { CreditCardIcon } from "../shared/icons/CreditCard"
import { CartItemComponent } from "./CartItem"
// @ts-ignore
import burgerSrc from "./images/burger.jpg"
// @ts-ignore
import cornSrc from "./images/corn.png"
// @ts-ignore
import hotdogSrc from "./images/hotdog.jpg"
import { ProductCard } from "./ProductCard"
import { Template } from "./Template"

interface ProductCategory {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
  }
  id: number
  name: string
}

const productCategories: ProductCategory[] = [
  {
    id: 1,
    name: "All Items",
    icon: GridViewIcon,
  },
  {
    id: 2,
    name: "Food",
    icon: FastfoodIcon,
  },
  {
    id: 3,
    name: "Hot Drinks",
    icon: FreeBreakfastIcon,
  },
  {
    id: 4,
    name: "All Items",
    icon: GridViewIcon,
  },
  {
    id: 5,
    name: "Food",
    icon: FastfoodIcon,
  },
  {
    id: 6,
    name: "Hot Drinks",
    icon: FreeBreakfastIcon,
  },
  {
    id: 7,
    name: "All Items",
    icon: GridViewIcon,
  },
  {
    id: 8,
    name: "Food",
    icon: FastfoodIcon,
  },
  {
    id: 9,
    name: "Hot Drinks",
    icon: FreeBreakfastIcon,
  },
  {
    id: 10,
    name: "All Items",
    icon: GridViewIcon,
  },
  {
    id: 11,
    name: "Food",
    icon: FastfoodIcon,
  },
  {
    id: 12,
    name: "Hot Drinks",
    icon: FreeBreakfastIcon,
  },
]

export interface Product {
  categoryId: number
  id: number
  image: string
  name: string
  price: string
  variations: ProductVariation[]
}

export interface ProductVariation {
  name: string
  selectedByDefault?: boolean
}

const products: Product[] = [
  {
    id: 1,
    categoryId: 2,
    name: "Corn on the cob",
    price: "$5.99",
    image: cornSrc,
    variations: [
      { name: "Butter", selectedByDefault: true },
      { name: "Salt", selectedByDefault: true },
      { name: "Pepper" },
    ],
  },
  {
    id: 2,
    categoryId: 2,
    name: "Foot Long Hog Dog",
    price: "$8.99",
    image: hotdogSrc,
    variations: [{ name: "Ketchup" }, { name: "Mustard" }],
  },
  {
    id: 3,
    categoryId: 2,
    name: "Half Pound Burger",
    price: "$10.99",
    image: burgerSrc,
    variations: [{ name: "Lettuce" }, { name: "Tomato" }, { name: "Onion" }, { name: "Ketchup" }, { name: "Mustard" }],
  },
  {
    id: 4,
    categoryId: 2,
    name: "Mushroom and Pepperoni Pizza Slice",
    price: "$10.99",
    image: cornSrc,
    variations: [],
  },
  {
    id: 5,
    categoryId: 2,
    name: "Corn on the cob",
    price: "$5.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
  {
    id: 6,
    categoryId: 2,
    name: "Foot Long Hog Dog",
    price: "$8.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
  {
    id: 7,
    categoryId: 2,
    name: "Half Pound Burger",
    price: "$10.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
  {
    id: 8,
    categoryId: 2,
    name: "Mushroom and Pepperoni Pizza Slice",
    price: "$10.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
  {
    id: 9,
    categoryId: 3,
    name: "Tea",
    price: "$10.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
  {
    id: 10,
    categoryId: 3,
    name: "Coffee",
    price: "$10.99",
    image: cornSrc,
    variations: [{ name: "Butter" }, { name: "Salt" }, { name: "Pepper" }],
  },
]

// export interface Cart {
//   id: string
//   items: CartItem
// }

export interface CartItem {
  id: number
  image: string
  name: string
  price: string
  quantity: number
  variations: string
}

const carts: CartItem[] = [
  {
    id: 1,
    image: cornSrc,
    name: "Corn on the Cob",
    price: "$8.99",
    quantity: 1,
    variations: "Butter, Salt",
  },
  {
    id: 2,
    image: hotdogSrc,
    name: "Foot Long Hot Dong",
    price: "$12.99",
    quantity: 1,
    variations: "Ketchup, Mustard",
  },
  {
    id: 3,
    image: hotdogSrc,
    name: "Half Pound Burger",
    price: "$12.99",
    quantity: 1,
    variations: "Ketchup, Mustard, Onions, Pickles, Lettuce, Tomato",
  },
]

// Checkout Steps
type Step = "PaymentMethod" | "Success" | "Waiting"

export function SellPage() {
  const theme = useTheme()

  const [selectedCategory, setSelectedCategory] = React.useState(1)

  const [cartSummary, setCartSummary] = React.useState(false)

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const css = `
  .v-gradient::before {
      content: ' ';  
      position:absolute;
      top:-50px;
      left: 0;
      width:100%;
      height: 50px;
      background:  linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
  }

  .h-gradient::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background:  linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
    z-index: 999;
}
  `

  const [step, setStep] = useState<Step>("PaymentMethod")

  useEffect(() => {
    if (step === "Waiting") {
      const timer = setTimeout(() => setStep("Success"), 5000)
      return () => clearTimeout(timer)
    }
  }, [step])

  return (
    <>
      <style>{css}</style>
      <Template>
        <Box
          sx={{
            position: "relative",
            ...(scrollPosition <= 114 && {
              position: "relative",
            }),
            ...(scrollPosition >= 115 && {
              position: "fixed",
            }),
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
          }}
          className="h-gradient"
        >
          <HorizontalScrollBox>
            {productCategories.map((category) => (
              <Box key={category.id} padding={1} paddingTop={2} paddingBottom={2} maxWidth="xl">
                <Fab
                  onClick={() => setSelectedCategory(category.id)}
                  variant="extended"
                  color={selectedCategory === category.id ? "primary" : undefined}
                  sx={{
                    backgroundColor: selectedCategory === category.id ? "theme.pallette.primary.light" : undefined,
                  }}
                >
                  <category.icon sx={{ marginRight: 1 }} />
                  {category.name}
                </Fab>
              </Box>
            ))}
          </HorizontalScrollBox>
        </Box>
        <Box sx={{ mb: 20 }}>
          <Grid container spacing={1}>
            {products
              .filter((product) => product.categoryId === selectedCategory || selectedCategory === 1)
              .map((product) => {
                return (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product}></ProductCard>
                  </Grid>
                )
              })}
          </Grid>
        </Box>

        <Box
          component="footer"
          sx={{
            p: 3,
            backgroundColor: "#fff",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
          }}
          className="v-gradient"
        >
          <Container maxWidth="xl">
            {cartSummary ? (
              <Grid container>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                      Order Summary
                    </Typography>
                  </Grid>
                  <Grid item>
                    <CloseIcon fontSize="large" onClick={() => setCartSummary(false)} />
                  </Grid>
                </Grid>
                {carts.map((cartItem) => {
                  return <CartItemComponent key={cartItem.id} cart={cartItem}></CartItemComponent>
                })}
                <Grid container sx={{ textAlign: "right" }}>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="600">
                      SubTotal: $39.99
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight="600">
                      Tax (7.25%): $15.59
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ) : null}
            <Grid container spacing={3} alignItems="center">
              <Grid item marginLeft="auto">
                <Typography variant="h5" component="div" fontWeight="600" onClick={() => setCartSummary(true)}>
                  Items: 5
                </Typography>
              </Grid>
              <Grid item>
                <Fab
                  variant="extended"
                  onClick={handleClickOpen}
                  sx={{
                    color: "#fff",
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  Charge $45.00
                </Fab>
              </Grid>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle>
                  <Button variant="text" onClick={handleClose}>
                    Cancel
                  </Button>
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                  <DialogContentText id="alert-dialog-slide-description">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h5" sx={{ color: "#000" }}>
                          TOTAL
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h2" sx={{ fontWeight: "bold", color: "#000", mb: 3 }}>
                          $45.00
                        </Typography>
                      </Grid>
                    </Grid>

                    {step === "Waiting" ? (
                      <Grid container spacing={6} sx={{ px: 3, mb: 3 }}>
                        <Grid item xs={12}>
                          <Paper elevation={0} sx={{ py: 8 }} square>
                            <CircleRegularIcon sx={{ fontSize: "100px", color: "#cc0000" }}></CircleRegularIcon>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#cc0000" }}>
                              Waiting for Reader
                            </Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ) : step === "Success" ? (
                      <Grid container spacing={6} sx={{ px: 3, mb: 3 }}>
                        <Grid item xs={12}>
                          <Paper elevation={0} sx={{ py: 8 }} square>
                            <CheckCircleIcon sx={{ fontSize: "100px", color: "green" }}></CheckCircleIcon>
                          </Paper>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid container spacing={6} sx={{ px: 3, mb: 3 }}>
                        <Grid item xs={6}>
                          <Paper elevation={0} variant="outlined" sx={{ py: 8 }} square>
                            <CreditCardIcon sx={{ fontSize: "100px" }}></CreditCardIcon>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              CARD
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={6} onClick={() => setStep("Waiting")}>
                          <Paper elevation={0} variant="outlined" sx={{ py: 8 }} square>
                            <CircleRegularIcon sx={{ fontSize: "100px" }}></CircleRegularIcon>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              WRISTBAND
                            </Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    )}
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </Grid>
          </Container>
        </Box>
      </Template>
    </>
  )
}
