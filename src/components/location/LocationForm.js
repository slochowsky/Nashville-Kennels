import React, { useContext, useRef } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export default props => {
    const { addLocation } = useContext(LocationContext)

    const name = useRef()
    const address = useRef()


    const constructNewLocation = () => {
        // create a new animal object  
        const newLocationObj = {
            name: name.current.value,
            address: address.current.value,
        }
        console.log(newLocationObj)
        // and save it to the API.
        addLocation(newLocationObj).then(props.toggler)
    }

    return (
        <form className="locationForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Location name: </label>
                    <input
                        type="text"
                        id="location Name"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Location name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">address of Location: </label>
                    <input
                        type="text"
                        id="locationAddress"
                        ref={address}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Location address"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewLocation()
                    }
                }
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}