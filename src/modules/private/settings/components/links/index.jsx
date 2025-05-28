import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  LockIcon,
  SunIcon,
} from "../../../../../assets/svgAssets";
import ROUTES from "../../../../../constants/routes";

const LINKS = [
  {
    id: 0,
    name: "Color Theme",
    icon: <SunIcon />,
    route: ROUTES.THEME_SETTINGS,
  },

  {
    id: 2,
    name: "Change Password",
    icon: <LockIcon />,
    route: ROUTES.ACCOUNT_SETTINGS,
  },
];

export const Links = () => {
  return (
    <div className="flex flex-col pb-2 border-b border-neutral-200 dark:border-neutral-800">
      {LINKS.map((link) => (
        <NavLink
          key={link.id}
          to={link.route}
          className={({ isActive }) =>
            `flex items-center justify-between gap-2 py-2.5 px-3 text-preset-4 text-secondary-text rounded-lg ${
              isActive ? "bg-surface " : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex items-center gap-2">
                <span
                  className={isActive ? "text-green-500" : "text-primary-text"}
                >
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </div>
              {isActive && (
                <span className="text-primary-text">
                  <ChevronRight />
                </span>
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
