import React from "react";
import { AppListProps } from "../types/dashboardTypes";
import { ArrowClockwise } from "@phosphor-icons/react";
import Image from "next/image";
import Tag from "./tag";
import IconButton from "@mui/joy/IconButton";

const DashboardAppList = (props: AppListProps) => {
  return (
    <div className="flex flex-col   border-2 py-4 px-4 rounded-xl">
      <div className="flex  items-center justify-between flex-row">
        <span className="text-lg">{props.title}</span>

        <IconButton variant="plain">
          <ArrowClockwise className="text-black" size={20} />
        </IconButton>
      </div>

      {props.app.map((app, index) => {
        return (
          <div key={index} className="flex mt-4 ml-2 flex-row justify-between">
            <div className="flex flex-row">
              <div className="w-8 flex items-center  ">
                <Image className="rounded-full	" alt="profile" src={app.image} />
              </div>
              <p className="flex flex-col ml-4">
                <span>{app.name}</span>
                <span className="text-left   text-xs text-[#646872]">
                  {app.platforms}
                </span>
              </p>
            </div>

            <div>
              <Tag text={app.price} color={"#D7F5DD"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardAppList;
