import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner_section ">
        <div className="row banner_parent container">
          <div className="col row-col-md-5 row-col-lg-5">
            <div>
              <div>
                <h3 className="text-white">Egestas faucibus est ac a pretium</h3>
                <h3 className="text-white">aliquam feugiat.</h3>
                <p className="text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                  cupiditate sequi non deleniti temporibus velit ipsum 
                </p>
                <button className="btn btn_text">JOIN NOW</button>
              </div>
            </div>
          </div>
          <col className="col row-col-md-7 row-col-lg-7"></col>
        </div>
      </div>
    );
};

export default Banner;