import React from "react"
import "./Kennel.css"
import { LocationProvider } from "./location/LocationProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import LocationList from "./location/LocationList"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"
import AnimalSearch from "./animal/AnimalSearch"

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
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
        <h2>Animals</h2>
        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <AnimalSearch />
                    <AnimalList />
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>
    </>
)
