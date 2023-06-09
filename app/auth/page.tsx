"use client";
import React, { useState } from "react";
import Grid from "@mui/joy/Grid";

import Image from "next/image";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import FormLabel from "@mui/joy/FormLabel";
import { Envelope, Key } from "@phosphor-icons/react";
import { redirect, useRouter } from "next/navigation";
const logo = require("../../public/Vector.png");
const Page = () => {
  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);

    setTimeout(() => {
      // NOTE: This is just to show the spinner
      push("/home");
    }, 1000);
  }

  return (
    <div className="flex   login-bg h-screen">
      <Grid container sx={{ flexGrow: 1 }} alignItems={"stretch"}>
        <Grid
          sx={{
            display: { xs: "none", md: "block" },
          }}
          sm={6}
        >
          <article className=" sm:p-8  p-0 flex flex-col	justify-between		  h-full">
            <div className="flex-wrap ">
              <div className="flex gap-4 items-center">
                <Image
                  src={logo}
                  className="w-16"
                  alt="Picture of the author"
                />
                <span className="font-semibold		text-4xl	">Joyful</span>
              </div>
              <p className="text-5xl	mt-12 font-bold		">
                Launch your app today, not next month.
              </p>
            </div>

            <div className="flex-wrap ">
              <div className="flex gap-4 items-center">
                <span className=" 	text-4xl	">
                  Why should you join the Joyful community?
                </span>
              </div>

              <ul className="check text-lg	 pt-4 pl-11">
                <li className="p-3">Amazing and helpful people</li>

                <li className="p-3">
                  Exclusive deals and behind the curtain components
                </li>
                <li className="p-3">Partnerships</li>
              </ul>
            </div>
          </article>
        </Grid>
        <Grid xs={12} md={6} className="   p-2 bg-white  ">
          <article className="sm:p-8 lg:p-16 xl:p-64   flex-wrap flex content-center  h-full">
            <div className="flex-wrap md:hidden ">
              <div className="flex gap-4 items-center">
                <Image src={logo} className="w-8" alt="Picture of the author" />
                <span className="font-semibold		text-2xl	">Joyful</span>
              </div>
              <p className="text-4xl	mt-4 mb-12 font-semibold		">
                Launch your app today, not next month.
              </p>
            </div>

            <form
              className="flex-1"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <FormLabel sx={{ fontWeight: "500" }}>Email Address</FormLabel>

              <Input
                startDecorator={<Envelope size={24} />}
                placeholder="Enter your email address"
                required
                className="mb-5 !bg-[#EEEFF0]"
                type="email"
              />

              <FormLabel sx={{ fontWeight: "500" }}>Password</FormLabel>

              <Input
                startDecorator={<Key size={24} />}
                placeholder="Enter your password"
                type="password"
                required
                className="  !bg-[#EEEFF0]"
              />
              <div className="my-4">
                <a href="#" className="text-blue-600  	">
                  Fogot password?
                </a>
              </div>
              <Button
                loading={loading}
                type="submit"
                className="bg-blue-600 w-full"
                color="primary"
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </form>
          </article>
        </Grid>
      </Grid>
    </div>
  );
};

export default Page;
