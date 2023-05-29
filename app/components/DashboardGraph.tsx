import Button from "@mui/joy/Button";
import { data } from "autoprefixer";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

const DashboardGraph = (props: { areaChartData: any }) => {
  return (
    <div className="flex flex-wrap border-2 py-4 px-4 rounded-xl">
      <div className="flex flex-1 justify-between flex-row">
        <span>Earnings</span>

        <div className="flex  rounded-lg   flex-row bg-[#EEEFF0]">
          <button className="m-1 text-sm p-2 hover:bg-[#DDDEE0] rounded-lg">
            1W
          </button>
          <button className="m-1 text-sm p-2 hover:bg-[#DDDEE0] rounded-lg">
            1M
          </button>
          <button className="m-1  text-sm p-2 hover:bg-[#DDDEE0] rounded-lg">
            1Y
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart width={100} height={500} data={props.areaChartData}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#096BDE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#096BDE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            strokeWidth={4}
            stroke="#096BDE"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardGraph;
