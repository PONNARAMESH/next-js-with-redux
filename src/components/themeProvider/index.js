import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const themeData = useSelector(store => store?.theme || {});

  return (
    <div className={`nextJsProject ${themeData?.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      {children}
    </div>
  );
};

export default ThemeProvider;