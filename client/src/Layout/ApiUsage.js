import React from 'react';
import EndDate from "../components/DateUse/lastday";
import FirstDate from "../components/DateUse/firstdate";
import TotalRequests from "../components/DateUse/totalrequests";

export default function ApiUsage() {
  return (
    <div className='my-10 mb-36'>
      <h1 className="text-center text-2xl font-bold mb-4">API Usage Statistics</h1>
      <div className='flex flex-wrap justify-around'>
        <FirstDate />
        <TotalRequests />
        <EndDate />
      </div>
    </div>
  );
}
