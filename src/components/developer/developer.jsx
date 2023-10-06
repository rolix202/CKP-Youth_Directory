import React from "react";
import { images } from "../../constants"
import "./developer.css";
import { FaPhoneVolume, FaEnvelopeCircleCheck } from "react-icons/fa6";
import Modal from "../modal";

function Developer() {
    const dev_bg = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.developer_img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <section className="dev_section" style={dev_bg}>
            <div className="container">
                <div className="dev_intro">
                    <h1>Meet Our Web Developer</h1>
                    <p>Our website is <span>expertly crafted by a talented web developer</span> who is passionate about creating seamless online experiences. He ensure that our digital presence is not just functional but also visually appealing. Meet the driving force behind the scenes, making it all work seamlessly for you.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card" >
                            <div className="card-body img_developer">
                                <img src={images.roland_dev} alt="" className="dev_image" />
                            </div>
                        </div>
                        {/* <div className="img_developer">
                            
                        </div> */}
                    </div>
                    <div className="col-md-6">
                        <div className="dev_bio">
                            <h1>About Me</h1>
                            <h3><span className="aboutme_1stspan">I Am A</span><span className="aboutme_2ndspan">Web Developer</span> </h3>
                            <p>Hello there! My name is <span className="dev_bio_span1">Oodo Roland,</span> I'm a web developer with a passion for creating beautiful and functional online spaces. My focus is on helping businesses like yours succeed in the digital world
                            </p>
                            <p> I believe that a well-designed website can be a gateway to your brand's story, a place where your audience can truly connect with what you have to offer. My goal is to make your online presence not only visually appealing but also user-friendly, so your visitors feel right at home.
                            </p>
                            <blockquote className="dev_blockquote">
                                <p className="dev_bio_p_last">Let's work together to turn your ideas into a seamless online reality, where your business can thrive and grow organically. Your vision is my inspiration, and I'm here to bring it to life.
                                </p>
                            </blockquote>
                            
                        </div>
                        <div className="contact_dev">
                            <div className="row">
                                <div className="col-md-7">
                                <h1>Contact Details</h1>
                            <p><span><FaPhoneVolume /> </span> +2349050798489</p>
                            <p><span><FaEnvelopeCircleCheck/> </span> williamsroland147@gmail.com</p>
                                </div>
                                <div className="col-md-5">
                                    <div className="d-grid gap-2 h-100">
                                        <button type="button"  className="btn btn-success btn-lg send_msg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalForm">Send Message</button>
                                        <Modal />
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
export default Developer;