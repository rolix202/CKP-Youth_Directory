import React from "react";
import Header from "../../components/header";
import "./register.css"
import RegForm from "../../components/register_components/form";
import { images } from "../../constants";
import Footer from "../../components/footer";


function Register() {

    const bg = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.green_gradient}) center/cover no-repeat`,
    }

    return (
        <section className="register_section">
            <Header />
            <div className="register_title" style={bg}>
                <h1>Join <span className="register_span">CKP Cyon</span> Today!</h1>
                <p>Registration is a few clicks away.<br/> Join us and be a part of CKP Cyon's thriving community. <br/> Connect, share, and make a difference. <br/> <span className="register_getStarted">Let's get started!</span></p>
            </div>

            <div className="register_body container w-75">
                <RegForm />
            </div>

            <Footer />
        </section>
    )
}
export default Register;