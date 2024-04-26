import React, { useEffect } from "react";
import DayGraph from "../components/Graphs/day";
import MonGraph from "../components/Graphs/month";
import { useAPI } from "../context/api";

export default function APIusage() {
  const { totalRequests } = useAPI();

  useEffect(() => {
    totalRequests();
  }, []);

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">Daily API Usage</h2>
        <DayGraph />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Monthly API Usage</h2>
        <MonGraph />
      </div>
    </div>
  );
}
