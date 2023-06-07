import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "0-15min", value: 4 },
  { name: "16-30min", value: 17 },
  { name: "31-45min", value: 11 },
];

const Graphic: React.FC = () => {
  return (
    <AreaChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="step" dataKey="value" fill="#6FB7FE" stroke="#0D87FF" />
    </AreaChart>
  );
};

export default Graphic;
