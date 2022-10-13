import React from "react";
import Modal from "./Modal";
import Webcam from "react-webcam";
import camera from "Assets/icons/camera.svg";

const CaptureImageModal = ({ open, onClose, setImageData }) => {
  const captureBtnRef = React.useRef(null);
  const camRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = camRef.current.getScreenshot();
    setImageData(imageSrc);
    onClose();
  }, [camRef, setImageData, onClose]);

  React.useEffect(() => {
    if (open) {
      captureBtnRef.current.focus();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} heading="Capture Plant image">
      <div className="flex flex-col items-center gap-4">
        <div className="h-min">
          <Webcam ref={camRef} />
        </div>        
        <button
          ref={captureBtnRef}
          className="rounded-xl p-2 border-black border flex gap-2 items-center justify-center bg-green-200 hover:bg-green-300 outline-none focus:bg-green-300"
          onClick={capture}
        >
          Capture <img src={camera} alt="capture" className="text-blue-500" />
        </button>
      </div>
    </Modal>
  );
};

export default CaptureImageModal;
