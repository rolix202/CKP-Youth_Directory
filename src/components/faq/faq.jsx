import React from "react";
import FaqHeader from "./faq_header";
import FaqList from "./faq_list";
import { accordion } from "../../Data";

function Faq() {

    // console.log(accordion);

    function accordionList(createAccordion, index){
        return (
            <div className="container mt-3 accordion" id="accordionPanelsStayOpenExample" key={index}>
                <FaqList 
                id={createAccordion.id}
                title = {createAccordion.title}
                body = {createAccordion.body}
                isFirst = {index == 0}
            />
            </div>
        )
    }

    return (
        <section className="faq_section bg-primary bg-opacity-75 pb-5">
            <FaqHeader />

            {accordion.map(accordionList)}
            
        </section>
    )
}
export default Faq;