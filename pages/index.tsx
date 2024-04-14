import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WDFM 5C Hack Week Template</title>
      </Head>
      <div>
        <img src="/5chack.png" alt="5c hackathon banner" />
        <p>Web dev for makers 5c hack week template</p>
        <p>Hello world!</p>
        <p><a href="/examples/components" className="underline text-blue-500">EXAMPLE: components</a></p>
        <p><a href="/examples/planner" className="underline text-blue-500">EXAMPLE: planner</a></p>
      </div>
    </>
  )
}
