import React from "react"
import "./Customer.css"

export default ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">Name: {customer.name}</h3>
        <address className="customer__location">Address: {customer.address}</address>
    </section>
)