import React, { useState } from "react";
import "./cyonite_filter.css";
import { cyonites_info } from "../../Data";
import CyoniteCard from "../cyonites_list/cyonites_card";

import { FaSearch } from "react-icons/fa";
import FilterButtons from "./filter_buttons";


const navMenus = ["All", ...new Set(cyonites_info.map((item) => item.station))];
// console.log(navMenus);

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

  function filterButtons(station){
    if (station === "All"){
       setFilteredItems(cyonites_info)
    }
    else{
        const letsFilter = cyonites_info.filter((item) => item.station === station);
        setFilteredItems(letsFilter)
    }
    
  }

  return (
    <section className="cyonite_filter container">
        
      <nav className="navbar search_section">
        <form action="" className="d-flex form-group has-search" role="search">
        <FaSearch className="form-control-feedback"/>
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search By Name"
            aria-label="Search"
            value={query}
            onChange={handleChange}
          />
        </form>
        <FilterButtons 
            navMenus={navMenus}
            filterButtons={filterButtons}
        />

        
      </nav>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-2">

        {filteredItems.length === 0 ? ("No Cyonite found") : (
            filteredItems.map((item, index) => (
                <CyoniteCard
                  key={index}
                  image={item.img}
                  name={item.name}
                  skill={item.skill}
                  birthday={item.birthday}
                  station={item.station}
                />
              ))
        )}
       
      </div>
    </section>
  );
}

export default CyoniteFilter;
