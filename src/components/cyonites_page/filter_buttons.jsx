import React, { useState } from "react";

function FilterButtons({ navMenus, filterButtons }){

    const [active, setActive] = useState(0)

    return (
        <section className="filter_button-section">    
            {navMenus.map((item, index) => <button type="button" key={index} className={`${active === index ? 'bg-success text-white' : ''} btn btn-outline-success mx-3`} 
            onClick={() => {
                setActive(index); 
                filterButtons(item)}}>{item} </button>)}
        </section>
    )
}
export default FilterButtons;