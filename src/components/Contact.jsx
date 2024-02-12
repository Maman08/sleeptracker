import "../components/Contact.css";
import img10 from "../images/salesman.png";
import img11 from "../images/help-desk.png";
import img12 from "../images/news-reporter.png";

const Contact = () => {
  return (
    <div className="container-fluid contactbg p-5 bg-dark">
      <div className="row p-5">
        <div className="col-md-12 text-center">
          <h3 className="contactush">Contact us</h3>
          <p className="uprpara">Get in touch and let us know how we can help.</p>
        </div>
      </div>
      <div className="row text-center justify-content-evenly p-3 ">
        <div className="col-md-3 card text-center p-3 col contactCard">
          <div className="contactimg">
            <img src={img10} alt="" />
          </div>
          <h4>Work &Sales</h4>
          <p>We'd love to talk about how we can work together</p>
          <a className="a" href="">Contact sales</a>
        </div>
        <div className="col-md-3 card text-center p-3 col contactCard">
          <div className="contactimg ">
            <img src={img11} alt="" />
          </div>
          <h4>Help & Support</h4>
          <p>We're here to help with any question or code</p>
          <a className="a" href="">Contact support</a>
        </div>
        <div className="col-md-3 card text-center p-3 col contactCard">
          <div className="contactimg">
            <img src={img12} alt="" />
          </div>
          <h4>Media Feature</h4>
          <p>Get Stripe news, info, and media resources and maore</p>
          <a className="a" href="">Visit newsroom</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
