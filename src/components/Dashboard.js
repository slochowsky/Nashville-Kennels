import React, { useState } from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)

    return (
        <div className="mainContainer">
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>
                        <LocationProvider>
                            <div className="searchContainer">
                                <SearchBar setTerms={setTerms} />
                                <SearchResults searchTerms={searchTerms} />
                            </div>
                            <div className="dataContainer">
                                <h2>Nashville Kennels</h2>
                                <small>Loving care when you're not there.</small>
                                <h3>Locations</h3>
                                <LocationList />
                                <h3>Animals</h3>
                                <AnimalList />
                                <h3>Customers</h3>
                                <CustomerList />
                                <h3>Employees</h3>
                                <EmployeeList />
                            </div>
                        </LocationProvider>
                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </div>
    )
}
