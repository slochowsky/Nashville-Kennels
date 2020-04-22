import React, { useState, useEffect } from "react"

export const AnimalContext = React.createContext()


/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
    // animals = data
    // setAnimals = function that React created, so we can use it to set state of animals
    const [animals, setAnimals] = useState([])
    const [searchTerm, setSearchTerm, releaseAnimal, updateAnimal] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
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
        Load all animals when the component is initialized. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(
        () => {
            getAnimals()
        },
        []
    )

    /*
        Watching the state of animals, console.logs when the state has changed
    */
    useEffect(
        () => {
            console.log("****  ANIMAL APPLICATION STATE CHANGED  ****")
        },
        [animals]
    )


    return (
        <AnimalContext.Provider value={
            {
                animals, addAnimal, releaseAnimal,
                updateAnimal, setSearchTerm, searchTerm,
                setAnimals
            }
        }>
            {props.children}
        </AnimalContext.Provider>
    )
}