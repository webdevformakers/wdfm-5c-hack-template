import { ReactNode } from "react";

export default function Example(props: {children?: ReactNode}) {
    return (
        <p className="text-red-500 my-4">{props.children}</p>
    )
}