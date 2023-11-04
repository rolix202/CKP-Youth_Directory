import React, { useRef, useState } from "react";
import { FaUser, FaAddressBook, FaPhone, FaChurch, FaCalendarDays, FaUserGear, FaCircleUser, FaKey, FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./form.css"

function RegForm() {
    const [formDetails, setFormDetails] = useState({
        fname: "",
        lname: "",
        address: "",
        phone: "",
        password: "",
        confirmPass: "",
        station: "",
        DOB: "",
        skill: "",
        facebook: "",
        twitter: "",
        instagram: "",
    })
    const [profileImage, setProfileImage] = useState(null);
    const [imageURL, setImageURL] = useState("");

    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
    const cloud_name = import.meta.env.VITE_CLOUD_NAME

    // console.log(formDetails);
    // console.log(formDetails.station);
    // console.log(formDetails.DOB);
    // console.log(profileImage);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormDetails(prevFormDetails => {
            return {
                ...prevFormDetails,
                [name]: value
            }
        })
    }

    function handleImageUpload(e) {
        setProfileImage(e.target.files[0])

    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formDetails.password === formDetails.confirmPass) {

            if (profileImage && (profileImage.type === "image/png" || profileImage.type === "image/jpeg" || profileImage.type === "image/jpg")) {
                const image = new FormData();
                image.append("file", profileImage);
                image.append("cloud_name", cloud_name);
                image.append("upload_preset", upload_preset);

                fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                    method: "post",
                    body: image,
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setImageURL(data.url.toString());

                        console.log("Image uploaded successfully");
                        console.log("Image URL:", data.url);
                        console.log("Form Data:", formDetails);

                        // Reset the form by setting formDetails back to an empty object
                    setFormDetails({
                        fname: "",
                        lname: "",
                        address: "",
                        phone: "",
                        password: "",
                        confirmPass: "",
                        station: "",
                        DOB: "",
                        skill: "",
                        facebook: "",
                        twitter: "",
                        instagram: "",
                    });

                    // Clear the selected profile image
                    setProfileImage("");
                    })
                    .catch((error) => {
                        console.error("Error uploading the image:", error);
                    })
            }
        }
        else {
            console.log("Passwords do not match");
        }

    }



    return (
        <section className="regform">
            <form action="" onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label"><span><FaUser /> </span> First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your first name ..."
                            id="fname"
                            name="fname"
                            value={formDetails.fname}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col md-6">
                        <label htmlFor="lname" className="form-label"><span><FaUser /> </span> Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your last name ..."
                            id="lname"
                            name="lname"
                            value={formDetails.lname}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label"><span><FaAddressBook /> </span> Address:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your Address ..."
                            id="address"
                            name="address"
                            value={formDetails.address}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label"><span><FaPhone /> </span> Phone:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your Phone No ..."
                            id="phone"
                            name="phone"
                            value={formDetails.phone}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-lable"><span><FaKey /> </span> Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Type your password ..."
                            name="password"
                            value={formDetails.password}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="confirmPassword" className="form-lable"><span><FaKey /> </span> Confirm Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password ..."
                            name="confirmPass"
                            value={formDetails.confirmPass}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="station" className="form-label"><span><FaChurch /> </span> Station:</label>

                        <select
                            id="station"
                            className="form-select"
                            name="station"
                            value={formDetails.station}
                            onChange={handleChange}
                            required>
                            <option disabled value="" className="dummyOption">Choose Station ...</option>
                            <option value="St. Michael's Station">St. Michael's Station</option>
                            <option value="St. Thomas Station">St. Thomas Station</option>
                            <option value="Immaculate Heart Station">Immaculate Heart Station</option>
                        </select>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="DateOfBirth" className="form-label"><span><FaCalendarDays /> </span> Date of Birth:</label>
                        <input
                            type="date"
                            className="form-control"
                            name="DOB"
                            value={formDetails.DOB}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="skill" className="form-label"><span><FaUserGear /> </span> Skill:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your Skill or what you do ..."
                            name="skill"
                            value={formDetails.skill}
                            onChange={handleChange}
                            required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="facebook" className="form-label"><span><FaFacebook /> </span>Facebook Link:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your facebook link here ..."
                            name="facebook"
                            value={formDetails.facebook}
                            onChange={handleChange} />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="twitter" className="form-label"><span><FaXTwitter /> </span>Twitter Link:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your twitter link here ..."
                            name="twitter"
                            value={formDetails.twitter}
                            onChange={handleChange} />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="instagram" className="form-label"><span><FaInstagram /> </span>Instagram Link:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your instagram link here ..."
                            name="instagram"
                            value={formDetails.instagram}
                            onChange={handleChange} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="profilePix" className="form-label"><span><FaCircleUser /> </span> Profile Picture:</label>
                        <input
                            type="file" accept="image/png, image/jpeg, image/jpg"
                            className="form-control"
                            name="profilePix"
                            onChange={handleImageUpload}
                            id="" />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-success">Register</button>
                    </div>

                </div>
            </form>


        </section>
    )
}

export default RegForm;