import React, { useRef } from "react"

export const SearchBar = ({ setTerms }) => {

    const { terms } = useRef()

    return (
        <fieldset>
            <div className="form-group">
                <label htmlFor="searchTerms">Search:</label>
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="employeeNasearchTermsme"
                    ref={terms}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
        </fieldset>
    )
}