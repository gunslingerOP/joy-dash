import { LinearProgress } from "@mui/joy";
import React from "react";

interface LinearProgressProps {
  countTitle: string;
  currentValue: number;
  amountIncreasedToday?: string;
  percent: number;
  goalType?: string;
}

const DashboardProgress = (props: LinearProgressProps) => {
  return (
    <div className="flex border-2 py-3 px-4 rounded-xl flex-col">
      <span className="text-xs	text-[#646872]	">{props.countTitle}</span>

      <div className="flex py-3 flex-row items-center justify-between">
        <span className="text-2xl">{props.currentValue.toLocaleString()}</span>
        {props.amountIncreasedToday && (
          <span className="text-xs bg-[#D7F5DD] p-1 rounded-2xl">
            {props.amountIncreasedToday} today
          </span>
        )}
      </div>

      <LinearProgress
        value={props.percent}
        determinate
        size="lg"
        variant="outlined"
      />

      <span>{props.goalType}</span>
    </div>
  );
};

export default DashboardProgress;
