import { useState } from 'react'
import StrainBar from './components/instruments/StrainBar'
import LoadCell from './components/instruments/LoadCell.jsx'
import ExtensoMeter from './components/instruments/ExtensoMeter.jsx'
import AdminAccess from './components/deliverables/AdminAccess.jsx'
import InstrumentStatus from './components/deliverables/InstrumentStatus.jsx'
import PrototypeHealth from './components/deliverables/PrototypeHealth.jsx'
import './App.css'
import Home from './components/home/Home'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx'
import Dashboard from './components/deliverables/Dashboard.jsx'
import Reports from './components/deliverables/Reports.jsx'
import ManageUser from './components/deliverables/ManageUser.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path = '/strainBar' element={<StrainBar/>} />
      <Route path = '/loadCell' element={<LoadCell/>} />
      <Route path = '/extensometer' element={<ExtensoMeter/>} />
      <Route path = '/instrument-status' element={<InstrumentStatus/>} />
      <Route path = '/health-prototype' element={<PrototypeHealth/>} />
      <Route path = '/admin-access' element={<AdminAccess/>} />
      <Route path="/dashboard" element={<Dashboard />} />      
      <Route path="/reports" element={<Reports />} />
      <Route path="/manage-users" element={<ManageUser />} />
    </Route>
  )
);


export default function App() {
  return <RouterProvider router={router} />
}
