"use client"

import Head from "next/head";
import Calculator from "@/components/calculator";

export default function Home() {
  return <>
  <div className="bg-gray-900 min-h-screen">
    <h1 className="text-white text-center">
      EK Simple Calculator <BsCalculator />
    </h1>
  <div className="flex items-center justify-center ">
    <Calculator />
  </div>
  </div>
  </>;
}
