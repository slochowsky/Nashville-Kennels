import "./Employee.css"
import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EditEmployeeForm } from "./EditEmployeeForm"
import { EmployeeContext } from "./EmployeeProvider"


export default (props) => {

    const { fireEmployee } = useContext(EmployeeContext)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)


    return (
        <>
            <section className="employee">
                <h3 className="employee__name">Name: {props.employee.name}</h3>
                <address className="employee__Address">Address: {props.employee.address}</address>
                <address className="employee__location">Location: {props.location.name}</address>
                <Button color="info" onClick={() => {
                    toggleEdit()
                }}>Edit</Button>
                <Button color="danger" onClick={() => {
                    fireEmployee(props.employee.id)
                }}>Delete</Button>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        {props.employee.name}
                    </ModalHeader>
                    <ModalBody>
                        <EditEmployeeForm key={props.employee.id} toggleEdit={toggleEdit} employee={props.employee} />
                    </ModalBody>
                </Modal>
            </section>
        </>
    )
}