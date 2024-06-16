import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { patientList } from '../constant/patientList';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ name, birth }) => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = patientList.filter(
          patient => patient.koreanName === name && patient.birthDate === birth
        );

        console.log("Filtered Data:", data);

        if (data.length === 0) {
          console.error("No data found for the provided name and birth date");
          return;
        }

        const keys = [
          "sagittalNeckUpperAngle", 
          "sagittalNeckLowerAngle", 
          "frontalNeckLeftAngle", 
          "frontalNeckRightAngle",
          "horizontalLeftArmUpperAngle", 
          "horizontalLeftArmLowerAngle", 
          "horizontalRightArmUpperAngle", 
          "horizontalRightArmLowerAngle",
          "sagittalLeftArmFrontAngle", 
          "sagittalLeftArmRearAngle", 
          "sagittalRightArmFrontAngle", 
          "sagittalRightArmRearAngle",
          "frontalLeftArmOuterAngle", 
          "frontalLeftArmInnerAngle", 
          "frontalRightArmOuterAngle", 
          "frontalRightArmInnerAngle",
          "sagittalWaistRearAngle", 
          "sagittalWaistFrontAngle", 
          "frontalWaistLeftAngle", 
          "frontalWaistRightAngle",
          "leftKneeRearAngle", 
          "rightKneeRearAngle"
        ];

        const createdAt = data.map(item => item.createdAt);

        const createChartData = (key) => {
          const filteredData = data.filter(item => item[key] !== null);
          const filteredCreatedAt = filteredData.map(item => item.createdAt);

          return {
            labels: filteredCreatedAt,
            datasets: [{
              label: key,
              data: filteredData.map(item => item[key]),
              fill: false,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            }],
          };
        };

        const generatedCharts = keys.map(key => ({
          label: key,
          data: createChartData(key)
        }));

        console.log("Generated Charts:", generatedCharts);

        setCharts(generatedCharts);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [name, birth]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 60,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {charts.length ? (
          charts.map((chart, index) => (
            <div
              key={index}
              style={{
                width: "calc(50% - 10px)",
                margin: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <h3>{chart.label}</h3>
              <Line data={chart.data} options={options} />
            </div>
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Chart;
