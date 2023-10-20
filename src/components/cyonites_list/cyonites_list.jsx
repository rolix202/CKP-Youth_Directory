import React from "react";
// import "./cyonites_list.css";
import { cyonites_info } from "../../Data";
import CyoniteCard from "./cyonites_card";


function CyonitesList() {


    function cyoniteCard(createCard) {
        return (
            <CyoniteCard
                key={createCard.id}
                image={createCard.img}
                name={createCard.name}
                skill={createCard.skill}
                birthday={createCard.birthday}
            />
        )
    }

    return (
        

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-4">

                {cyonites_info.slice(0, 8).map(cyoniteCard)}

            </div>

    );
}
export default CyonitesList;
