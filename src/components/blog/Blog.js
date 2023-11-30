import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog_container">
      <div className="blog_card">
        <div className="blog_mini_card">
          <img
            src="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div className="blog_details">
           <div className="hj">
           <h3 className="summer">things do on your trip</h3>
            <button className="learnmore">learn more</button>
           </div>
          </div>
        </div>
        <div className="blog_mini_card">
          <img
            src="https://images.pexels.com/photos/2773511/pexels-photo-2773511.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div className="blog_details">
           <div className="hj">

            <h3 className="summer">Up to 70% Discount!</h3>
            <button className="learnmore">learn more</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
