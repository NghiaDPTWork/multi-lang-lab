export default function Button({ onAdd }: { onAdd: () => void }) {
  return (
    <button
      onClick={onAdd}
      className="px-3 py-1 bg-green-600 rounded cursor-pointer font-semibold hover:bg-green-700 transition-colors"
    >
      Add from Child
    </button>
  );
}
