import { ReactNode } from "react";

export default function Codeblock(props: {children?: ReactNode}) {
    return (
        <pre className="bg-gray-800 text-white rounded p-4">
            <code>
                {props.children}
            </code>
        </pre>
    )
}