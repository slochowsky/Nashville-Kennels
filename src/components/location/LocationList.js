import React, { useContext, useState } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Location.css"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import LocationForm from "./LocationForm"


export default () => {
    const { locations } = useContext(LocationContext)

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
            }}>Add Location</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>
                        New Animal
                    </ModalHeader>
                    <ModalBody>
                        <LocationForm toggler={toggle} />
                    </ModalBody>
                </Modal>
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
        </>
    )
}