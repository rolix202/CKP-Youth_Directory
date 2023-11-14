import React from "react";
import "../assets/css/hero.css";
import { images } from "../constants";
import { Link } from "react-router-dom";

function Hero() {
  const bg_hero = {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${images.ckp_royal}) center/cover no-repeat`,
    position: "relative",
    top: "70px",
  };
  
  return (
    <section className="hero_wrapper" style={bg_hero}>
        <div className="container hero_section ">
          <div className="content text-cefnter">
            <h1 className="hero_h1">
              Empowering <span className="youth_span">Youth,</span> Building
              Faith!
            </h1>
            <p className="hero_p">
              Join us as we embark on an exciting adventure where young hearts
              come together to <span className="explore">explore,</span>{" "}
              <span className="learn">learn,</span> and{" "}
              <span className="grow">grow</span>. 🌱 Our youth community is a
              place where friendships are forged, dreams are nurtured, and faith
              is deepened.
            </p>

            <div className="d-grid gap-2 d-md-block">
              <Link to="/cyonites" className="btn btn-success btn-lg mt-3 view_cbtn">View CKP Cyonites</Link>
              {/* <button className="btn btn-success btn-lg mt-3 view_cbtn">
                View CKP Cyonites
              </button> */}
            </div>

            {/* <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div> */}
            
          </div>
        </div>
       
      <div className="custom-shape-divider-bottom-1695084398">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
    </section>
  );
}

export default Hero;
