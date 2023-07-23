"use client"

import { BsCalculator } from 'react-icons/bs'
import Calculator from "@/components/calculator";

export default function Home() {
  return <>
  <div className="bg-gray-900 min-h-screen">
    <h1 className="flex justify-center items-center font-medium gap-5 p-20 text-white text-center">
      EK Simple Calculator <BsCalculator />
    </h1>
  <div className="flex items-center justify-center ">
    <Calculator />
  </div>
  </div>
  </>;
}
