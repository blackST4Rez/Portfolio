import { useEffect, useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Home />
      </div>
    </>
  );
}

export default App;