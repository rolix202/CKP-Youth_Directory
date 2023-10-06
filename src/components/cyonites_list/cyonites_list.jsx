import React from "react";
import "./cyonites_list.css";
import { cyonites_info } from "../../Data";
import CyoniteCard from "./cyonites_card";
import { FaArrowRightLong } from "react-icons/fa6";


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
        <section className="section_cyonites container">
            <div className="section_header">
                <div className="featured_h1 p-3">
                    <h1 className="text-center">CKP CYONITES</h1>
                </div>
                <h3 className="text-center featured_h3">
                    Meet the CKP Cyonite: Our Vibrant Community
                </h3>
                <p className="text-center mx-auto pt-3">
                    A diverse group of passionate individuals united by faith, community, and a shared vision. As active members of our church, they bring a unique blend of talents, dedication, and youthful energy that enriches our congregation.
                </p>
            </div>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">

                {cyonites_info.map(cyoniteCard)}

            </div>

            <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button className="btn btn-success" type="button">More Cyonites <FaArrowRightLong/> </button>
            </div>
        </section>
    );
}
export default CyonitesList;
