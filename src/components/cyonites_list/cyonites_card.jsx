import React from "react";
import { images } from "../../constants";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

function CyoniteCard(props) {
    // console.log(props);
    const bg = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.flower})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center", 
        // height: "100%", 
    }
    return (
        <div className="col">
            <div className="card h-100">
                <div className="img_wrapper p-4" style={bg}>
                    <img
                        src={props.image}
                        className="card-img-top cyonites_img"
                        alt="..."
                    />
                </div>

                <div className="card-body cyonite_info">
                    <h4 className="card-title cyonite_name"><span>Name:</span> {props.name} </h4>
                    <p className="card-text text-success fw-bold cyonite_skill"><span>Skill:</span>{props.skill} </p>
                    <p className="card-text cyonite_birth fw-bold"><span>BirthDay:</span> {props.birthday} </p>
                </div>

                <div className="card-footer">
                    <div className="cyonite_socials">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaXTwitter />
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>

                    </div>
                    </div>
            </div>
        </div>
    )
}
export default CyoniteCard;