import { useEffect } from "react";
import { Theme } from "@/shared/types/theme";

export const useThemeSwitch = (theme?: Theme) => {
  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add(Theme.DARK);
    } else {
      document.documentElement.classList.remove(Theme.DARK);
    }
  }, [theme]);
};
