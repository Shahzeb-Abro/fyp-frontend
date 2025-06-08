import { useEffect, useState } from "react";
import { PageHeader } from "../../../../../layout/dashboardLayout/components";
import { Links } from "../links";

import { Logout } from "../logout";
import { FormattedMessage } from "react-intl";

import Profile from "../../../../../assets/profile.png";
import { Button } from "../../../../../generalComponents";
import { DeleteAccountModal } from "../../../../../modals";

export const ProfileSettings = () => {
  useEffect(() => {
    document.title = "Profile Settings | Radyab-e-Zakhm";
  }, []);

  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

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

        <div className="flex-1 rounded-t-xl flex flex-col">
          {/* Heading  */}
          <div className="p-4 md:p-8 max-w-[528px]  flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl text-primary-text font-semibold">
                <FormattedMessage id="SETTINGS.PROFILE_DETAILS" />
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={Profile}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-primary-text">
                Shahzeb Abro
              </h3>
              <p className="text-sm text-secondary-text">
                shahzebaliabro12345@gmail.com
              </p>
            </div>
          </div>

          <div className="p-1 bg-transparent rounded-[24px] border border-neutral-200 dark:border-neutral-800 text-primary-text w-full max-w-sm h-[56px] mt-4 md:mt-8 flex sjustify-between">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 focus:outline-none text-md font-medium text-primary-text px-4"
            />
            <Button label="Save" />
          </div>
          <div className="w-full max-w-md h-[1px] bg-neutral-200 dark:bg-neutral-800 my-4 lg:my-8"></div>

          <div>
            <h3 className="text-2xl text-primary-text font-medium">
              Delete my account
            </h3>
            <p className="text-md text-secondary-text mt-2">
              Click on following button button to delete your account...
            </p>
            <Button
              label="Delete my account"
              variant="destructive"
              className="mt-4"
              onClick={() => setShowDeleteAccountModal(true)}
            />
          </div>
        </div>
      </div>

      {showDeleteAccountModal && (
        <DeleteAccountModal
          showModal={showDeleteAccountModal}
          setShowModal={setShowDeleteAccountModal}
        />
      )}
    </div>
  );
};
