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
  Text,
} from "recharts";
import { StateContext } from "../../context/States";

const initialHourlyData = Array.from({ length: 6 }, (_, index) => ({
  hour: `${index * 4}:00-${index * 4 + 3}:59`,
  totalRequest: 0,
}));

export default function ApiRequestsLineChart() {
  const { apiRequest } = StateContext();
  const [hourlyData, setHourlyData] = useState(initialHourlyData);
  const [currentDate, setCurrentDate] = useState(new Date());

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
      const hour = requestDate.getHours();
      const intervalIndex = Math.floor(hour / 4);
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
    setCurrentDate(new Date());
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
    <div>
      <Text x={20} y={20} textAnchor="start" fontSize={12} fill="#666">
        {`Current Date: ${currentDate.toLocaleDateString()}`}
      </Text>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={hourlyData}
          margin={{
            top: 40,
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
          <Line type="monotone" dataKey="totalRequest" stroke="#82ca9d">
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
    </div>
  );
}
