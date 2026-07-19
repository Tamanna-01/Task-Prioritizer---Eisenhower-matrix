import { useState } from "react";
import { Plus } from "lucide-react";
import "./InputBar.css";

interface Props {
  onCreate: (text: string) => void;
}

function InputBar({ onCreate }: Props) {
  const [task, setTask] = useState("");

  const handleCreate = () => {
    if (!task.trim()) return;

    onCreate(task.trim());
    setTask("");
  };

  return (
    <div className="input-card">
      <div className="input-header">
        <h3>Add a new task</h3>
        <p>Capture your ideas before organizing them.</p>
      </div>

      <div className="input-bar">
        <input
          type="text"
          placeholder="What needs your attention today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreate();
            }
          }}
        />

        <button className="primary-btn" onClick={handleCreate}>
          <Plus size={18} />
          Add Task
        </button>
      </div>
    </div>
  );
}

export default InputBar;
