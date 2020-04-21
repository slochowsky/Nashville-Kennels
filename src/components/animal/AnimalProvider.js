import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const AnimalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimals = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        console.log("****  ANIMALS APPLICATION STATE CHANGED  ****", animals)
    }, [animals])

    return (
        <AnimalContext.Provider value={{
            animals, addAnimals
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}