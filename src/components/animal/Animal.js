import React from "react"
import "./Animal.css"

export default ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <address className="animal__breed">Breed: {animal.breed}</address>
        <address className="animal__customer">Owner: {customer.name}</address>
        <address className="animal__location">Location: {location.name}</address>
    </section>
)