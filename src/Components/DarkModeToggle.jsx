import { useEffect, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? (
        <FaToggleOn size={30} className="text-pink-500" />
      ) : (
        <FaToggleOff size={30} className="text-gray-500" />
      )}
    </button>
  );
};

export default DarkModeToggle;
