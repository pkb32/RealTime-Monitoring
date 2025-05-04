import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook for navigation
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]">
            {/* Header */}
            <div className="absolute top-10 w-full text-center">
                <h1 className="text-3xl sm:text-5xl font-extrabold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
                    {/* Show "Monitoring" on mobile, full text on PC */}
                    {windowWidth <= 640 ? "Monitoring" : "Online Real-Time Monitoring of Underground Instruments"}
                </h1>
            </div>

            {/* Main Dashboard Sections */}
            <div className="flex flex-col sm:flex-row gap-6 p-4 sm:p-6 w-full h-2/3 justify-center items-center">
                {/* Card Components */}
                {[
                    { img: "/Images/status.jpeg", icon: "📊", title: "Instrument Status", link: "/instrument-status" },
                    { img: "/Images/health.jpeg", icon: "🩺", title: "Health of Prototype", link: "/health-prototype" },
                    { img: "/Images/admin.jpeg", icon: "🔒", title: "Admin Access", link: "/admin-access" },
                ].map((item, index) => (
                    <div key={index} className="relative group w-full sm:w-1/3 h-[20rem] sm:h-[30rem] rounded-3xl overflow-hidden transition-transform transform hover:scale-105 shadow-2xl bg-[#121212] border border-gray-700">
                        {/* Show icon on mobile, image on PC */}
                        {windowWidth <= 640 ? (
                            <div className="h-full flex items-center justify-center text-9xl text-white opacity-80 group-hover:opacity-100 transition-all duration-500">
                                {item.icon}
                            </div>
                        ) : (
                            <div className="h-[85%] overflow-hidden rounded-3xl">
                                <img src={item.img} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" alt="" />
                            </div>
                        )}
                        <button
                            type="button"
                            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[70%] py-3 text-white font-bold text-lg sm:text-2xl bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-all duration-300"
                            onClick={() => navigate(item.link)}
                        >
                            {item.title}
                        </button>
                    </div>
                ))}
            </div>

            {/* Floating Navigation Bar */}
            <div className="absolute bottom-8 flex justify-center w-full">
                {/* Show navigation bar on PC */}
                {windowWidth > 640 && (
                    <div className="flex w-3/4 h-16 items-center justify-center rounded-full bg-opacity-40 backdrop-blur-lg bg-[#0AE2FF]/20 shadow-xl border border-cyan-300">
                        <ul className="flex flex-col items-center gap-16 font-medium lg:flex-row lg:space-x-10">
                            {[
                                { name: "Strain Bar", link: "/strainBar" },
                                { name: "Load Cell", link: "/loadCell" },
                                { name: "Extensometer", link: "/extensometer" },
                                {name: "Real-Time Monitoring", link: "/real-time-monitoring"}
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
                )}
            </div>

            {/* Dropdown for Mobile Only */}
            {windowWidth <= 640 && (
                <div className="fixed bottom-4 right-4">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                    >
                        <span className="text-xl">☰</span>
                    </button>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute bottom-14 right-0 w-48 bg-[#121212] border border-gray-700 rounded-lg shadow-lg z-10">
                            {[
                                { name: "Strain Bar", link: "/strainBar" },
                                { name: "Load Cell", link: "/loadCell" },
                                { name: "Extensometer", link: "/extensometer" },
                                {name: "Real-Time Monitoring", link: "/real-time-monitoring"}
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="block px-4 py-3 text-white hover:bg-gray-700 transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;