import ExampleInteractive from "@/components/example-interactive";
import Head from "next/head";

export default function Interactive() {
  return (
    <>
      <Head>
        <title>WDFM 5C Hack Week Template</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <ExampleInteractive></ExampleInteractive>
      </div>
    </>
  )
}
