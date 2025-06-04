import { FormattedDate } from "react-intl";
import { ImageUploader, Modal } from "../../generalComponents";

// import illustrationEmpty from "../../assets/illustration-empty.svg";
// import illustrationEmptyDark from "../../assets/illustration-empty-dark.svg";

const resultsObj = {
  "Complex wound": {
    title: "Complex wound",
    description:
      "This is a complex wound that requires immediate medical attention. Please consult a healthcare professional for further evaluation and treatment.",
  },
  "Immediately treatable": {
    title: "Immediately Treatable",
    description:
      "This wound is immediately treatable. Please follow the recommended treatment plan and consult a healthcare professional if needed.",
  },
  "Non advanced treatable": {
    title: "Non-advanced Treatable",
    description:
      "This wound is non-advanced and can be treated with standard care. Please follow the recommended treatment plan.",
  },
  "Treatable within 4 weeks": {
    title: "Treatable within 4 weeks",
    description:
      "This wound is treatable within 4 weeks. Please follow the recommended treatment plan and consult a healthcare professional if needed.",
  },
};

const badgeStyles = {
  "Complex wound": {
    bg: "bg-red-100 dark:bg-red-200/10",
    text: "text-red-800 dark:text-red-400",
  },
  "Immediately treatable": {
    bg: "bg-orange-100 dark:bg-orange-200/10",
    text: "text-orange-800 dark:text-orange-400",
  },
  "Non advanced treatable": {
    bg: "bg-yellow-100 dark:bg-yellow-200/10",
    text: "text-yellow-800 dark:text-yellow-400",
  },
  "Treatable within 4 weeks": {
    bg: "bg-green-100 dark:bg-green-200/10",
    text: "text-green-800 dark:text-green-400",
  },
};

export const HistoryModal = ({
  showModal,
  setShowModal,
  history,
  isHistory,
}) => {
  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      title="Detection History"
    >
      <div
        className="flex flex-col gap-4 mb-12"
        data-modalid="ulcer-detect-modal"
      >
        <ImageUploader
          image={history?.imgUrl}
          isHistory={isHistory}
          isSensitive={true}
        />

        <div className="flex-1">
          {history?.result && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-1 items-center gap-4 justify-between text-primary-text ">
                <h2 className="text-lg font-semibold">Detection Result</h2>
                <span>
                  <FormattedDate value={history?.createdAt} />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3
                  className={`inline-block px-3 py-1 self-start rounded-full text-sm font-medium ${
                    badgeStyles[history?.result]?.bg || "bg-gray-100"
                  } ${badgeStyles[history?.result]?.text || "text-gray-800"}`}
                >
                  {history?.result}
                </h3>
                <p className="text-preset-4 text-secondary-text">
                  {resultsObj[history?.result]?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
