import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

interface Order {
  id: number
  date: string
  number: number
  name: string
  total: string
  paymentMethod: string
}

const orders: Order[] = [
  {
    id: 1,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
  {
    id: 2,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
  {
    id: 3,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
  {
    id: 4,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
  {
    id: 5,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
  {
    id: 6,
    date: "04/15/22/ 08:56 PM",
    number: 123456,
    name: "Fred Horfelcheez",
    total: "$58.00",
    paymentMethod: "RFID Cashless",
  },
]

export function OrderHistoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Date</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell>Purchaser Name</TableCell>
            <TableCell>Order Total</TableCell>
            <TableCell>Payment Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => {
            return (
              <TableRow key={order.number} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {order.date}
                </TableCell>
                <TableCell>{order.number}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
