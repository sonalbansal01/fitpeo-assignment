import Footer from "./components/Footer";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import { useEffect, useState } from "react";
import Main from "./ui/Main";
import Profile from "./components/Profile";
import Content from "./ui/Content";
import NavBar from "./components/NavBar";
import MainContent from "./ui/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("isDarkMode", `${!darkMode}`);
  };

  const toogleSliderbar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (localStorage.getItem("isDarkMode")) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSliderbar={toogleSliderbar}
      />
      <Slidebar isSidebarOpen={isSidebarOpen} />
      <MainContent />
    </div>
  );
}

export default App;
