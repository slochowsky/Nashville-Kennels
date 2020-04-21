import React from "react"
import Dashboard from "./Dashboard"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./Kennel.css"

export default () => (
    localStorage.getItem("kennel_customer") ? <Dashboard /> : <Auth />
)