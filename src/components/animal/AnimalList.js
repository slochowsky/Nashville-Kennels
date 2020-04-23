import React, { useContext, useState, useEffect } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import AnimalForm from "./AnimalForm"
import "./Animal.css"


export default () => {
    const { animals, searchTerm, setAnimals } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    useEffect(() => {
        const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerm))
        setFiltered(subset)
    }, [searchTerm])

    useEffect(() => {
        setFiltered(animals)
    }, [animals])

    return (
        <>
            <Button onClick={() => {
                // check if the user is authenticated
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }}>Make Appointment</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        New Animal
                    </ModalHeader>
                    <ModalBody>
                        <AnimalForm toggler={toggle} />
                    </ModalBody>
                </Modal>
            
        <div className="animals">
            {
                filteredAnimals.map(animal => {
                    const clinic = locations.find(l => l.id === animal.locationId)
                    const owner = customers.find(c => c.id === animal.customerId)

                    return <Animal key={animal.id}
                        location={clinic}
                        customer={owner}
                        animal={animal} />
                    }
                    )}
                    </div>
</>
    )
}