import React, { useState } from "react";

function ModalForm() {
    const [formValues, setFormValues] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })

    // console.log(formValues);

    function handleChange(e){
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    function formSubmit(e){
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form className="row g-3" onSubmit={formSubmit}>
            <div className="col-12">
                <label htmlFor="name" className="form-label">Name:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    name="fullname"
                    value={formValues.fullname}
                    onChange={handleChange}/>
            </div>
            <div className="col-12">
                <label htmlFor="email" className="form-label">Email:</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}/>
            </div>
            <div className="col-12">
                <label htmlFor="subject" className="form-label">Subject:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}/>
            </div>
            <div className="col-12">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea 
                    className="form-control" 
                    name="message" 
                    value={formValues.message}
                    onChange={handleChange}
                    id="message" 
                    rows="3" />
            </div>
            <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
        </form>
    )
}
export default ModalForm;