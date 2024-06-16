import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useCheckup from "../hooks/auth/useCheckup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ onDataReady }) => {
  const { koreanName, birthDate } = useParams();
  const [charts, setCharts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getCheckup } = useCheckup();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCheckup(koreanName, birthDate);

        if (!data || data.length === 0) {
          console.error("No data found for the provided name and birth date");
          setLoading(false);
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
          "rightKneeRearAngle",
        ];

        const createChartData = (key) => {
          const filteredData = data.filter((item) => item[key] !== null);
          const filteredCreatedAt = filteredData.map((item) => item.createdAt);

          return {
            labels: filteredCreatedAt,
            datasets: [
              {
                label: key,
                data: filteredData.map((item) => item[key]),
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.4)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          };
        };

        const generatedCharts = keys.map((key) => ({
          label: key,
          data: createChartData(key),
        }));

        setCharts(generatedCharts);
        setLoading(false);
        onDataReady(generatedCharts);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [koreanName, birthDate, getCheckup, onDataReady]);

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

  return null;
};

export default Chart;
