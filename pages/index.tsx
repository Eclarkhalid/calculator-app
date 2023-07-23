import Head from "next/head";
import Calculator from "@/components/calculator";

export default function Home() {
  return <>
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <Head>
      <title>Calculator App</title>

    </Head>
    <Calculator />
  </div>
  </>;
}
