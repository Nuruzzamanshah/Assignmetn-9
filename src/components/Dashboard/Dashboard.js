import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="charts">
      <LineChart width={450} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey={"investment"} stroke="#82ca9d"></Line>
        <Line dataKey={"sell"}></Line>
        <Line dataKey={"revenue"} stroke="#8884d8"></Line>
        <XAxis dataKey={"month"}></XAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <YAxis></YAxis>
      </LineChart>


      <BarChart width={450} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey={"investment"} fill="#82ca9d"></Bar>
        <Bar dataKey={"revenue"} fill="#8884d8"></Bar>
        <Bar dataKey={"sell"}></Bar>
      </BarChart>

      
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <Tooltip />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          dataKey={"investment"}
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        ></Radar>
        <Radar
          dataKey={"revenue"}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        ></Radar>
      </RadarChart>
    </div>
  );
};

export default Dashboard;
