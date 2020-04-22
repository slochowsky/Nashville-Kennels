import React, { useContext, useRef } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Animal.css"

export default props => {
    const { locations } = useContext(LocationContext)
    const { addAnimal } = useContext(AnimalContext)

    const name = useRef()
    const location = useRef()
    const breed = useRef()


    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)
        const userId = parseInt(localStorage.getItem("kennel_customer"))
        // create a new animal object  
        // Make sure that the animal object has the customerId and locationId foreign keys on it.
        const newAnimalObj = {
            name: name.current.value,
            breed: breed.current.value,
            locationId: locationId,
            customerId: userId
        }
        console.log(newAnimalObj)
        // and save it to the API.
        addAnimal(newAnimalObj).then(props.toggler)
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Breed of Animal: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="animal breed"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="animalLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}