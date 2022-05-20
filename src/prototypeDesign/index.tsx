import React from "react"
import ReactDOM from "react-dom"
import { OrderHistoryPage } from "./OrderHistoryPage"
import { SellPage } from "./SellPage"
import { SettingsPage } from "./SettingsPage"
import { HashRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SellPage} />
        <Route exact path="/orderHistory" component={OrderHistoryPage} />
        <Route exact path="/settings" component={SettingsPage} />
      </Switch>
    </HashRouter>
  </>,

  document.getElementById("root")
)
