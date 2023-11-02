import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";

import { useState, createContext, useContext } from "react";
const DashboardContext = createContext();
const Dashboard = () => {
  // temp
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, setTheme] = useState("original");

  const themes = ["original", "city-theme", "desert-theme", "arctic-theme"];

  const toggleDarkTheme = () => {
    console.log("clikced");
    let newTheme;

    if (theme === "original") {
      newTheme = "city-theme";
    } else {
      const currentIndex = themes.indexOf(theme);
      newTheme =
        currentIndex !== themes.length - 1
          ? themes[currentIndex + 1]
          : themes[0];
    }

    setTheme(newTheme);

    themes.forEach((themeName) => {
      document.body.classList.remove(themeName);
    });

    if (newTheme !== "original") {
      document.body.classList.add(newTheme);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard;
