import { createContext, useContext, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ToggleContext = createContext();

function ToggleProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ToggleContext.Provider value={{ isDark }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="fixed top-4 left-4 z-50">
          <button
            className={`p-3 rounded-xl transition-all duration-300 ${
              isDark
                ? "bg-gradient-to-br from-purple-600 to-pink-600  hover:from-purple-500 hover:to-pink-500"
                : "bg-gradient-to-br from-purple-500 to-pink-500  hover:from-purple-600 hover:to-pink-600"
            } shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`}
            onClick={() => setIsDark((c) => !c)}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <IoSunnyOutline className="w-5 h-5" />
            ) : (
              <IoMoonOutline className="w-5 h-5" />
            )}
          </button>
        </div>
        {children}
      </div>
    </ToggleContext.Provider>
  );
}

export function useDark() {
  const context = useContext(ToggleContext);
  return context;
}

export default ToggleProvider;
