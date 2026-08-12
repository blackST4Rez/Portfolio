import { useState } from "react";
import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";


const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


    return (
      <>
        <div className={`min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
          <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home darkMode={darkMode} />
        </div>
      </>
    );
  }

  export default App;
