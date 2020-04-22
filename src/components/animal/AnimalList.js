import React, { useContext, useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"
import AnimalForm from "./AnimalForm"
import "./Animal.css"


export default () => {
    const { animals } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

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
            <div className="animals">
                {
                    animals.map(ani => {
                        const matchingLocation = locations.find(loc => loc.id === ani.locationId)
                        const matchingCustomer = customers.find(customer => customer.id === ani.customerId)

                        return <Animal key={ani.id} animal={ani}
                            customer={matchingCustomer}
                            location={matchingLocation} />
                    })
                }
            </div>
                    <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        New Animal
                    </ModalHeader>
                    <ModalBody>
                        <AnimalForm toggler={toggle} />
                    </ModalBody>
                </Modal>
</>
    )
}