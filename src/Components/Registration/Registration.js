import React from 'react';
import logo6 from "./../../assets/football-website-image/Rectangle 2748.png";
import "./Registration.css"

const Registration = () => {
    return (
        <div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 g-2">
          <div className="col left-side">
            <div className="card">
              <div className="registered-body">
                <h5 className="card-title">Registered intermediaries</h5>
                <div className="registred_text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur soluta, cum praesentium, optio fugit ad eveniet
                    animi cumque adipisci accusamus nam quas saepe in. Corrupti
                    natus eaque dolores fugiat voluptatibus? Dignissimos ex
                    sapiente ipsa facilis illum, cupiditate est eos? Sunt voluptas
                    esse numquam, exercitationem minus pariatur.
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
            <div className="card">
              <img className="img-fluid card-img-top pc_img" src={logo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;