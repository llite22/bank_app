import { Theme } from "@/shared/types/theme";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";


interface UseThemeResult {
    toggleTheme: () => void;
    theme?: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (theme === Theme.DARK) {
            document.documentElement.classList.add(Theme.DARK);
        } else {
            document.documentElement.classList.remove(Theme.DARK);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme }
}