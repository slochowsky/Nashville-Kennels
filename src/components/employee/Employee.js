import React from "react"
import "./Employee.css"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">Name: {employee.name}</h3>
        <address className="employee__location">Location: {location.name}</address>
        <address className="employee__location">Location Address: {location.address}</address>
    </section>
)