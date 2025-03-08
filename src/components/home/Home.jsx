import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]">
            {/* Header */}
            <div className="absolute top-10 w-full  text-center">
                <h1 className="text-5xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
                    Online Real-Time Monitoring of Underground Instruments
                </h1>
            </div>

            {/* Main Dashboard Sections */}
            <div className="flex flex-row gap-10 p-6 w-full h-2/3 justify-center">
                {/* Card Components */}
                {[
                    { img: "/Images/status.jpeg", title: "Instrument Status", link: "/instrument-status" },
                    { img: "/Images/health.jpeg", title: "Health of Prototype", link: "/health-prototype" },
                    { img: "/Images/admin.jpeg", title: "Admin Access", link: "/admin-access" },
                ].map((item, index) => (
                    <div key={index} className="relative group w-1/3 h-[30rem] rounded-3xl overflow-hidden transition-transform transform hover:scale-105 shadow-2xl bg-[#121212] border border-gray-700">
                        <div className="h-[85%] overflow-hidden rounded-3xl">
                            <img src={item.img} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" alt="" />
                        </div>
                        <button 
                            type="button" 
                            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[70%] py-3 text-white font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-all duration-300"
                            onClick={() => navigate(item.link)}
                        >
                            {item.title}
                        </button>
                    </div>
                ))}
            </div>

            {/* Floating Navigation Bar */}
            <div className="absolute bottom-8 flex justify-center w-full">
                <div className="flex w-2/4 h-16 items-center justify-center rounded-full bg-opacity-40 backdrop-blur-lg bg-[#0AE2FF]/20 shadow-xl border border-cyan-300">
                    <ul className="flex flex-col items-center gap-16 font-medium lg:flex-row lg:space-x-10">
                        {[
                            { name: "Strain Bar", link: "/strainBar" },
                            { name: "Load Cell", link: "/loadCell" },
                            { name: "Extensometer", link: "/extensometer" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.link} 
                                    className="text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-600 hover:to-pink-600 font-medium rounded-lg text-lg px-5 py-2 transition-all duration-300 shadow-lg"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
