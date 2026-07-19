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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  return (
    <div className="input-card">
      <div className="input-header">
        <h3>Add a new task</h3>
        <p>Capture your ideas before organizing them.</p>
      </div>

      <div className="input-controls">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs your attention today?"
        />

        <button onClick={handleCreate}>
          <Plus size={18} />
          Add Task
        </button>
      </div>
    </div>
  );
}

export default InputBar;
