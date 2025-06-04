import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Modal } from "../../generalComponents";
import { deleteAllHistory } from "../../api/history";
import { showErrorToast, showSuccessToast } from "../../lib/toastUtils";

export const DeleteAllHistoryModal = ({ showModal, setShowModal }) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteAllHistory,
    onSuccess: (data) => {
      if (data.status !== "success") {
        showSuccessToast("Entire history deleted successfully");
        setShowModal(false);
        queryClient.invalidateQueries({ queryKey: ["history"] });
        return;
      }
    },
    onError: () => {
      showErrorToast("An error occurred while deleting the history");
    },
  });

  const handleDelete = () => {
    mutate();
  };
  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      title="Delete Entire History"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button
            label="Cancel"
            variant="tertiary"
            onClick={() => setShowModal(false)}
          />
          <Button
            label="Delete History"
            variant="destructive"
            onClick={handleDelete}
            isLoading={isPending}
          />
        </div>
      }
    >
      <div className="flex flex-col gap-4 mb-12">
        <div className="text-md text-secondary-text">
          Are you sure you want to delete entire history? This action is
          irreversible.
        </div>
      </div>
    </Modal>
  );
};
