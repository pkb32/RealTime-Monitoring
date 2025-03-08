import React from 'react';
import { Link } from "react-router-dom";

const instruments = [
  { type: 'Extensometer', id: 'EXT-210606', location: 'L11 11X-Cut', status: 'working' },
  { type: 'Extensometer', id: 'EXT-210605', location: 'L11 15X-Cut', status: 'malfunctioning' },
  { type: 'Extensometer', id: 'EXT-210608', location: 'L11 13X-Cut', status: 'working' },
  { type: 'Load Cell', id: 'LC-210610', location: 'L13S 49X-Cut', status: 'working' },
  { type: 'Load Cell', id: 'LC-210613', location: 'L12S 61X-Cut', status: 'malfunctioning' },
  { type: 'Load Cell', id: 'LC-210612', location: 'L12 7X-Cut', status: 'working' },
  { type: 'Strain Bar', id: 'SB-210639', location: 'L12N 7X-Cut', status: 'malfunctioning' },
  { type: 'Strain Bar', id: 'SB-210641', location: 'L13N 31X-Cut', status: 'working' },
  { type: 'Strain Bar', id: 'SB-210632', location: 'L13S 49X-Cut', status: 'malfunctioning' },
  { type: 'Strain Bar', id: 'SB-210637', location: 'L12N 9X-Cut', status: 'working' },
  { type: 'Strain Bar', id: 'SB-210642', location: 'L12S 61X-Cut', status: 'malfunctioning' },
];

const InstrumentStatus = () => {
  return (
    <div className='bg-[#1446A0] min-h-screen p-4 sm:p-8'>
      <div className=' flex items-center justify-center'>
      <h1 className='text-white text-2xl font-bold mb-6 text-center'>Instrument Monitoring Dashboard</h1>
      <Link to="/" className="absolute top-4 right-4 bg-[#146BD0] text-white px-4 py-2 rounded-lg hover:bg-[#aec4ed] transition">
            Home
      </Link>
      </div>
      
     
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'>
        {instruments.map((instrument, index) => (
          <div 
            key={index} 
            className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center'
          >
            {/* Status Indicator */}
            <div className={`w-6 h-6 rounded-full ${instrument.status === 'working' ? 'bg-green-500' : 'bg-red-500'}`}></div>

            {/* Instrument Details */}
            <h2 className='text-lg font-semibold mt-2'>{instrument.type}</h2>
            <p className='text-gray-600'>ID: {instrument.id}</p>
            <p className='text-gray-600'>Location: {instrument.location}</p>

            {/* Error Messages */}
            {instrument.status !== 'working' && (
              <p className='text-gray-600'>
                {instrument.type === 'Extensometer' && 'Error: 504-Sensor Damage'}
                {instrument.type === 'Load Cell' && 'Error: 505-Loose Connections'}
                {instrument.type === 'Strain Bar' && 'Error: 403-Signal Error'}
              </p>
            )}

            {/* Status Text */}
            <p className={`mt-2 font-bold ${instrument.status === 'working' ? 'text-green-600' : 'text-red-600'}`}>
              {instrument.status.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentStatus;