import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import "./Kennel.css"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList/>
        </EmployeeProvider>
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList/>
        </CustomerProvider>
        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList/>
        </AnimalProvider>
    </>
)

// import React from "react"
// import Animal from "./animal/Animal"
// import Employee from "./employee/Employee"
// import Customer from "./customer/Customer"
// import Location from "./location/Location"
// import "./animal/Animal.css"
// import "./employee/Employee.css"
// import "./customer/Customer.css"
// import "./location/Location.css"

// export default () => (
//     <>
//         <h2>Nashville Kennels</h2>
//         <small>Loving care when you're not there.</small>

//         <address>
//             <div>Visit Us at the Nashville North Location</div>
//             <div>500 Puppy Way</div>
//         </address>

//         <h2>Animals</h2>
//         <article className="animals">
//             <Animal/>
//             <Animal/>
//             <Animal/>
//         </article>
//         <h2>Employees</h2>
//         <article className="employees">
//             <Employee/>
//             <Employee/>
//             <Employee/>
//         </article>
//         <h2>Locations</h2>
//         <article className="locations">
//             <Location/>
//             <Location/>
//             <Location/>
//         </article>
//         <h2>Customers</h2>
//         <article className="customers">
//             <Customer/>
//             <Customer/>
//             <Customer/>
//         </article>
//     </>
// )