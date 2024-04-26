import React, { useState, useEffect } from "react";
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

const initialMonthlyData = [
  { month: "Jan", totalRequest: 0 },
  { month: "Feb", totalRequest: 0 },
  { month: "Mar", totalRequest: 0 },
  { month: "Apr", totalRequest: 0 },
  { month: "May", totalRequest: 0 },
  { month: "Jun", totalRequest: 0 },
  { month: "Jul", totalRequest: 0 },
  { month: "Aug", totalRequest: 0 },
  { month: "Sep", totalRequest: 0 },
  { month: "Oct", totalRequest: 0 },
  { month: "Nov", totalRequest: 0 },
  { month: "Dec", totalRequest: 0 },
];

export default function MonthlyApiRequestsLineChart() {
  const { apiRequest } = StateContext();
  const [monthlyData, setMonthlyData] = useState(initialMonthlyData);
  const [currentDate] = useState(new Date());

  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  console.log("currreent month =", currentMonth);

  // Function to update totalRequest in monthlyData based on the month
  function updateMonthlyData(timestamp) {
    const requestDate = new Date(timestamp);
    const monthIndex = requestDate.getMonth(); // Get the month index (0 - January, 1 - February, ...)
    setMonthlyData((prevData) =>
      prevData.map((monthData, index) => ({
        ...monthData,
        totalRequest:
          index === monthIndex
            ? monthData.totalRequest + 1
            : monthData.totalRequest,
      }))
    );
  }

  useEffect(() => {
    // Reset monthlyData when component mounts or when month changes
    setMonthlyData(initialMonthlyData);
  }, [new Date().getMonth()]); // Trigger when the month changes

  useEffect(() => {
    // Update monthly data when apiRequest.requests change
    if (apiRequest.requests) {
      apiRequest.requests.forEach((request) => {
        updateMonthlyData(request.timestamp);
      });
    }
  }, [apiRequest.requests]);

  return (
    <div className="space-y-8">
      <Text x={20} y={20} textAnchor="start" fontSize={12} fill="#666">
        {`Current month: ${currentMonth}`}
      </Text>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={monthlyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalRequest" stroke="#82ca9d">
            {monthlyData.map((entry, index) => (
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
