import { useState, useEffect, useLayoutEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use layout effect to apply theme on component mount
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check for system preference using matchMedia
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(prefersDarkMode.matches);
    }
  }, []);

  // Update theme and save to local storage
  const updateTheme = (newIsDarkMode) => {
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");
  };

  const handleToggle = () => {
    updateTheme(!isDarkMode);
  };

  // Use effect to update theme on changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={handleToggle}
      className="text-lg w-8 h-8 rounded-full dark:ring-primary/[.8] ring-secondary/[.8] ring-2"
    >
      {isDarkMode ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeSwitcher;
