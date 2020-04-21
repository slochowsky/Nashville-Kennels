import React from "react"
import "./Location.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">Name: {location.name}</h3>
        <address className="location__address">Address: {location.address}</address>
    </section>
)