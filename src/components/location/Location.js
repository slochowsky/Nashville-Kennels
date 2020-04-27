import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EditLocationForm } from "./EditLocationForm"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export default (props) => {

    const { removeLocation } = useContext(LocationContext)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)



    return (
        <>
            <section className="location">
                <h3 className="location__name">Name: {props.location.name}</h3>
                <address className="location__address">Address: {props.location.address}</address>
                <Button color="info" onClick={() => {
                    toggleEdit()
                }}>Edit</Button>
                <Button color="danger" onClick={() => {
                    removeLocation(props.location.id)
                }}>Delete</Button>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        {props.location.name}
                    </ModalHeader>
                    <ModalBody>
                        <EditLocationForm key={props.location.id} toggleEdit={toggleEdit} location={props.location} />
                    </ModalBody>
                </Modal>
            </section>
        </>
    )
}