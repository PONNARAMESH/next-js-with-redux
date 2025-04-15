'use client';
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const themeData = useSelector(store => store?.theme || {});

  useEffect(() => {
    // console.log("##document.documentElement: ", document.body.style);
    document.documentElement.classList.add(
      // "data-theme",
      themeData?.theme ? "dark-theme" : "light-theme"
    );
  }, [themeData?.theme]);

  return (
    <>
      {children}
    </>
  );
};

export default ThemeProvider;