import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StrainBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCrossCut, setSelectedCrossCut] = useState(null);

  const levels = {
    "Level 12": ["L12 North 7 X-cut", "L12 South 61 X-cut", "L12 North 9 X-cut"],
    "Level 13": ["L13 South 49 X-cut", "L13 North 31 X-cut"],
  };

  // Example datasets for different cross-cuts
  const dataSets = {
    "L12 North 7 X-cut": {
      labels: ['22-05-2022', '23-05-2022', '24-05-2022', '25-05-2022', '26-05-2022', '27-05-2022', '31-05-2022', 
        '05-06-2022', '09-06-2022', '16-06-2022', '23-06-2022', '30-06-2022', '08-07-2022', '15-07-2022', '22-07-2022',
         '29-07-2022', '05-08-2022', '12-08-2022', '19-08-2022', '26-08-2022', '02-09-2022', '09-09-2022', '16-09-2022', 
         '23-09-2022', '30-09-2022', '07-10-2022', '14-10-2022', '21-10-2022', '28-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06.01.2023', 
         '13.01.2023', '20.01.2023', '27.01.2023', '03.02.2023', '10.02.2023', '17.02.2023', '24.02.2023', '03.03.2023', 
         '10.03.2023', '17.03.2023', '24.03.2023', '31.03.2023', '07.04.2023', '14.04.2023', '21.04.2023', '28.04.2023', 
         '05.05.2023', '12.05.2023', '19.05.2023', '26.05.2023', '02.06.2023', '09.06.2023', '16.06.2023', '23.06.2023', 
         '30.06.2023', '07.07.2023', '14.07.2023', '21.07.2023', '28.07.2023', '04.08.2023', '11.08.2023', '18.08.2023', 
         '25.08.2023', '01.09.2023', '08.09.2023', '15.09.2023', '22.09.2023', '29.09.2023', '06.10.2023', '13.10.2023', 
         '20.10.2023', '27.10.2023', '03.11.2023', '10.11.2023', '17.11.2023', '24.11.2023', '01.12.2023', '08.12.2023', 
         '15.12.2023', '22.12.2023', '29.12.2024', '05.01.2024', '12.01.2024', '19.01.2024', '28.01.2024', '04.02.2024', 
         '11.02.2024', '18.02.2024', '25.02.2024', '03.03.2024', '10.03.2024', '17.03.2024', '24.03.2024', '31.03.2024', 
         '07.04.2024', '14.04.2024', '21.04.2024', '28.04.2024', '05.05.2024', '12.05.2024', '19.05.2024', '26.05.2024', 
         '02.06.2024', '09.06.2024', '16.06.2024', '23.06.2024', '30.06.2024', '07.07.2024', '14.07.2024', '21.07.2024', 
         '28.07.2024', '04.08.2024', '18.08.2024', '25.08.2024', '01.09.2024', '08.09.2024', '15.09.2024', '22.09.2024', 
         '29.09.2024', '06.10.2024', '13.10.2024', '20.10.2024', '27.10.2024', '05.11.2024', '12.11.2024', '19.11.2024', 
         '26.11.2024', '03.12.2024', '10.12.2024', '17.12.2024'],
      values: [0.00, 0.31, 0.53, 0.38, 0.38, 0.38, 0.03, -0.03, 0.38, 0.66, 0.56, 0.53, 0.45, 0.31, 0.49, 0.42, 0.63, 0.66,
         0.56, 0.70, 0.66, 0.73, 0.77, 0.59, 0.88, 0.77, 0.73, 0.73, 0.88, 0.73, 0.73, 0.81, 0.88, 0.81, 0.91, 0.00, 0.10,
          0.14, 0.28, 0.53, 0.59, 0.35, 0.56, 0.42, 0.31, 0.14, 0.00, 0.10, 0.21, 0.07, -0.07, -0.14, -0.18, -0.18, -0.18, 
          -0.18, -0.21, -0.21, -0.21, -0.21, -0.21, -0.25, -0.25, -0.25, -0.25, -0.28, -0.28, -0.28, -0.28, -0.28, -0.28, 
          -0.28, -0.28, -0.28, -0.31, -0.31, -0.31, -0.31, -0.35, -0.35, -0.35, -0.35, -0.35, -0.38, -0.38, -0.38, -0.38, 
          -0.38, -0.42, -0.42, -0.42, -0.42, -0.46, -0.46, -0.46, -0.46, -0.49, -0.49, -0.53, -0.53, -0.53, -0.53, -0.53, 
          -0.53, -0.53, -0.56, -0.56, -0.56, -0.56, -0.59, -0.59, -0.59, -0.59, -0.63, -0.63, -0.66, -0.66, -0.66, -0.70, 
          -0.70, -0.70, -0.70, -0.74, -0.74, -0.74, -0.77, -0.77, -0.77, -0.81, -0.81, -0.81, -0.81, -0.888044825, 
          -0.888044825, -0.888044825, -0.888044825, -0.888044825, -0.888044825, -0.888044825, -0.888044825, -0.888044825
      ],
      info: {
        instrument: "210639",
        location: "Level 12 North, 7 X cut",
        installation: "From May 2022 to December 2024",
        temp: "22°C",
        height: "15 Mtr",
        observation: "Strata is stable, no critical changes observed.",

      },
    },
    "L12 South 61 X-cut": {
      labels: ['22-05-2022', '23-05-2022', '24-05-2022', '25-05-2022', '26-05-2022', '27-05-2022', '31-05-2022', '05-06-2022',
         '09-06-2022', '16-06-2022', '23-06-2022', '30-06-2022', '08-07-2022', '15-07-2022', '22-07-2022', '29-07-2022', 
         '05-08-2022', '12-08-2022', '19-08-2022', '26-08-2022', '02-09-2022', '09-09-2022', '16-09-2022', '23-09-2022', 
         '30-09-2022', '07-10-2022', '14-10-2022', '21-10-2022', '28-10-2022', '04-11-2022', '11-11-2022', '18-11-2022', 
         '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', '13-01-2023', 
         '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', '10-03-2023', 
         '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '21-04-2023', '28-04-2023', '05-05-2023', 
         '12-05-2023', '19-05-2023', '26-05-2023', '02-06-2023', '09-06-2023', '16-06-2023', '23-06-2023', '30-06-2023', 
         '07-07-2023', '14-07-2023', '21-07-2023', '28-07-2023', '04-08-2023', '11-08-2023', '18-08-2023', '25-08-2023', 
         '01-09-2023', '08-09-2023', '15-09-2023', '22-09-2023', '29-09-2023', '06-10-2023', '13-10-2023', '20-10-2023',
          '27-10-2023', '03-11-2023', '10-11-2023', '17-11-2023', '24-11-2023', '01-12-2023', '08-12-2023', '15-12-2023',
           '22-12-2023', '29-12-2024', '05-01-2024', '12-01-2024', '19-01-2024', '28-01-2024', '04-02-2024', '11-02-2024',
            '18-02-2024', '25-02-2024', '03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', '31-03-2024', '07-04-2024',
             '14-04-2024', '21-04-2024', '28-04-2024', '05-05-2024', '12-05-2024', '19-05-2024', '26-05-2024', '02-06-2024',
              '09-06-2024', '16-06-2024', '23-06-2024', '30-06-2024', '07-07-2024', '14-07-2024', '21-07-2024', '28-07-2024', 
              '04-08-2024'],
      values: [0.00, 0.11, -0.21, 0.11, 0.11, -0.17, -0.56, 0.14, 0.11, -0.07, -0.17, 0.28, -0.07, 0.00, 0.11, 0.14, 0.21, 
        0.25, 0.18, 0.21, 0.25, 0.28, 0.18, 0.21, 0.28, -0.07, -0.03, -0.10, -0.03, -0.07, 0.00, -0.03, 0.04, -0.10, -418.60, 
        -418.60, -418.60, -418.60, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59,
         -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, 
         -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, 
         -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, 
         -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, 
         -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59, -418.59],
      info: {
        instrument: "210642",
        location: "Level 12 South, 61 X cut",
        installation: "From May 2022 to August 2024",
        temp: "22°C",
        height: "23 Mtr",
        observation: "Minor deviations detected, but within safe limits.",
   
      },
    },
    "L12 North 9 X-cut": {
      labels: ['22-05-2022', '23-05-2022', '24-05-2022', '25-05-2022', '26-05-2022', '27-05-2022', '31-05-2022', 
        '05-06-2022', '09-06-2022', '16-06-2022', '23-06-2022', '30-06-2022', '08-07-2022', '15-07-2022', '22-07-2022',
         '29-07-2022', '05-08-2022', '12-08-2022', '19-08-2022', '26-08-2022', '02-09-2022', '09-09-2022', '16-09-2022', 
         '23-09-2022', '30-09-2022', '07-10-2022', '14-10-2022', '21-10-2022', '28-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06.01.2023', 
         '13.01.2023', '20.01.2023', '27.01.2023', '03.02.2023', '10.02.2023', '17.02.2023', '24.02.2023', '03.03.2023', 
         '10.03.2023', '17.03.2023', '24.03.2023', '31.03.2023', '07.04.2023', '14.04.2023', '21.04.2023', '28.04.2023', 
         '05.05.2023', '12.05.2023', '19.05.2023', '26.05.2023', '02.06.2023', '09.06.2023', '16.06.2023', '23.06.2023', 
         '30.06.2023', '07.07.2023', '14.07.2023', '21.07.2023', '28.07.2023', '04.08.2023', '11.08.2023', '18.08.2023', 
         '25.08.2023', '01.09.2023', '08.09.2023', '15.09.2023', '22.09.2023', '29.09.2023', '06.10.2023', '13.10.2023', 
         '20.10.2023', '27.10.2023', '03.11.2023', '10.11.2023', '17.11.2023', '24.11.2023', '01.12.2023', '08.12.2023', 
         '15.12.2023', '22.12.2023', '29.12.2024', '05.01.2024', '12.01.2024', '19.01.2024', '28.01.2024', '04.02.2024', 
         '11.02.2024', '18.02.2024', '25.02.2024', '03.03.2024', '10.03.2024', '17.03.2024', '24.03.2024', '31.03.2024', 
         '07.04.2024', '14.04.2024', '21.04.2024', '28.04.2024', '05.05.2024', '12.05.2024', '19.05.2024', '26.05.2024', 
         '02.06.2024', '09.06.2024', '16.06.2024', '23.06.2024', '30.06.2024', '07.07.2024', '14.07.2024', '21.07.2024', 
         '28.07.2024', '04.08.2024', '18.08.2024', '25.08.2024', '01.09.2024', '08.09.2024', '15.09.2024', '22.09.2024', 
         '29.09.2024', '06.10.2024', '13.10.2024', '20.10.2024', '27.10.2024', '05.11.2024', '12.11.2024', '19.11.2024', 
         '26.11.2024', '03.12.2024', '10.12.2024', '17.12.2024'],
      values: [0.00, 0.04, 0.14, 0.21, 0.21, 0.21, 0.81, 1.47, 0.59, 0.63, 0.49, 0.74, 0.28, 0.56, 0.45, 0.74, 0.70, 0.63, 
        0.81, 0.81, 0.84, 0.91, 0.98, 0.59, 0.49, 0.56, 0.70, 0.67, 0.59, 0.56, 0.49, 0.56, 0.52, 0.49, 0.42, 3.85, 3.92,
         3.71, 3.82, 3.92, 3.78, 3.99, 3.88, 3.95, 4.13, 4.27, 4.73, 4.76, 4.83, 4.94, 5.07, 5.18, 4.87, 4.48, 4.27, 4.06,
          4.09, 4.09, 4.13, 4.17, 4.27, 4.34, 4.38, 4.48, 4.51, 4.51, 4.55, 4.58, 4.62, 4.62, 4.65, 4.65, 4.69, 4.73, 4.76,
           4.80, 4.80, 4.80, 4.83, 4.87, 4.90, 4.94, 4.97, 5.01, 5.01, 5.04, 5.04, 5.04, 5.07, 5.11, 5.14, 5.18, 5.21, 5.25,
            5.29, 5.29, 5.29, 5.29, 5.32, 5.32, 5.36, 5.39, 5.39, 5.43, 5.46, 5.50, 5.53, 5.57, 5.60, 5.63, 5.67, 5.70, 5.74,
             5.77, 5.81, 5.81, 5.84, 5.88, 5.95, 5.99, 6.02, 6.06, 5.81, 5.53, 4.51, 3.39, 3.01, 1.71, 0.94, -1.82, -3.19,
              -6.19, -7.81, -8.82, -10.15, -11.13, -11.97, -13.34, -14.25, -15.82],
      info: {
        instrument: "210637",
        location: "Level 12 North, 9 X cut",
        installation: "From May 2022 to December 2024",
        temp: "23°C",
        height: "22 Mtr",
        observation: "Minor deviations detected, but within safe limits.",

      },
    },
    "L13 North 31 X-cut": {
      labels: ['22-05-2022', '23-05-2022', '24-05-2022', '25-05-2022', '26-05-2022', '27-05-2022', '31-05-2022', 
        '05-06-2022', '09-06-2022', '16-06-2022', '23-06-2022', '30-06-2022', '08-07-2022', '15-07-2022', '22-07-2022',
         '29-07-2022', '05-08-2022', '12-08-2022', '19-08-2022', '26-08-2022', '02-09-2022', '09-09-2022', '16-09-2022', 
         '23-09-2022', '30-09-2022', '07-10-2022', '14-10-2022', '21-10-2022', '28-10-2022', '04-11-2022', '11-11-2022', 
         '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06.01.2023', 
         '13.01.2023', '20.01.2023', '27.01.2023', '03.02.2023', '10.02.2023', '17.02.2023', '24.02.2023', '03.03.2023', 
         '10.03.2023', '17.03.2023', '24.03.2023', '31.03.2023', '07.04.2023', '14.04.2023', '21.04.2023', '28.04.2023', 
         '05.05.2023', '12.05.2023', '19.05.2023', '26.05.2023', '02.06.2023', '09.06.2023', '16.06.2023', '23.06.2023', 
         '30.06.2023', '07.07.2023', '14.07.2023', '21.07.2023', '28.07.2023', '04.08.2023', '11.08.2023', '18.08.2023', 
         '25.08.2023', '01.09.2023', '08.09.2023', '15.09.2023', '22.09.2023', '29.09.2023', '06.10.2023', '13.10.2023', 
         '20.10.2023', '27.10.2023', '03.11.2023', '10.11.2023', '17.11.2023', '24.11.2023', '01.12.2023', '08.12.2023', 
         '15.12.2023', '22.12.2023', '29.12.2024', '05.01.2024', '12.01.2024', '19.01.2024', '28.01.2024', '04.02.2024', 
         '11.02.2024', '18.02.2024', '25.02.2024', '03.03.2024', '10.03.2024', '17.03.2024', '24.03.2024', '31.03.2024', 
         '07.04.2024', '14.04.2024', '21.04.2024', '28.04.2024', '05.05.2024', '12.05.2024', '19.05.2024', '26.05.2024', 
         '02.06.2024', '09.06.2024', '16.06.2024', '23.06.2024', '30.06.2024', '07.07.2024', '14.07.2024', '21.07.2024', 
         '28.07.2024', '04.08.2024', '18.08.2024', '25.08.2024', '01.09.2024', '08.09.2024', '15.09.2024', '22.09.2024', 
         '29.09.2024', '06.10.2024', '13.10.2024', '20.10.2024', '27.10.2024', '05.11.2024', '12.11.2024', '19.11.2024', 
         '26.11.2024', '03.12.2024', '10.12.2024', '17.12.2024'],

      values: [0.00, 0.07, 0.03, 0.07, 0.07, 0.10, 0.25, 0.35, 0.21, 0.21, 0.14, -0.04, -0.07, 0.03, 0.21, 0.18, 0.14,
        0.25, 0.18, 0.25, 0.31, 0.42, 0.28, 0.31, 0.35, 0.25, 0.49, 0.35, 0.45, 0.18, 0.03, 0.25, 0.07, -0.04, 0.42,
         0.18, 0.28, 0.28, 0.35, 0.49, 0.38, 0.56, 0.45, 0.31, 0.25, 0.18, 0.21, 0.28, 0.31, 0.42, 0.45, 0.45, 0.45,
          0.45, 0.45, 0.49, 0.52, 0.56, 0.63, 0.66, 0.66, 0.74, 0.77, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81, 
          0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.84, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.88, 0.91, 0.91, 0.91, 0.91, 
          0.91, 0.91, 0.91, 0.94, 0.94, 0.94, 0.94, 0.94, 0.94, 0.98, 0.98, 0.98, 0.98, 0.98, 1.01, 1.01, 1.01, 1.01, 
          1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.05, 1.05, 1.05, 1.05, 1.05, 1.08, 1.08, 1.12, 1.12, 1.15, 1.19, 
          1.19, 1.22, 1.26, 1.30, 1.33, 1.37, 1.37, 1.40, 1.40, 1.44, 1.47, 1.47, 1.51, 1.51],
      info: {
        instrument: "210641",
        location: "Level 13 North, 31 X cut",
        installation: "From July 2022 to December 2024",
        temp: "23°C",
        height: "15 Mtr",
        observation: "Although there are deviations but since the Critical Ratio is below 2, it indicates that the strata is stable and provides good working conditions.",

      },
    },
    "L13 South 49 X-cut": {
      labels: ['30-11-2021', '22-05-2022', '23-05-2022', '24-05-2022', '25-05-2022', '26-05-2022', '27-05-2022', '31-05-2022',
         '05-06-2022', '09-06-2022', '16-06-2022', '23-06-2022', '30-06-2022', '08-07-2022', '15-07-2022', '22-07-2022',
          '29-07-2022', '05-08-2022', '12-08-2022', '19-08-2022', '26-08-2022', '02-09-2022', '09-09-2022', '16-09-2022', 
          '23-09-2022', '30-09-2022', '07-10-2022', '14-10-2022', '21-10-2022', '28-10-2022', '04-11-2022', '11-11-2022', 
          '18-11-2022', '25-11-2022', '02-12-2022', '09-12-2022', '16-12-2022', '23-12-2022', '30-12-2022', '06-01-2023', 
          '13-01-2023', '20-01-2023', '27-01-2023', '03-02-2023', '10-02-2023', '17-02-2023', '24-02-2023', '03-03-2023', 
          '10-03-2023', '17-03-2023', '24-03-2023', '31-03-2023', '07-04-2023', '14-04-2023', '21-04-2023', '28-04-2023', 
          '05-05-2023', '12-05-2023', '19-05-2023', '26-05-2023', '02-06-2023', '09-06-2023', '16-06-2023', '23-06-2023', 
          '30-06-2023', '07-07-2023', '14-07-2023', '21-07-2023', '28-07-2023', '04-08-2023', '11-08-2023', '18-08-2023', 
          '25-08-2023', '01-09-2023', '08-09-2023', '15-09-2023', '22-09-2023', '29-09-2023', '06-10-2023', '13-10-2023', 
          '20-10-2023', '27-10-2023', '03-11-2023', '10-11-2023', '17-11-2023', '24-11-2023', '01-12-2023', '08-12-2023', 
          '15-12-2023', '22-12-2023', '29-12-2024', '05-01-2024', '12-01-2024', '19-01-2024', '28-01-2024', '04-02-2024', 
          '11-02-2024', '18-02-2024', '25-02-2024', '03-03-2024', '10-03-2024', '17-03-2024', '24-03-2024', '31-03-2024', 
          '07-04-2024', '14-04-2024', '21-04-2024', '28-04-2024', '05-05-2024', '12-05-2024', '19-05-2024', '26-05-2024', 
          '02-06-2024', '09-06-2024', '16-06-2024', '23-06-2024', '30-06-2024', '07-07-2024', '14-07-2024', '21-07-2024', 
          '28-07-2024', '04-08-2024'],
      values: [0.00, 0.00, 0.14, 0.18, 0.28, 0.28, 0.28, 0.60, 0.63, 0.84, 1.05, 0.35, 0.42, 0.25, 0.42, 0.38, 0.42, 0.53, 
        0.63, 0.53, 0.53, 0.88, 0.94, 0.77, 0.70, 0.70, 0.74, 0.77, 0.63, 0.70, 0.67, 0.56, 0.60, 0.63, 0.70, -0.35, 0.28, 
        0.21, 0.11, 0.04, 0.14, 0.21, 0.31, -0.17, -0.31, -0.59, -1.15, -1.08, -0.98, -1.15, -0.94, -0.88, -0.81, -0.66, 
        -0.59, -0.56, -0.52, -0.49, -0.42, -0.38, -0.31, -0.28, -0.25, -0.21, -0.10, -0.10, -0.07, 0.00, 0.00, 0.04, 0.11, 
        0.14, 0.18, 0.21, 0.28, 0.31, 0.35, 0.42, 0.46, 0.49, 0.56, 0.60, 0.63, 0.70, 0.74, 0.77, 0.84, 0.88, 0.91, 0.98,
         1.02, 1.05, 1.12, 1.16, 1.26, 1.30, 1.37, 1.47, 1.54, 1.58, 1.68, 1.82, 1.86, 1.93, -316.05, -316.05, -316.05, 
         -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05, -316.05,
          -316.05, -316.05],
      info: {
        instrument: "210632",
        location: "Level 13 North, 13 X cut",
        installation: "From Nov 2021 to August 2024",
        temp: "23°C",
        height: "8 Mtr",
        observation: "Minor deviations detected, but within safe limits.",
     
      },
    },
  };

  const selectedData = dataSets[selectedCrossCut] || {
    labels: [],
    values: [],
    info: {
      instrument: "N/A",
      location: "Select a location",
      installation: "N/A",
      temp: "N/A",
      height: "N/A",
      observation: "Select a location to see observations.",
 
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Study of Ground Behaviour in Underground Metal Mines
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Vis-à-vis Conventional and IoT-based Instrumentation
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Chart Section */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
  <h2 className="text-xl font-semibold mb-4">Strain Bar Data</h2>
  {/* Chart Container with Dynamic Height */}
  <div className="h-64 sm:h-96"> {/* Adjust height for mobile and desktop */}
    <Line
      data={{
        labels: selectedData.labels,
        datasets: [
          {
            label: "Cumulative Difference",
            data: selectedData.values,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            pointRadius: 2,
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false, // Ensure the chart fits the container
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Strain Bar" },
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "rgba(255, 255, 255, 0.7)" },
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.1)" },
            ticks: { color: "rgba(255, 255, 255, 0.7)" },
          },
        },
      }}
    />
  </div>

  {/* Location Selection Dropdown */}
  <div className="mt-6">
    <div className="relative inline-block text-left w-full">
      <button
        type="button"
        className="inline-flex justify-between w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCrossCut || selectedLevel || "Select Location"}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 z-10">
          {Object.keys(levels).map((level) => (
            <div key={level} className="relative">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-600 text-white cursor-pointer"
                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
              >
                {level}
              </button>

              {selectedLevel === level && (
                <div className="ml-4 mt-1 w-full bg-gray-600 text-white shadow-md rounded-md">
                  {levels[level].map((crossCut) => (
                    <div
                      key={crossCut}
                      className="px-4 py-2 hover:bg-gray-500 cursor-pointer"
                      onClick={() => {
                        setSelectedCrossCut(crossCut);
                        setIsOpen(false);
                      }}
                    >
                      {crossCut}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>

        {/* Information Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <div className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4"> Information</h2>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Instrument S No:</span>{" "}
                {selectedData.info.instrument}
              </p>
              <p>
                <span className="font-bold">Location:</span>{" "}
                {selectedData.info.location}
              </p>
              <p>
                <span className="font-bold">Installation Date:</span>{" "}
                {selectedData.info.installation}
              </p>
              <p>
                <span className="font-bold">Calibration Temp:</span>{" "}
                {selectedData.info.temp}
              </p>
              <p>
                <span className="font-bold">Stope Height:</span>{" "}
                {selectedData.info.height}
              </p>
          
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6">
            <h2 className="text-xl font-semibold mb-4"> Observation</h2>
            <p>{selectedData.info.observation}</p>
          </div>
        </div>
      </div>

      {/* Home Button */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
        >
           Home
        </Link>
      </div>
      <div className=" bg-gray-850 h-[100px]">

      </div>
    </div>
  );
};

export default StrainBar;