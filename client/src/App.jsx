import { useState, useEffect } from "react";

function App() {
    const [theme, setTheme] = useState("light");

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {

      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      }else {
        document.querySelector("html").classList.remove("dark");
      }
    }, [theme])
    

    return (
        <div className="dark:bg-neutral-900 w-full h-screen">
            <button className="dark:text-white" onClick={handleTheme}>
                Change theme
            </button>
        </div>
    );
}

export default App;
