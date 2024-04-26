import React from 'react'
import ApiDashboard from "../components/ApiDashboard"
import HeaderLayout from '../Layout/HeaderLayout'
import Intro from "../components/Intro"
import Boxes from '../Layout/Boxes'
import ApiUsage from '../Layout/ApiUsage'

export default function LandingPage() {
  return (
    <div>
      <HeaderLayout/>
      <Intro/>
      <Boxes/>
      <ApiDashboard/>
      <ApiUsage/>
    </div>
  )
}