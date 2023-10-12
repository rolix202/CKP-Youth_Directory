import React, { useState } from "react";
import "./cyonite_filter.css";
import { cyonites_info } from "../../Data";
import CyoniteCard from "../cyonites_list/cyonites_card";

function CyoniteFilter() {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(cyonites_info);

    // console.log(query);

    function handleChange(e) {
        const searchInput = e.target.value;
        setQuery(searchInput);

        // Filter the data based on the search query
        const filtered = cyonites_info.filter((cyonite) => {
            return cyonite.name.toLowerCase().includes(searchInput.toLowerCase());
        });

        setFilteredItems(filtered);
    }

    return (
        <section className="cyonite_filter container">
            <nav className="navbar">
                <form action="" className="d-flex" role="search">
                    <input
                        type="search"
                        className="form-control me-2"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={handleChange}
                    />
                </form>
            </nav>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">
                {filteredItems.map((item, index) => (
                    <CyoniteCard
                        key={index}
                        image={item.img}
                        name={item.name}
                        skill={item.skill}
                        birthday={item.birthday}
                    />
                ))}
            </div>

        </section>
    );
}

export default CyoniteFilter;
