import React from "react";
import Modal from "../../../components/modal";

function DeveloperForm() {
  const sectionStyle = {
    marginTop: "100px",
  };

  return (
    <section className="container-fluid bg-body-secondary" style={sectionStyle}>
      <div className="container p-0">
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <div className="container-fluid py-5 text-center">
            <h1 className="display-6 fw-bold">
              Have Questions or Feedback? <span className="text-success">Let's Connect!</span>
            </h1>
            <p className="col-md-8 fs-5 mx-auto mt-4">
              Our website was carefully crafted to serve you better. If you have
              any questions, suggestions, or technical inquiries, we'd love to
              hear from you. Simply reach out to our website developer using the
              contact form below.
            </p>

            <button
              type="button"
              className="btn btn-success btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#modalForm"
            >
              Contact Us
            </button>
            {/* modall */}
            <Modal />
          </div>
        </div>
      </div>
    </section>
  );
}
export default DeveloperForm;
