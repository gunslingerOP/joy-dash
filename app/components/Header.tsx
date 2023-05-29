"use client";

import IconButton from "@mui/joy/IconButton";
import { Bell, Gear, SquaresFour } from "@phosphor-icons/react";
import Question from "@phosphor-icons/react/dist/icons/Question";
import Image from "next/image";
import React from "react";
const profile = require("../../public/initial.png");
const Header = (props: { title: string }) => {
  return (
    <header className="flex-1 flex-row justify-between flex   mb-10">
      <span className="font-semibold	text-3xl">{props.title}</span>

      <section className="flex-row flex">
        <IconButton variant="plain">
          <Question size={28} className="m-1 text-black" />
        </IconButton>
        <IconButton variant="plain">
          <Bell size={28} className="m-1 text-black" />
        </IconButton>
        <IconButton variant="plain">
          <Gear size={28} className="m-1 text-black" />
        </IconButton>
        <div className="w-8 flex items-center m-1 mr-3 ">
          <IconButton variant="plain">
            <Image
              className="rounded-full text-black	"
              alt="profile"
              src={profile}
            />
          </IconButton>
        </div>
        <div className="border-l-2 flex	items-center px-1">
          <IconButton variant="plain">
            <SquaresFour size={28} className="text-black" />
          </IconButton>
        </div>
      </section>
    </header>
  );
};

export default Header;
