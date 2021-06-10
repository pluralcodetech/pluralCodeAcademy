import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        // <div class="input-group border px-3 py-2  rounded-pill" id="search">
        //     <input type="search" class="form-control border-0 bg-transparent" placeholder="Search..."/>
        //     <button class="btn input-group-text border-0 bg-transparent" type="submit">
        //         <FiSearch/>
        //     </button>
        // </div>
        <form class="app-search">
        <div class="app-search-box dropdown">
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Search..." id="top-search"/>
                <button class="btn input-group-text" type="submit">
                <FiSearch/>
                </button>
            </div>
        </div>
    </form>
    )
}

export default Search
