import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import CapsuleBar from "./CapsuleBar";

interface BarProgressProps {
  countTitle: string;
  currentValue: number;
  amountIncreasedToday?: string;
  barData: any;
}
const DashboardBarStats = (props: BarProgressProps) => {
  return (
    <div className="flex border-2 py-4 px-4 rounded-xl items-end justify-between flex-row">
      <div className="flex   flex-col items-start text-left">
        <span className="text-xs	 my-2 text-[#646872]	">{props.countTitle}</span>
        <span className="text-2xl mb-2">
          {props.currentValue.toLocaleString()}
        </span>
        {props.amountIncreasedToday && (
          <span className="text-xs bg-[#D7F5DD] py-1 px-2 rounded-2xl">
            {props.amountIncreasedToday} today
          </span>
        )}
      </div>

      <ResponsiveContainer width="40%" height={70}>
        <BarChart width={30} height={40} data={props.barData}>
          <Bar
            autoReverse
            dataKey="uv"
            fill="#8884d8"
            shape={
              <CapsuleBar
                fill={undefined}
                x={undefined}
                y={undefined}
                width={undefined}
                height={undefined}
                color="#3990FF"
                capsule={false}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardBarStats;
