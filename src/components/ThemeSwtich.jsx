import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const storage = typeof window !== "undefined" ? localStorage.theme : null;

  const [theme, setTheme] = useState(storage);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
