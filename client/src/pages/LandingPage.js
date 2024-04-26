import React from 'react'
import ApiDashboard from "../components/ApiDashboard"
import HeaderLayout from '../Layout/HeaderLayout'
import Intro from "../components/Intro"
import Boxes from '../Layout/Boxes'

export default function LandingPage() {
  return (
    <div>
      <HeaderLayout/>
      <Intro/>
      <Boxes/>
      <ApiDashboard/>
    </div>
  )
}