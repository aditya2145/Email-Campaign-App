import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateEmailCampaign from './pages/CreateEmailCampaign'
import NotFoundPage from './pages/NotFoundPage'
import AllCampaigns from './pages/AllCampaigns'
import TrackCampaign from './pages/TrackCampaign'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateEmailCampaign />} />
        <Route path='/campaigns' element={<AllCampaigns />} />
        <Route path='/campaign/:campaignId' element={<TrackCampaign />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App