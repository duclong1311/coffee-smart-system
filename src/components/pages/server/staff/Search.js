import { useState } from "react";

const Search = ({ searchQuery, setSearchQuery }) => {

    return (
        <>
            <div className="mb-2">
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="search"
                    placeholder="Bạc xỉu,..."
                    className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm h-9 focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all hover:ring-amber-600 text-gray-700"
                />
            </div>
        </>
    )
}

export default Search;