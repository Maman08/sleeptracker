import img2 from "../images/ShutEye-Daily-Sleep-Score-768x1325-removebg-preview.png";
import img3 from "../images/sleepalarm-removebg-preview.png";
import "./SleepTracker.css";
const Services = () => {
    return ( 
        <div>
            <div className="row">
                <div className="col-md-12 px-5">
                <h1 id="secrvices" style={{
                    color:"white",
                    
                }}>Services</h1> 
                </div>
            </div> 
            <div className="row py-2 ">
                <div className="col-md-6 text-center my-2">
                    <img  className="img-fluid mobimg" src={img2} alt="" />
                    <h3 className="my-2" style={{color:"white"}}>
                        <button style={{borderRadius:"5px",padding:"4px"}}>Sleep Insights</button>
                    </h3>
                </div>
                <div className="col-md-6 text-center my-2">
                    <img className="img-fluid mobimg" src={img3} alt="" />
                    <h3 className="my-2" style={{color:"white"}}>
                        <button style={{borderRadius:"5px",padding:"4px"}}>
                        Smart Alarm
                        </button>
                    </h3>
                </div>
            </div>  
        </div>
     );
}
 
export default Services;