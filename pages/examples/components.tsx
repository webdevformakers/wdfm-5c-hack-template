import Codeblock from "@/components/examples/codeblock";
import Example from "@/components/examples/example";
import Head from "next/head";

export default function Components() {
  return (
    <>
      <Head>
        <title>Example: using React components</title>
      </Head>
      <div className="max-w-2xl mx-auto">
        <Example>This is a component!</Example>
        <Example>It's useful for re-using a style or some other functionality multiple times without hand-rewriting it.</Example>
        <Example>In your code, they look like custom tags.</Example>
        <Codeblock>
            {`<Example>In your code, they look like custom tags.</Example>`}
        </Codeblock>
        <Example>To make one, create a file in components — you can make a copy of the "example.tsx" file – with the following code:</Example>
        <Codeblock>
            {`import { ReactNode } from "react";

export default function Example(props: {children?: ReactNode}) {
    return (
        <p className="text-red-500 my-4">{props.children}</p>
    )
}`}
        </Codeblock>
        <Example>Change the classnames or other code there to what you want. Then, import the component by putting the following line at the top of your document.</Example>
        <Codeblock>
            {`import Example from "@/components/example";`}
        </Codeblock>
        <Example>Now it's ready to use!</Example>
      </div>
    </>
  )
}
