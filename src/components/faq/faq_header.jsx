import React from "react";
import { images } from "../../constants";

function FaqHeader(){
    const faq_bg = {
        background: `url(${images.faq})`,
        padding: "20px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundPosition: "center",
    }
    return(
        <section className="faq_header" style={faq_bg}>
            <div className="container faq_head text-white">
            <h1>HOW IT WORKS</h1>
            </div>
        </section>
    )
}
export default FaqHeader;