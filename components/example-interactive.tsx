import { ReactNode, useState } from "react";
import Example from "./example";

export default function ExampleInteractive(props: {children?: ReactNode}) {
    const [text, setText] = useState<string>("");
    const [textList, setTextList] = useState<string[]>([]);

    function onButtonClick() {
        alert("button clicked!");
    }

    function onListButtonClick(i: number) {
        alert(i);
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
        <div className="p-4 border rounded bg-white shadow">
            <input type="text" value={text} onChange={e => setText(e.target.value)} className="border" placeholder="write something here"/>
            <Example>
                {text.toUpperCase()}
            </Example>
            <button className="p-2 bg-blue-500 text-white" onClick={onAdd}>Add to list</button>
            {textList.map((d, i) => (
                <div className="p-2 rounded bg-gray-800 text-white my-4">
                    <p>{d}</p>
                    <button className="bg-red-500 text-white p-1 rounded text-sm" onClick={() => onListButtonClick(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}