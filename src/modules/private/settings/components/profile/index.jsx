import { useEffect } from "react";
import { PageHeader } from "../../../../../layout/dashboardLayout/components";
import { Links } from "../links";

import { Logout } from "../logout";
import { FormattedMessage } from "react-intl";

export const ProfileSettings = () => {
  useEffect(() => {
    document.title = "Profile Settings | Radyab-e-Zakhm";
  }, []);

  const selectedLanguage = localStorage.getItem("language");

  return (
    <div className="w-full flex-1 max-h-dvh h-full bg-surface-2 ">
      <PageHeader title="Settings" />
      <div
        className={`lg:flex-row p-6 flex gap-6 flex-col flex-1 bg-neutral-50/75  dark:bg-neutral-900 ${
          selectedLanguage === "ur" ? "rounded-tr-[40px]" : "rounded-tl-[40px]"
        } h-[calc(100vh-81px-80px)] lg:h-[calc(100vh-81px)] overflow-y-auto`}
      >
        <div
          className={` pl-8 py-5 pr-4 hidden border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 w-[260px] h-full ${
            selectedLanguage === "ur" ? "border-l" : "border-r"
          }`}
        >
          <Links />
          <Logout />
        </div>

        <div className="flex-1 rounded-t-xl ">
          <div className="p-4 md:p-8 max-w-[528px] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl text-primary-text font-semibold">
                <FormattedMessage id="SETTINGS.PROFILE_DETAILS" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
