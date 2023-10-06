import React from "react";

function ModalForm() {
    return (
        <form className="row g-3">
            <div className="col-12">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col-12">
                <label className="form-label">Email:</label>
                <input type="email" className="form-control" />
            </div>
            <div className="col-12">
                <label className="form-label">Subject:</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="col-12">
                <label className="form-label">Message:</label>
                <textarea className="form-control" name="" id="" rows="3"></textarea>
            </div>
        </form>
    )
}
export default ModalForm;