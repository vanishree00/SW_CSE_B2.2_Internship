// useEffect hook

import { createContext, useContext } from "react";

const ThemeContext = createContext();

//child component
function ThemedBox() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`hook-box theme-${theme}`}
      style={{
        background: theme === "dark" ? "#222222f2" : "#f19898",
        color: theme === "dark" ? "#f19898" : "#222",
        padding: 15,
      }}
    >
      {/* <h2>useContext example</h2> */}
      <p>Current theme: {theme}</p>
    </div>
  );
}

//Parent component
function ThemeProviderDemo() {
  const currentTheme = "dark";

  return (
    <div>
      <h3>Theme Demo</h3>
      <ThemeContext.Provider value={currentTheme}>
        <ThemedBox />
        
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProviderDemo;