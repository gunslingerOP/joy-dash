"use client";

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
        <Question size={28} className="m-2" />
        <Bell size={28} className="m-2" />
        <Gear size={28} className="m-2" />
        <div className="w-8 flex items-center m-2">
          <Image className="rounded-full	" alt="profile" src={profile} />
        </div>
        <div className="border-l-2 flex	items-center px-1">
          <SquaresFour size={28} />
        </div>
      </section>
    </header>
  );
};

export default Header;
