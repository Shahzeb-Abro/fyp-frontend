import { Button, Modal } from "../../generalComponents";

export const DeleteAccountModal = ({ showModal, setShowModal }) => {
  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      title="Delete Account"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button
            label="Cancel"
            variant="tertiary"
            onClick={() => setShowModal(false)}
          />
          <Button label="Yes, Delete Account" variant="destructive" />
        </div>
      }
    >
      <div className="flex flex-col gap-4 mb-12">
        <div className="text-md text-secondary-text">
          Are you sure you want to delete your account? This action is
          irreversible and all data related to your account will be deleted.
        </div>
      </div>
    </Modal>
  );
};
