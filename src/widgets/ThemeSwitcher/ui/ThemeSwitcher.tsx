import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Switch } from "@/shared/ui/Switch/Switch";
import { Theme } from "@/shared/types/theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === Theme.DARK ? true : false}
      onClick={toggleTheme}
    />
  );
};
