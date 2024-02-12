import React, { useState, useEffect } from 'react';
import alarmImage from "../images/alarm.png";
import alarmGif from "../images/alarm.gif";
import alarmAudio from "../images/mixkit-facility-alarm-sound-999.wav";
import "../components/Alarm.css";
const Alarm = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date();
      setCurrentTime(time.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setAlarm = () => {
    if (hours === '' || minutes === '') {
      alert("Please enter both minutes and seconds");
    } else {
      setAlarmTime(`${hours}:${minutes}:00`);
    }
  };

  useEffect(() => {
    const alarmClock = setInterval(() => {
      const time = new Date();
      const currentHours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
      const currentMinutes = time.getMinutes();

      const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);

      if (currentHours === alarmHours && currentMinutes === alarmMinutes) {
        clearInterval(alarmClock);
        document.getElementById("alarm_gif").src = alarmGif;
        document.getElementById("alarmAudio").play();
        
      }
    }, 1000);

    return () => clearInterval(alarmClock);
  }, [alarmTime]);

  return (
    <div>
        <div className="row my-5 py-5" style={{color:"white"}}>
            <div className="col-md-11 mx-3 px-3">
                <h1 id='setalarm' className='mx-3'>Set Your Alarm</h1>
                <div className="row justify-content-center text-center py-2 my-2">
                    <div className="col-md-12 clock ">
                    <img  src={alarmImage} alt="" id="alarm_gif" className='img-fluid mb-3'  />
                    <h1 id="timeHtml">{currentTime}</h1>
                    <h2 id='alarmat'>Alarm at: <span id="alarm">{alarmTime}</span></h2>
                    <form className='py-2'>
                      <input className='timeInput' type="number" placeholder="Hours" id="setmins" onChange={(e) => setHours(e.target.value)} />
                      <input className='timeInput' type="number" placeholder="Minutes" id="setsecs" onChange={(e) => setMinutes(e.target.value)} />
                    </form>
                    <button  onClick={setAlarm} className='setbtn'>Set</button>
                    <audio src={alarmAudio} id="alarmAudio"></audio>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Alarm;
