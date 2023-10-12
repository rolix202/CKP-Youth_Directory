import React from "react";
import "./cyonite_header.css"
import { images } from "../../constants";

function CyonitePageHeader() {

    const bg = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.header_background}) center/cover no-repeat`,
    }

    return (
        <section className="cyonite_header" style={bg}>
            <div className="cyonite_wrapper">
                <div className="cyonite_title">
                    <h1>CKP Cyonites</h1>
                    <p>"Discover the vibrant community of CKP Cyonites. Get to know the wonderful individuals who make up our community and explore their unique stories and contributions."</p>
                </div>
            </div>
        </section>
    )
}
export default CyonitePageHeader;