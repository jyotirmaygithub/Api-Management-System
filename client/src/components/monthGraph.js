import React, { PureComponent, useContext } from "react";
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
import { StateContext } from "../context/States";

const data = [
  { days: "0-5", totalRequest: 0 },
  { days: "6-10", totalRequest: 0 },
  { days: "11-15", totalRequest: 0 },
  { days: "16-20", totalRequest: 0 },
  { days: "21-25", totalRequest: 0 },
  { days: "26-30", totalRequest: 0 },
];

export default function ApiRequestsLineChart() {
  const { apiRequest } = StateContext();

  // Function to update totalRequest in data array based on the date
  function updateData(date) {
    const day = new Date(date).getDate(); // Get the day of the month

    // Determine the range the date falls into and update the corresponding totalRequest value
    data.forEach((item) => {
      const [start, end] = item.days.split("-").map(Number); // Split days range into start and end numbers
      if (day >= start && day <= end) {
        item.totalRequest++; // Increment totalRequest for the corresponding range
      }
    });
    // console.log("after manipulations =", data);
  }
  apiRequest.requests &&
    apiRequest.requests.map((request) => {
      return updateData(request.timestamp);
    });
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="days" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalRequest" stroke="#82ca9d">
            {data.map((entry, index) => (
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
    </>
  );
}
