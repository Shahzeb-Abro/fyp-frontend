import { useState } from "react";
import { Button, ImageUploader, Modal } from "../../generalComponents";

export const UlcerDetectModal = ({ showModal, setShowModal }) => {
  const [image, setImage] = useState("");

  return (
    <Modal
      isOpen={showModal}
      setIsOpen={setShowModal}
      title="Start Ulcer Detection"
      footer={
        <div className="flex items-center justify-end gap-3">
          <Button label="Cancel" variant="tertiary" />
          <Button label="Detect" />
        </div>
      }
    >
      <div
        className="flex flex-col gap-4 mb-12"
        data-modalid="ulcer-detect-modal"
      >
        <div className="text-md text-secondary-text">
          Upload your image below to start ulcer detection, it is free and
          accurate to large extent
        </div>
        <ImageUploader image={image} setImage={setImage} isSensitive={true} />
      </div>
    </Modal>
  );
};
