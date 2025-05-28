import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import { Button } from "../../../generalComponents";
import { Link } from "react-router-dom";
import illustrationEmpty from "../../../assets/illustration-empty.svg";
import illustrationEmptyDark from "../../../assets/illustration-empty-dark.svg";
import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../../../api/history";
import { badgeStyles } from "../detection";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Radyab-e-Zakhm";
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });

  const history = data?.data?.history?.slice(0, 6) || [];
  return (
    <main className="w-full h-dvh ">
      <PageHeader title="Dashbaord" />
      <div className="lg:flex-row p-6 flex gap-6 flex-col flex-1 bg-neutral-50/75  dark:bg-neutral-900 rounded-tl-[40px] h-[calc(100vh-81px-80px)] lg:h-[calc(100vh-81px)] overflow-y-auto">
        <div className="flex flex-col gap-6 flex-1/2">
          {/* Detect Card  */}
          <div className="flex flex-col items-center justify-center text-center gap-6 p-6 lg:px-12 lg:py-10 lg:rounded-[48px] bg-white dark:bg-surface-2 rounded-xl  border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col gap-2">
              <h1 className="text-display-xs text-primary-text ">
                Start Detecting
              </h1>
              <p className="text-md font-medium text-secondary-text">
                Detect your ulcer with only one click using our precise AI
                algorithm for free, today.
              </p>
            </div>
            <Link to={"/detect"}>
              <Button label="Detect Ulcer" />
            </Link>
          </div>

          {/* Doctors Card  */}
          <div className="flex flex-col gap-6 p-6 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex items-center gap-4 justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-preset-2 font-medium text-primary-text">
                Top Doctors
              </h2>
              <Link
                to={"/doctors"}
                className="text-preset-3 font-semibold text-green-500 underline"
              >
                View all{" "}
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center flex-col gap-4 text-center text-primary-text ">
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
                    But no worries, soon you'll be able to find doctors'
                    information here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1/2">
          {/* History Card  */}

          <div className="flex flex-col gap-6 p-6 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="flex items-center gap-4 justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <h2 className="text-preset-2 font-medium text-primary-text">
                Detection History
              </h2>
              <Link
                to={"/history"}
                className="text-preset-3 font-semibold text-green-500 underline"
              >
                View all{" "}
              </Link>
            </div>
            <div className="">
              {isLoading ? (
                <p className="text-secondary-text">Loading...</p>
              ) : history?.length === 0 ? (
                <div className="flex items-center justify-center h-full">
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
                      <h3 className="text-preset-2">
                        You don't have any history yet.
                      </h3>
                      <p className="text-preset-3 text-secondary-text">
                        Once you start detecting, your history will be shown
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" rounded-lg shadow-sm dark:shadow-none max-w-3xl mx-auto border border-neutral-200 dark:border-neutral-800">
                  <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
                    <thead className="bg-neutral-100 dark:bg-neutral-900">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-primary-text">
                          Image
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-primary-text">
                          Result
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-primary-text">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-neutral-950 divide-y divide-neutral-100 dark:divide-neutral-800">
                      {history?.map((entry) => (
                        <tr key={entry.createdAt}>
                          <td className="px-4 py-3">
                            <a
                              href={entry.imgUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
                            >
                              View Image
                            </a>
                          </td>
                          <td className="px-4 py-3 font-medium">
                            <span
                              className={`px-3 py-1 text-sm font-medium rounded-full inline-block whitespace-nowrap
                 ${
                   badgeStyles[entry.result]?.bg ||
                   "bg-neutral-200 dark:bg-neutral-800"
                 }
                 ${badgeStyles[entry.result]?.text || "text-primary-text"}
               `}
                            >
                              {entry.result}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-secondary-text">
                            {new Date(entry.createdAt).toLocaleDateString(
                              undefined,
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
