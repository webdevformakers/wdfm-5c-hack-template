import { ReactNode, useState } from "react";
import Example from "./example";

export default function PlannerInteractive(props: {children?: ReactNode}) {
    const [text, setText] = useState<string>("");
    const [textList, setTextList] = useState<string[]>([]);

    function onButtonClick() {
        alert("button clicked!");
    }

    function onListButtonClick(i: number) {
        setTextList(prev => {
            let newArray = [...prev];
            newArray.splice(i, 1)
            return newArray;
        });
    }

    function onAdd() {
        if (text) {
            setTextList(prev => [...prev, text]);
            setText("");
        }
    }

    return (
        <div className="p-4 rounded bg-blue-100 shadow">
            <p className="uppercase font-bold text-sm mb-6">{props.children}</p>
            {textList.map((d, i) => (
                <div className="p-2 bg-white shadow-sm my-2">
                    <p>{d}</p>
                    <button className="text-red-500 uppercase font-bold text-sm" onClick={() => onListButtonClick(i)}>Delete</button>
                </div>
            ))}
            <input type="text" value={text} onChange={e => setText(e.target.value)} className="border w-full p-1 mt-6 mb-2" placeholder="Course name"/>
            <button className="p-2 bg-blue-500 text-white w-full text-sm" onClick={onAdd}>Add to list</button>
        </div>
    )
}