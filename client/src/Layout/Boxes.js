import React from 'react'
import Free from "../components/Boxes/free"
import Paid from "../components/Boxes/paid"

export default function Boxes() {
  return (
    <div className='flex justify-around flex-wrap my-10'>
      <Free/>
      <Paid/>
    </div>
  )
}
