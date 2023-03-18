import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

/* design v2 (in v1 primary: 'color-1')*/ 
const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || {primary: 'color-2', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName})
    }

    /* save theme settings to local storage */
    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState))
    }, [themeState.primary, themeState.background])

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
    return useContext(ThemeContext);
}