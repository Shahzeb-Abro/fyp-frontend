import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Modal } from "../../generalComponents";
import { deleteHistory } from "../../api/history";
import { showErrorToast, showSuccessToast } from "../../lib/toastUtils";

export const DeleteHistoryModal = ({ showModal, setShowModal, history }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteHistory,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showSuccessToast("History item deleted successfully");
        setShowModal(false);
        queryClient.invalidateQueries({ queryKey: ["history"] });
        return;
      }
    },
    onError: (error) => {
      console.error("Detection failed:", error);
      showErrorToast("An error occurred while deleting the history item");
    },
  });

  const handleDelete = () => {
    mutate(history._id);
  };
  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      title="Delete History Item"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button
            label="Cancel"
            variant="tertiary"
            onClick={() => setShowModal(false)}
          />
          <Button
            label="Delete"
            variant="destructive"
            onClick={handleDelete}
            isLoading={isPending}
          />
        </div>
      }
    >
      <div
        className="flex flex-col gap-4 mb-12"
        data-modalid="ulcer-detect-modal"
      >
        <div className="text-md text-secondary-text">
          Are you sure you want to delete this history item? This action is
          irreversible.
        </div>
      </div>
    </Modal>
  );
};
