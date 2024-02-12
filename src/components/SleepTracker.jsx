// SleepTracker.jsx
import "./SleepTracker.css";
import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const SleepTracker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [sleepTime, setSleepTime] = useState(0);
  const chartRef = useRef(null);
  const yRef = useRef(0);
  const intervalRef = useRef(null);

  const startButtonHandler = () => {
    if (!isRunning) {
      setIsRunning(true);
      animate();
    }
  };

  const stopButtonHandler = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      yRef.current++;
      localStorage.setItem(yRef.current.toString(), sleepTime.toString());
      updateChart();
      setSleepTime(0);
    }
  };

  const animate = () => {
    intervalRef.current = setInterval(() => {
      setSleepTime((prevSleepTime) => prevSleepTime + 1);
    }, 1000);
  };

  const updateChart = () => {
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = [];

    // Retrieve the last 7 local storage entries
    for (let i = Math.max(1, yRef.current - 6); i <= yRef.current; i++) {
      const value = localStorage.getItem(i.toString());
      data.push(value ? parseInt(value) : 0);
    }

    // Update the chart data
    const existingChart = chartRef.current;
    existingChart.data.labels = labels;
    existingChart.data.datasets[0].data = data;

    // Update the chart
    existingChart.update();
  };

  useEffect(() => {
    // Initial chart rendering
    const ctx = document.getElementById('myChart');
    if (chartRef.current) {
      // Destroy existing chart before creating a new one
      chartRef.current.destroy();
    }
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sleep Time',
        //   backgroundColor: ["Green", "Blue", "Red", "Yellow", "Pink", "Voilet", "Black"],
          data: [],
          borderWidth: 1,
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white', // Change legend label color to black
              fontWeight: 'bold', // Make legend labels bold
              font: {
                size: 18, // Set font size for legend labels
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white', // Change y-axis ticks color to black
              fontWeight: 'bold', // Make y-axis ticks bold
              font: {
                size: 18, // Set font size for y-axis ticks
              },
            },
          },
          x: {
            ticks: {
              color: 'white', // Change x-axis ticks color to black
              fontWeight: 'bold', // Make x-axis ticks bold
              font: {
                size: 18, // Set font size for x-axis ticks
              },
            },
          },
        },
      },
    });
  
    return () => {
      // Cleanup: Clear interval when the component unmounts
      clearInterval(intervalRef.current);
    };
  }, []);
  
  
  return (
    <div className="row">
      <div className="col-md-11">
        <div className="row">
          <div id="yourRec" className="col-md-12 mx-5 my-5" style={{ color: "white" }}><h1>Get Your Record</h1></div>
        </div>
        <div className="row justify-content-center align-item-center">
          <div className="col-md-5 text-center">
            <div className="my-2 p-3">
              <button className="my-3 py-2" id="start" onClick={startButtonHandler} ><h5 style={{color:"white"}}>Start</h5></button>
              <p className="my-3 py-2" id="displayTime" style={{color:"white"}}> Sleep Time: {sleepTime}</p>
              <button className="my-3 py-2" id="stop" onClick={stopButtonHandler} ><h5 style={{color:"white"}}>Stop</h5></button>
            </div>
          </div>
          <div className="col-md-7 text-center">
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleepTracker;
