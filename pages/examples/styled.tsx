import Example from "@/components/example";
import Head from "next/head";

export default function Styled() {
  return (
    <>
      <Head>
        <title>WDFM 5C Hack Week Template</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" alt="WDFM logo" className="h-32 rounded"/>
          <img src="/5chack.png" alt="5c hackathon banner" className="h-32 rounded"/>
        </div>
        <p className="text-4xl font-bold my-4">Web dev for makers 5c hack week template</p>
        <p>Hello world!</p>
      </div>
    </>
  )
}
