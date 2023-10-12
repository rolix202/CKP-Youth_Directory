import React, { useState } from "react";
// import CyonitesList from "../cyonites_list/cyonites_list";
import CyonitePageHeader from "./cyonite_header";
import CyoniteFilter from "./cyonite_filter";

function CyonitePageMain() {
    // const [search, setSearch] = useState("");

    // function handleChange(e){
    //     const query =
    // }

    return (
        <section className="section_main">
            <CyonitePageHeader />
            <div className="container mb-4">
                <CyoniteFilter />
            </div>
        </section>
    );
}
export default CyonitePageMain;
