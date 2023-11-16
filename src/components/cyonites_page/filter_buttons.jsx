import React, { useState } from "react";

function FilterButtons({ navMenus, filterButtons }) {
    const [active, setActive] = useState(0);

    return (
        <section className="filter_button-section">
            {/* {navMenus.map((item, index) => <button type="button" key={index} className={`${active === index ? 'bg-success text-white' : ''} btn btn-outline-success me-3`}
                onClick={() => {
                    setActive(index);
                    filterButtons(item)
                }}>{item} </button>)} */}

            <p class="d-inline-flex gap-1">
                {navMenus.map((item, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className={`${active === index ? "bg-success text-white" : ""
                                } btn btn-outline-success`}
                            onClick={() => {
                                setActive(index);
                                filterButtons(item);
                            }}
                        >
                            {item}{" "}
                        </button>
                    );
                })}
            </p>
        </section>
    );
}
export default FilterButtons;
