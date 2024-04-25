import React from 'react'
import ApiDashboard from "../components/ApiDashboard"
import MonthGraph from "../components/monthGraph"
import DayGraph from "../components/dayGraph"


export default function LandingPage() {
  return (
    <div>
      <ApiDashboard/>
      <MonthGraph/>
      <DayGraph/>
    </div>
  )
}
