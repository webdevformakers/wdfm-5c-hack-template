import { ReactNode } from "react";

export default function YourComponent(props: {children?: ReactNode}) {
    return (
        <div>
            {props.children}
        </div>
    )
}