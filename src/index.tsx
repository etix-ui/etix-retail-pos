import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { OrderHistoryPage } from "./prototypeDesign/OrderHistoryPage"
import { SellPage } from "./prototypeDesign/SellPage"
import { SettingsPage } from "./prototypeDesign/SettingsPage"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SellPage} />
        <Route exact path="/orderHistory" component={OrderHistoryPage} />
        <Route exact path="/settings" component={SettingsPage} />
      </Switch>
    </BrowserRouter>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
