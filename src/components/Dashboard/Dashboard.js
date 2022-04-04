import React from 'react';
import {
  Line,
  LineChart,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



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
      <div className='recharts'>
        <div>
          <LineChart width={700} height={500} data={data}>
            <Line dataKey={"investment"}></Line>
            <Line dataKey={"sell"}></Line>
            <Line dataKey={"revenue"}></Line>
            <XAxis dataKey={"month"}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
          </LineChart>
        </div>
        <div>
          <BarChart width={700} height={300} data={data}>
            <XAxis dataKey={"month"} />
            <XAxis />
            <Tooltip />
            <Bar dataKey="investment" />
            <Bar dataKey="sell" />
            <Bar dataKey="revenue" />
          </BarChart>
        </div>
        
      </div>
    );
};

export default Dashboard;