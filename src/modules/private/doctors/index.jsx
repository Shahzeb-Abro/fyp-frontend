import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import illustrationEmpty from "../../../assets/illustration-empty.svg";
import illustrationEmptyDark from "../../../assets/illustration-empty-dark.svg";

export const Doctors = () => {
  useEffect(() => {
    document.title = "Doctors | Radyab-e-Zakhm";
  }, []);
  return (
    <main className="w-full h-dvh bg-surface-2">
      <PageHeader title="Doctors" />
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col gap-4 text-center text-primary-text mt-16">
          <img
            src={illustrationEmpty}
            alt="Empty Illustration"
            className="dark:hidden"
          />
          <img
            src={illustrationEmptyDark}
            alt="Empty Illustration"
            className="hidden dark:block"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-preset-2">No doctors yet.</h3>
            <p className="text-preset-3 text-secondary-text">
              But no worries, soon you'll be able to find doctors' information
              here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
