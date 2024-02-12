import img6 from "../images/insomnia.png";
import img7 from "../images/happy.png";
import img8 from "../images/sun.png";
import "../components/About.css";
import 'animate.css/animate.min.css';


const About = () => {
    return ( 
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center   bg-dark aboutContainer">
        <div className="row my-2 py-3">
          <div className="col-md-12 text-center ">
            <h1 className="text-center text-white h1">Sleep Tracker Health Impact by the Numbers</h1>
            <p  className="text-center my-4 text-white" style={{fontFamily:"sans-serif"}}>When using sleep tracker, participants reported a moderate to significant growth in sleep quality and mental well-being.
             </p>
            </div>
        </div>
        <div className="row justify-content-evenly text-center my-3 py-3">
          <div className="col-md-3 text-center threeCard "><img className="cardimg" src={img6} alt="" /><h5 className="text-center py-2 my-2 text-white">91%</h5> <p className="text-white" style={{fontFamily:"sans-serif", fontWeight:"500",fontSize:"18px"}}>Fall asleep and stay asleep longer</p> </div>
          <div className="col-md-3 text-center  threeCard"><img className="cardimg" src={img7} alt="" /><h5 className="text-center py-2 my-2 text-white">89%</h5> <p className="text-white" style={{fontFamily:"sans-serif" ,fontWeight:"500",fontSize:"18px"}}>Reduce stress as well as improve mood</p> </div>
          <div className="col-md-3 text-center threeCard "><img className="cardimg" src={img8} alt="" /><h5 className="text-center py-2 my-2 text-white">81%</h5> <p className="text-white" style={{fontFamily:"sans-serif", fontWeight:"500",fontSize:"18px"}}>Wake up refereshed and feel energetic</p> </div>
        </div>
       </div>
     );
}
 
export default About;