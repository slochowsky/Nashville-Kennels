import React from "react"
import "./Employee.css"

export default ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">Name: {employee.name}</h3>
        <address className="employee__location">Location: {employee.locationId}</address>
    </section>
)