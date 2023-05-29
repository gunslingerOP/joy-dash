"use client";
import "@fontsource/public-sans";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth");
}
