import { useEffect, useRef, useState } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import { Button } from "../../../generalComponents";
import { useMutation } from "@tanstack/react-query";
import { detectUlcer } from "../../../api/detection";
import { showErrorToast, showSuccessToast } from "../../../lib/toastUtils";
import illustrationEmpty from "../../../assets/illustration-empty.svg";
import illustrationEmptyDark from "../../../assets/illustration-empty-dark.svg";

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

export const badgeStyles = {
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

export const Detection = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const [result, setResult] = useState({});

  useEffect(() => {
    document.title = "Detection | Radyab-e-Zakhm";
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: detectUlcer,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showSuccessToast(data.message);
        return;
      }

      setResult(resultsObj[data.data.result]);
    },
    onError: (error) => {
      console.error("Detection failed:", error);
      showErrorToast(error.message);
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDetectClick = () => {
    if (!image) {
      showErrorToast("Please upload an image first.");
      return;
    }

    const file = fileInputRef.current.files[0];
    if (!file) return;
    setResult({});
    mutate(file);
  };

  return (
    <main className="w-full h-dvh  bg-surface-2">
      <PageHeader title="Detection" />

      <div className="lg:flex-row flex flex-col flex-1 h-[calc(100vh-81px-80px)] lg:h-[calc(100vh-81px)] overflow-y-auto">
        <div className="pl-8 py-5 pr-4 border-r  border-neutral-200 dark:border-neutral-800 lg:flex flex-col gap-2 lg:w-[400px] h-full">
          <div className="text-primary-text flex flex-col gap-6">
            <p className="text-preset-3">
              Upload your image by clicking the button below. Then your image
              will be processed for detecting ulcer.
            </p>

            <div className="h-64 w-full flex items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden bg-muted">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                "No image uploaded yet."
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            <div className="flex items-center gap-4">
              <Button
                label="Upload Image"
                variant="outlined"
                onClick={handleUploadClick}
              />
              <Button
                label={isPending ? "Detecting..." : "Start Detecting"}
                onClick={handleDetectClick}
                disabled={isPending}
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          {result?.title && result?.description ? (
            <div className="p-4 md:p-8 max-w-[528px] flex flex-col gap-6">
              <h2 className="text-preset-3 text-primary-text font-semibold">
                Detection Result
              </h2>
              <div className="flex flex-col gap-4">
                <h3
                  className={`inline-block px-3 py-1 self-start rounded-full text-sm font-medium ${
                    badgeStyles[result?.title]?.bg || "bg-gray-100"
                  } ${badgeStyles[result?.title]?.text || "text-gray-800"}`}
                >
                  {result?.title}
                </h3>
                <p className="text-preset-4 text-secondary-text">
                  {result?.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="flex items-center flex-col gap-4 text-center text-primary-text">
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
                  <h3 className="text-preset-2">Results will be shown here</h3>
                  <p className="text-preset-3 text-secondary-text">
                    Start Detecting to see results
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
