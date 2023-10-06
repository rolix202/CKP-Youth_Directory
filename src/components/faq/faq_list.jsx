import React from "react";

function FaqList(props) {
    // console.log(props.isFirst);
    const collapseID = `panelsStayOpen-${props.id}`;
    // console.log(collapseID);

    return (
        
        <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`${!props.isFirst ? "collapsed" : ""} accordion-button fw-bold fs-5`} type="button" data-bs-toggle="collapse" data-bs-target= {`#${collapseID}`}
                        aria-expanded="true" aria-controls={collapseID}>
                            {props.title}
                        </button>
                    </h2>
                    <div id={collapseID} className={`${props.isFirst ? "show" : " "} accordion-collapse collapse`} >
                        <div className="accordion-body">
                            {props.body}
                        </div>
                    </div>
                </div>
        
        

    
        
    )
}
export default FaqList;