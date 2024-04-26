import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { StateContext } from "../../context/States";

const initialHourlyData = Array.from({ length: 12 }, (_, index) => ({
  hour: `${index * 2}:00-${(index * 2) + 1}:59`,
  totalRequest: 0,
}));

export default function ApiRequestsLineChart() {
  const { apiRequest } = StateContext();
  const [hourlyData, setHourlyData] = useState(initialHourlyData);

  // Function to update totalRequest in hourlyData based on the date
  function updateHourlyData(timestamp) {
    const requestDate = new Date(timestamp);
    const currentDate = new Date();
    // Check if the request is for the current day
    if (
      requestDate.getDate() === currentDate.getDate() &&
      requestDate.getMonth() === currentDate.getMonth() &&
      requestDate.getFullYear() === currentDate.getFullYear()
    ) {
      console.log("let see the timestamps = ",timestamp)
      const hour = requestDate.getHours();
      const intervalIndex = Math.floor(hour / 2);
      // Update the corresponding totalRequest value for the interval
      setHourlyData((prevData) =>
        prevData.map((hourData, index) => ({
          ...hourData,
          totalRequest:
            index === intervalIndex
              ? hourData.totalRequest + 1
              : hourData.totalRequest,
        }))
      );
    }
  }

  useEffect(() => {
    // Reset hourlyData when date changes
    setHourlyData(initialHourlyData);
  }, [new Date().getDate()]); // Trigger when the day changes

  useEffect(() => {
    // Update hourly data when apiRequest.requests change
    if (apiRequest.requests) {
      apiRequest.requests.forEach((request) => {
        updateHourlyData(request.timestamp);
      });
    }
  }, [apiRequest.requests]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={hourlyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Total requests in a day" stroke="#82ca9d">
          {hourlyData.map((entry, index) => (
            <Label
              key={index}
              content={entry.totalRequest}
              position="bottom"
              style={{ fontSize: "12px", fill: "#82ca9d" }}
            />
          ))}
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
}
