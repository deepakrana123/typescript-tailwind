import { useState, useEffect } from "react";
import { COLORS } from "../constant";

function ThemeColorSwitcher() {
  const [color, setColor] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const onToggle = (id: string) => () => {
    setColor(id);
  };
  useEffect(() => {
    setMounted(true);
    setColor(document.documentElement.dataset.color || "indigo");
  }, []);

  useEffect(() => {
    if (!mounted || color === undefined) return;

    document.documentElement.dataset.color = color;
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <div className="mb-20 flex items-center justify-center space-x-4 animate-ring animate-bounce  hover:animate-pulse">
      {COLORS.map(({ id, name }) => (
        <span
          key={id}
          onClick={onToggle(id)}
          className={`theme-color ${name} ${color == id && "active"}`}
        ></span>
      ))}
    </div>
  );
}

export default ThemeColorSwitcher;
