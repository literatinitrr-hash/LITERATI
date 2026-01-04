import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./admin.css";

export default function SearchBar({ value, onChange }) {
  const [localValue, setLocalValue] = useState(value || "");

  // keep in sync if parent updates
  useEffect(() => {
    setLocalValue(value || "");
  }, [value]);

  // debounce change
  useEffect(() => {
    const id = setTimeout(() => {
      onChange(localValue);
    }, 200);

    return () => clearTimeout(id);
  }, [localValue, onChange]);

  return (
    <div
      className="search-bar"
      role="search"
      aria-label="Search participants"
    >
      <Search className="search-icon" aria-hidden="true" />

      <input
        type="text"
        placeholder="Search participants..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />

      {localValue && (
        <button
          className="search-clear"
          onClick={() => setLocalValue("")}
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
