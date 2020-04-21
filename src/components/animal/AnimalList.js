import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    return (
        <div className="animals">
            {
                animals.map(animal => {
                    const clinic = locations.find(l => l.id === animal.locationId)
                    const owner = customers.find(c => c.id === animal.customerId)

                    return <Animal key={animal.id}
                        location={clinic}
                        customer={owner}
                        animal={animal} />
                    }
                    )}
                    </div>
    )
}