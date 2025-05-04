import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { enIN } from 'date-fns/locale';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale);

function Rtm() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.thingspeak.com/channels/2897525/feeds.json?api_key=OMP36EXGSK2AKE02&results=10'
      );
      const result = await response.json();

      const readings = result.feeds.map(feed => ({
        x: dayjs.utc(feed.created_at).tz('Asia/Kolkata').toDate(),
        y: parseFloat(feed.field1),
      }));

      setData(readings);
    } catch (err) {
      setError('Error fetching data from ThingSpeak');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 15000);
    return () => clearInterval(intervalId);
  }, []);

  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;
  if (!data) return <div className="text-white text-3xl bg-blue-900 w-full min-h-screen text-center mt-4">Loading...</div>;

  const chartData = {
    datasets: [
      {
        label: 'Load Cell Reading',
        data: data,
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointBackgroundColor: '#2563eb',
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Ensures flexible height on small screens
    plugins: {
      legend: {
        labels: {
          color: '#fff',
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: 'Real-Time Load in kg',
        color: '#fff',
        font: { size: 16 },
      },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.y} kg`,
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'dd-MM-yy HH:mm:ss',
          displayFormats: {
            second: 'dd-MM-yy HH:mm:ss',
            minute: 'dd-MM-yy HH:mm',
          },
        },
        adapters: {
          date: { locale: enIN },
        },
        ticks: {
          color: '#fff',
          maxRotation: 45,
          minRotation: 20,
        },
        title: {
          display: true,
          text: 'Time (IST)',
          color: '#fff',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#fff',
          callback: value => `${value} kg`,
        },
        title: {
          display: true,
          text: 'Load (kg)',
          color: '#fff',
        },
      },
    },
  };

  return (
    
    <div className='bg-[#0f172a] min-h-screen w-full flex'>
           <div className="absolute top-4 right-2 z-10">
    <Link
      to="/"
      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all text-sm sm:text-base"
    >
      Home
    </Link>
  </div>
    <div className="bg-[#0f172a] min-h-screen w-full flex items-center justify-center px-2 sm:px-4 py-8">
       
       <div className="w-full max-w-4xl">
         <h1 className="text-2xl sm:text-4xl font-bold text-white text-center mb-4 sm:mb-6">
           Real-Time Monitoring
         </h1>
 
         <div className="bg-[#1e293b] p-4 sm:p-6 rounded-lg shadow-lg h-[300px] sm:h-[400px] md:h-[500px]">
           <Line data={chartData} options={chartOptions} />
         </div>
       </div>
         
     </div>

    </div>

  );
}

export default Rtm;
