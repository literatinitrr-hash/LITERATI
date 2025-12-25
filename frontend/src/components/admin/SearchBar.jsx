import { Search } from "lucide-react";
import "./admin.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Search participants..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
