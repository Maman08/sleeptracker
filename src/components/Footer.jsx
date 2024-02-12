import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" text-white py-4" style={{background:"black"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase mb-3">Subscribe to get updates</h5>
            <div className="input-group mb-3 text-center ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email here..."
              />
              <button className="btn btn-purple text-white " style={{background:"#0c487f",borderRadius:"0 20px 20px 0",marginRight:"45px"}} type="button">
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <div className="col-md-4 border-start border-end text-center">
            <h5 className="text-uppercase mb-3">Tech Videos</h5>
            <p>All rights are reserved</p>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-uppercase mb-3">Social Media</h5>
            <a style={{textDecoration:"none", }} href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=12127s" className="btn btn-link text-white">
              <h5 style={{color:"#0c487f"}}>YouTube</h5>
            </a>
            <a style={{textDecoration:"none", }}  href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=12127s" className="btn btn-link text-white">
            <h5 style={{color:"#0c487f"}}>Instagram</h5>
            </a>
            <a style={{textDecoration:"none", }}  href="https://www.youtube.com/watch?v=b50zSyLiCYQ&t=12127s" className="btn btn-link text-white">
            <h5 style={{color:"#0c487f"}}>Github</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
