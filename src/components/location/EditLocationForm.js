import React, { useContext, useState } from "react"
import { LocationContext } from "../location/LocationProvider"



export const EditLocationForm = ({ location, toggleEdit }) => {
    const { updateLocation } = useContext(LocationContext)

    // Separate state variable to track the Employee as it is edited
    const [ updatedLocation, setLocation ] = useState(location)

    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const handleControlledInputChange = (event) => {
        const newLocation = Object.assign({}, updatedLocation)
        newLocation[event.target.name] = event.target.value
        setLocation(newLocation)
    }

    const editLocation = () => {
        const locationId = parseInt(updatedLocation.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            updateLocation({
                id: updatedLocation.id,
                name: updatedLocation.name,
                address: updatedLocation.address,
                locationId: locationId,
            })
                .then(toggleEdit)
        }
    }

    return (
        <form className="LocationForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Location name"
                        defaultValue={location.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address: </label>
                    <input type="text" name="address" required className="form-control"
                        placeholder="location Address"
                        defaultValue={location.address}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editLocation()
                }}>
                Save Updates
            </button>
        </form>
    )
}