import img1 from "../images/sleepphone.png";
import Services from "./Sevices";
import SleepTracker from "./SleepTracker";
import Alarm from "./Alarm";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="container-fluid py-2"  style={{ backgroundColor: '#171717' }}>
        <div className="row">
          <div className="col-md-6 d-flex my-4 py-5 align-items-center flex-column" style={{ color: 'white' }}>
            <h1 className="my-5" style={{
              fontSize: "60px",
              textShadow: "4px 4px 4px #006AEC", 
               
            }}>A smart way to sleep</h1>
            <h6 style={{
              borderBottom: "10px double #006AEC",
              borderTop: "3px dashed #006AEC",
              borderLeft: "3px double #006AEC",
              borderRight: "3px double #006AEC",
              borderRadius:"15px",
              padding: "15px",
              boxShadow: "15px 18px 8px rgba(0, 106, 236, 0.2)",
              fontFamily:"sans-serif",
              paddingBottom:"19px",  
            }}>The personalized sleep app to help you relax and track sleep cycles.</h6>
            <h3 style={{
              fontFamily: "cursive",
              letterSpacing: "1px",
              wordSpacing: "4px",
            }} className="my-5 py-5 mx-5 texteffect"> "Embrace the night, track your sleep; a journey to better health begins with the rest you seek." </h3>
          </div>
          <div className="col-md-6">
            <img src={img1} alt="Sleep Phone Illustration" className="img-fluid" />
          </div>
        </div>
        <Services/>
        <SleepTracker/>
        <Alarm/>
      </div>
    </div>
  );
}

export default Home;




