"use client";

import { Switch } from "@/components";

export const LightDarkModeToggle = () => {
  const setLightMode = () => document.body.setAttribute("data-theme", "light");
  const setDarkMode = () => document.body.setAttribute("data-theme", "dark");

  return (
    <Switch
      initialState={true}
      onToggleOn={setLightMode}
      onToggleOff={setDarkMode}
    />
  );
};
