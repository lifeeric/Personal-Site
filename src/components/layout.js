import React from "react"
import Navigation from "./navigation/navigation.component";

import "./layout.scss"

const Layout = props => {
  return (
    <div className="body">
      <Navigation />
      {props.children}
    </div>
  )
}

export default Layout;