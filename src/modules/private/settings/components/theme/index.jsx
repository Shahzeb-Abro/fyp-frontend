import { useEffect, useState } from "react";
import { LogoutIcon, MoonIcon, SunIcon } from "../../../../../assets/svgAssets";
import { PageHeader } from "../../../../../layout/dashboardLayout/components";
import { Links } from "../links";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../constants/routes";
import { Button, Option } from "../../../../../generalComponents";
import { Logout } from "../logout";

const themeOptions = [
  {
    id: 0,
    title: "Light Mode",
    subtitle: "Pick a clean and classic light theme",
    icon: <SunIcon />,
    value: "light",
  },
  {
    id: 1,
    title: "Dark Mode",
    subtitle: "Select a sleek and modern dark theme",
    icon: <MoonIcon />,
    value: "dark",
  },
];

export const ThemeSettings = () => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.title = "Theme Settings | Radyab-e-Zakhm";
  }, []);

  const handleThemeChange = () => {
    localStorage.setItem("theme", selectedOption);

    // Add or remove the 'dark' class from the body element
    if (selectedOption === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2">
      <PageHeader title="Settings" />

      <div className="flex flex-1 h-[calc(100vh-81px)] ">
        <div className=" pl-8 py-5 pr-4 border-r hidden border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 w-[260px] h-full">
          <Links />
          <Logout />
        </div>

        <div className="flex-1 ">
          <div className="p-4 md:p-8 max-w-[528px] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-preset-3 text-primary-text font-semibold">
                Color Theme
              </h2>
              <p className="text-preset-4 text-secondary-text">
                Choose your color theme:
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {themeOptions.map((option) => (
                <Option
                  key={option.id}
                  title={option.title}
                  subtitle={option.subtitle}
                  icon={option.icon}
                  selected={selectedOption === option.value}
                  setSelected={() => setSelectedOption(option.value)}
                  value={option.value}
                />
              ))}
            </div>

            <div className="flex justify-end w-full">
              <Button label="Apply Changes" onClick={handleThemeChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
