import { colors } from "@mui/joy";
import { data } from "autoprefixer";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { barData } from "../../dummyData";
import CapsuleBar from "./CapsuleBar";

const DashboardDetailedBar = () => {
  return (
    <div className="flex flex-col h-full border-2 py-4 px-4 rounded-xl">
      <div className="flex flex-1 justify-between flex-row">
        <span>Earnings</span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart className="w-full" data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            stackId="a"
            shape={
              <CapsuleBar
                fill={undefined}
                x={undefined}
                y={undefined}
                width={undefined}
                height={undefined}
                color="#1570EF"
                capsule={false}
              />
            }
          />
          <Bar
            dataKey="pv"
            fill="#82ca9d"
            stackId="a"
            shape={
              <CapsuleBar
                fill={undefined}
                x={undefined}
                y={undefined}
                width={undefined}
                height={undefined}
                color="#6FB6FF"
                endCapColor="#1570EF"
                capsule
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardDetailedBar;
