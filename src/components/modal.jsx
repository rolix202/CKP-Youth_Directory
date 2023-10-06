import React from "react";
import ModalForm from "./modalForm";


function Modal(){
    return (
        <div
              className="modal fade"
              id="modalForm"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="modalForm"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">Contact Developer</h3>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="close"
                    ></button>
                  </div>

                  <div className="modal-body text-start px-5">
                    <ModalForm />
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="Submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default Modal;