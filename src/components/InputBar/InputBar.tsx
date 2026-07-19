import { useState } from "react";
import "./InputBar.css";

interface Props {
    onCreate: (text: string) => void;
}

function InputBar({ onCreate }: Props) {
    const [task, setTask] = useState("");

    const handleCreate = () => {
        if (!task.trim()) return;

        onCreate(task);

        setTask("");
    };

    return (
        <div className="input-bar">
            <input
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleCreate();
                    }
                }}
            />

            <button onClick={handleCreate}>
                Create
            </button>
        </div>
    );
}

export default InputBar;