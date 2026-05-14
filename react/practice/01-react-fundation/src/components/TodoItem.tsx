interface TodoItemProps {
  item: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ item, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center bg-slate-100 px-3 py-2 rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-200/50 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          className="w-4 h-4 rounded text-emerald-600 border-slate-300 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
        />
        <span
          className={`font-medium transition-all cursor-pointer ${
            item.completed ? "line-through text-slate-400 italic" : ""
          }`}
          onClick={() => onToggle(item.id)}
        >
          {item.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(item.id)}
        className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors ml-2"
      >
        Xóa
      </button>
    </li>
  );
}

export default TodoItem;
