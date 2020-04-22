import React from "react"
import "./Employee.css"

export default ( props ) => (
    <section className="employee">
        <h3 className="employee__name">Name: {props.employee.name}</h3>
        <address className="employee__Address">Address: {props.employee.address}</address>
        <address className="employee__location">Location: {props.location.name}</address>
    </section>
)