import React from 'react';
import "./Blog.css"
import logo5 from './../../assets/football-website-image/Group 1000001769.png';
import logo4 from './../../assets/football-website-image/Group 1000001770.png';
import logo3 from './../../assets/football-website-image/Group 1000001768.png';

const Blog = () => {
    return (
        <section className="blog_section">
        <div className="container blog-body">
          <div className="row">
            <div className="col row-col-sm-12 row-col-md-6 row-col-lg-6 mt-3">
              <div className="h-100 mt-5 blog-text">
                <h1>Blogs</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum bibendum id purus fermentum dolor cras. Facilisi pretium egestas cras iaculis proin id adipiscing. 
                </p>
                <button className="btn btn_text-2">See All</button>
              </div>
            </div>
            <div className="col row-col-sm-12 row-col-md-6 row-col-lg-6 mt-3">
              <div className="row">
                <div className="col row-col-sm-6 row-col-md-6 row-col-lg-6">
                  <div className="card h-100">
                      <div className="card1">
                        <img className="img-fluid imgs" src={logo5} alt="" />
                      </div>
                      <div className="card2 mt-3">
                        <img className="img-fluid imgs" src={logo4} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="col row-col-sm-6 row-col-md-6 row-col-lg-6">
                    <div className="card h-100">
                      <img className="gallery " src={logo3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
};

export default Blog;