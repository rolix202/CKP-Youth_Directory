import React from "react";
import { FaUser, FaAddressBook, FaPhone, FaChurch, FaCalendarDays, FaUserGear, FaCircleUser } from "react-icons/fa6";
import "./form.css"

function RegForm() {
    return (
        <section className="regform">
            <form action="">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="fname" className="form-label"><span><FaUser/> </span> First Name:</label>
                        <input type="text" className="form-control" id="fname" required />
                    </div>
                    <div className="col md-6">
                        <label htmlFor="lname" className="form-label"><span><FaUser /> </span> Last Name:</label>
                        <input type="text" className="form-control" id="lname" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label"><span><FaAddressBook /> </span> Address:</label>
                        <input type="text" className="form-control" id="address" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label"><span><FaPhone /> </span> Phone:</label>
                        <input type="text" className="form-control" id="phone" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="station" className="form-label"><span><FaChurch /> </span> Station:</label>
                        <select id="station" className="form-select" required>
                            <option selected disabled value="">Choose Station ...</option>
                            <option>St. Michael's Station</option>
                            <option>St. Thomas Station</option>
                            <option>Immaculate Heart Station</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="DateOfBirth" className="form-label"><span><FaCalendarDays /> </span> Date of Birth:</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="skill" className="form-label"><span><FaUserGear /> </span> Skill:</label>
                        <input type="text" className="form-control" required />
                    </div>

                    <div className="col-12">
                        <label htmlFor="profilePix" className="form-label"><span><FaCircleUser /> </span> Profile Picture:</label>
                        <input type="file" className="form-control" name="" id="" required />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-success">Register</button>
                    </div>

                </div>
            </form>


        </section>
    )
}
export default RegForm;