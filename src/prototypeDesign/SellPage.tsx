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
// @ts-ignore
import grilledcheeseSrc from "./images/grilledcheese.jpeg"
// @ts-ignore
import pabstSrc from "./images/pabst.jpeg"
// @ts-ignore
import pizzaSrc from "./images/pizza.jpeg"
// @ts-ignore
import snickersSrc from "./images/snickers.webp"
// @ts-ignore
import shrimpSrc from "./images/shrimp.jpeg"
// @ts-ignore
import chickentendersSrc from "./images/chickentenders.webp"
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
    name: "Cold Drinks",
    icon: FreeBreakfastIcon,
  },
  {
    id: 4,
    name: "Hot Drinks",
    icon: FreeBreakfastIcon,
  },
  {
    id: 5,
    name: "Alcohol",
    icon: FreeBreakfastIcon,
  },
  {
    id: 6,
    name: "Merchandise",
    icon: FreeBreakfastIcon,
  },
  {
    id: 7,
    name: "Gift Cards",
    icon: FreeBreakfastIcon,
  },
  {
    id: 8,
    name: "Kids Food",
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
    price: "$9.99",
    image: pizzaSrc,
    variations: [
      { name: "Pepperoni", selectedByDefault: true },
      { name: "Mushroom", selectedByDefault: true },
      { name: "Extra Cheese" },
      { name: "Bacon +$1.50" },
    ],
  },
  {
    id: 5,
    categoryId: 2,
    name: "Shrimp Cocktail",
    price: "$9.99",
    image: shrimpSrc,
    variations: [],
  },
  {
    id: 6,
    categoryId: 2,
    name: "Fried Snickers",
    price: "$9.99",
    image: snickersSrc,
    variations: [],
  },
  {
    id: 7,
    categoryId: 2,
    name: "Grilled Cheese",
    price: "$9.99",
    image: grilledcheeseSrc,
    variations: [],
  },
  {
    id: 8,
    categoryId: 2,
    name: "Chicken Tenders",
    price: "$9.99",
    image: chickentendersSrc,
    variations: [{ name: "4 Pieces" }, { name: "6 Pieces" }],
  },
  {
    id: 9,
    categoryId: 2,
    name: "Pulled Pork Sandwich",
    price: "$9.99",
    image: "",
    variations: [
      { name: "Sweet Baby Ray's Sauce", selectedByDefault: true },
      { name: "Add Cold Slaw" },
      { name: "Vinager" },
    ],
  },
  {
    id: 10,
    categoryId: 2,
    name: "Cobb Salad",
    price: "$9.99",
    image: "",
    variations: [
      { name: "Pepperoni", selectedByDefault: true },
      { name: "Mushroom", selectedByDefault: true },
      { name: "Extra Cheese" },
      { name: "Bacon +$1.50" },
    ],
  },
  {
    id: 11,
    categoryId: 2,
    name: "Ceaser Salad",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 12,
    categoryId: 3,
    name: "Fountain Drink",
    price: "$9.99",
    image: "",
    variations: [
      { name: "Pepperoni", selectedByDefault: true },
      { name: "Mushroom", selectedByDefault: true },
      { name: "Extra Cheese" },
      { name: "Bacon +$1.50" },
    ],
  },
  {
    id: 13,
    categoryId: 3,
    name: "Lemonade",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 14,
    categoryId: 3,
    name: "Sweet Tea",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 15,
    categoryId: 3,
    name: "Unsweetened Tea",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 16,
    categoryId: 3,
    name: "Milkshake",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 17,
    categoryId: 4,
    name: "Green Tea",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 18,
    categoryId: 4,
    name: "Black Tea",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 19,
    categoryId: 4,
    name: "Coffee",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }],
  },
  {
    id: 20,
    categoryId: 4,
    name: "Expresso Shot",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 21,
    categoryId: 5,
    name: "Pabst Blue Ribbon",
    price: "$9.99",
    image: pabstSrc,
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 22,
    categoryId: 5,
    name: "Budweiser",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 23,
    categoryId: 5,
    name: "Busch",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 24,
    categoryId: 5,
    name: "Coors",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 25,
    categoryId: 5,
    name: "Sam Adams",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 26,
    categoryId: 5,
    name: "White Claw",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 27,
    categoryId: 5,
    name: "Mike's Hard Lemonade",
    price: "$9.99",
    image: "",
    variations: [{ name: "16 oz." }, { name: "24 oz." }, { name: "32 oz." }],
  },
  {
    id: 28,
    categoryId: 6,
    name: "T-Shirt",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }, { name: "X-Large" }, { name: "XX-Large" }],
  },
  {
    id: 29,
    categoryId: 6,
    name: "Tank Top",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }, { name: "X-Large" }, { name: "XX-Large" }],
  },
  {
    id: 30,
    categoryId: 6,
    name: "Hoodie",
    price: "$9.99",
    image: "",
    variations: [{ name: "Small" }, { name: "Medium" }, { name: "Large" }, { name: "X-Large" }, { name: "XX-Large" }],
  },
  {
    id: 31,
    categoryId: 6,
    name: "Hat",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 32,
    categoryId: 7,
    name: "Gift Card",
    price: "$9.99",
    image: "",
    variations: [{ name: "$50" }, { name: "$100" }, { name: "$200" }, { name: "$300" }, { name: "$500" }],
  },
  {
    id: 33,
    categoryId: 8,
    name: "Chicken Tenders",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 34,
    categoryId: 8,
    name: "Grilled Cheese",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 35,
    categoryId: 8,
    name: "Pizza Slice",
    price: "$9.99",
    image: pizzaSrc,
    variations: [],
  },
  {
    id: 36,
    categoryId: 8,
    name: "Macaroni and Cheese",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 37,
    categoryId: 8,
    name: "Fish Sticks",
    price: "$9.99",
    image: "",
    variations: [],
  },
  {
    id: 38,
    categoryId: 8,
    name: "Spaghetti",
    price: "$9.99",
    image: "",
    variations: [],
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
