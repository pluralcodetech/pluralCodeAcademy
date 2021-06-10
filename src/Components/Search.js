import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        <div class="input-group border px-3 py-2 w-25 rounded-pill" id="search">
            <input type="search" class="form-control border-0" placeholder="Search..."/>
            <button class="btn input-group-text border-0 bg-white" type="submit">
                <FiSearch/>
            </button>
        </div>
    )
}

export default Search
