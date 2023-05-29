"use client";
import {
  ChartDonut,
  House,
  UserCircleGear,
  Users,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const logo = require("../../../public/logo_black.png");
const SidebarProvider = () => {
  return (
    <div className="flex-1 flex">
      <Sidebar className="flex-1" backgroundColor="#F7F7F8">
        <Menu
          className="p-4"
          menuItemStyles={{
            subMenuContent: {
              backgroundColor: "transparent",
              textAlign: "center",
              marginLeft: "45px",
              span: {
                fontWeight: 400,
              },
            },
            button: {
              paddingLeft: "20px",
              color: "#646872",
              width: "100%",
              borderRadius: "12px",
              fontWeight: 600,

              textAlign: "left",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "rgba(221, 241, 255, 0.4)",
              },
            },
          }}
        >
          <div className="flex gap-2 mb-8 items-center">
            <Image src={logo} className="w-8" alt="Picture of the author" />
            <span className="		text-2xl	">Joyful</span>
          </div>

          <span className="  text-[#646872] text-left   text-sm">General</span>

          <MenuItem className="mt-3" icon={<House size={25} />} active={true}>
            App
          </MenuItem>
          <MenuItem icon={<ChartDonut size={25} />}> Reports </MenuItem>
          <span className="  text-[#646872] text-left   text-sm">General</span>
          <MenuItem className="mt-3" icon={<Users size={25} />}>
            Users
          </MenuItem>

          <SubMenu icon={<UserCircleGear size={25} />} label="Settings">
            <MenuItem>General</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem>Profile</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarProvider;
