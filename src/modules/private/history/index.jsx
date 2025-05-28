import { useEffect } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import { useQuery } from "@tanstack/react-query";
import { getHistory } from "../../../api/history";
import { badgeStyles } from "../detection";
import illustrationEmpty from "../../../assets/illustration-empty.svg";
import illustrationEmptyDark from "../../../assets/illustration-empty-dark.svg";

export const History = () => {
  useEffect(() => {
    document.title = "History | Radyab-e-Zakhm";
  }, []);
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });

  const history = data?.data?.history || [];
  return (
    <main className="w-full h-dvh ">
      <PageHeader title="History" />

      <div className="p-6 bg-neutral-50/75  dark:bg-neutral-900 rounded-tl-4xl lg:h-[calc(100vh-81px)] overflow-y-auto">
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
                  Once you start detecting, your history will be shown here.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[calc(100vh-81px-80px-30px)] lg:h-[calc(100vh-81px-50px)] overflow-y-auto rounded-lg shadow-sm dark:shadow-none max-w-3xl mx-auto border border-neutral-200 dark:border-neutral-800">
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
      ${badgeStyles[entry.result]?.bg || "bg-neutral-200 dark:bg-neutral-800"}
      ${badgeStyles[entry.result]?.text || "text-primary-text"}
    `}
                      >
                        {entry.result}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-text">
                      {new Date(entry.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};
