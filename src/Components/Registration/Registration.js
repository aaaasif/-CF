import React from 'react';
import logo6 from "./../../assets/football-website-image/Rectangle 2748.png";
import "./Registration.css"

const Registration = () => {
    return (
        <div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-2">
          <div className="col left-side">
            <div className="registered-body">
              <div className="">
                <h5 className="card-title">Registered intermediaries</h5>
                <div className="registred_text">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi ante quis vitae  quam
                  scelerisque consectetur in eu. Turpis euismod enim sit dictumst blandit.Vulputate
                  gravida ultricies dictum in integer nibh scelerisque vel.
                  </p>
                  <div className="registred_text_role">
                    {" "}
                    <div></div>{" "}
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit eaque fuga, commodi cumque suscipit ipsam veniam
                      laudantium explicabo? Reiciendis soluta
                    </p>
                  </div>
                  <div className="registred_text_role">
                    {" "}
                    <div></div>{" "}
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit eaque fuga, commodi cumque suscipit ipsam veniam
                      laudantium explicabo? Reiciendis soluta
                    </p>
                  </div>
                  <div className="registred_text_role">
                    {" "}
                    <div></div>{" "}
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugit eaque fuga, commodi cumque suscipit ipsam veniam
                      laudantium explicabo? Reiciendis soluta
                    </p>
                  </div>
                  <button className="btn btn_text_2">Join Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-img">
              <img className="img-fluid card-img-top pc_img" src={logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;