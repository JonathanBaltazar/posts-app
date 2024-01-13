import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostForm from './pages/PostForm'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/new-post",
    element: <PostForm />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
])

function App() {
    /*
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
    */

    return (
      <RouterProvider router={router}/>
    )
}

export default App;
