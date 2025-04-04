import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const applyTheme = (theme) => {
    document.body.classList.remove("bg-light", "text-dark", "bg-dark", "text-white");
    if (theme === "dark") {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.add("bg-light", "text-dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <button className="btn btn-primary mt-3" onClick={toggleTheme}>
      Toggle
    </button>
  );
}
