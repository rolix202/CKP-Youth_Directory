import React from "react";
import { FaCircleUser } from "react-icons/fa6";

function Card(props) {
  return (
    <div className="col">
      <div className="card featured_card h-100">
        <div className="featured_image card-img-top">
          <img src={props.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <small className="card-title text-success"><b>{props.role} </b> </small>
          <div className="card-text">
            <div className="row">
              {/* <div className="col-md-2 pt-2 bg-primary">
                <FaCircleUser style={{ color: "red" }} />
              </div> */}
              <div className="col">
                <span className="user_icon"><FaCircleUser style={{ color: "red" }} /></span><span className="user_name"><b>{props.name} </b></span> 
              </div>
            </div>
          </div>
          <figcaption className="blockquote-footer mt-3">{props.quote}</figcaption>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-success">Read More</button>
        </div>
      </div>
    </div>
  );
}
export default Card;
