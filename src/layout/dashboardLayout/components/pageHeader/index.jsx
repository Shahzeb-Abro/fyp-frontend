import { Link } from "react-router-dom";
import { SettingsIcon } from "../../../../assets/svgAssets";
import ROUTES from "../../../../constants/routes";
import { LogoLink } from "../sidebar/components";
import { Button } from "../../../../generalComponents";
import { UlcerDetectModal } from "../../../../modals/ulcerDetectModal";
import { useState } from "react";
export const PageHeader = ({ title, isLargeHidden = false }) => {
  const [isUlcerModalOpen, setIsUlcerModalOpen] = useState(false);
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800">
      <div className="lg:hidden py-3 px-4 h-11 md:py-4 md:px-8 md:h-[74px] dark:bg-neutral-800 text-primary-text bg-neutral-100 flex items-center">
        <LogoLink />
      </div>
      <div className="flex rounded-t-2xl lg:rounded-none bg-surface-2 items-center justify-between lg:h-[81px]  p-4 pb-0 lg:py-8 lg:px-8  pt-0">
        <h1
          className={`text-2xl font-bold text-primary-text dark:text-white ${
            isLargeHidden && "hidden lg:block"
          }`}
        >
          {title}
        </h1>

        <div className=" items-center gap-4 hidden lg:flex">
          <div className="flex items-center gap-4 ">
            <Button
              label="Detect Ulcer"
              className="text-xs"
              onClick={() => setIsUlcerModalOpen(true)}
            />

            <div className="w-[1px] h-10 flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="flex items-center gap-2 divide-neutral-200 dark:divide-neutral-800">
              <div className="flex items-center justify-center bg-pink-600 text-white rounded-full size-8 text-sm font-medium">
                SA
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[12px] leading-[12px]  font-medium text-primary-text">
                  Shahzeb Abro
                </p>
                <p className="text-xs text-secondary-text">shahzeb@gmail.com</p>
              </div>
            </div>

            <div className="w-[1px] h-10 flex-1 bg-neutral-200 dark:bg-neutral-800"></div>

            <Link
              to={ROUTES.THEME_SETTINGS}
              className="text-primary-text size-[42px] rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center justify-center "
            >
              <SettingsIcon />
            </Link>
          </div>
        </div>
      </div>

      {isUlcerModalOpen && (
        <UlcerDetectModal
          showModal={isUlcerModalOpen}
          setShowModal={setIsUlcerModalOpen}
        />
      )}
    </div>
  );
};
