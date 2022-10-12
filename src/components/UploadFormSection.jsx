import React from "react";
import upload from "Assets/icons/upload.svg";
import camera from "Assets/icons/camera.svg";
import { postApi } from "Api/Apis";
import UploadedImage from "./UploadedImage";
import CaptureImageModal from "./CaptureImageModal";

const UploadFormSection = () => {
  const inputRef = React.useRef(null);
  const dropzoneRef = React.useRef(null);
  const [imageData, setImageData] = React.useState(null);
  const [imageName, setImageName] = React.useState(null);
  const [camOpen, setCamOpen] = React.useState(false);

  const removeImage = () => {
    setImageData(null);
    setImageName(null);
  };

  const openFilepicker = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi("/upload", { image: imageData });
  };

  const convertAndSetImgData = (file) => {
    setImageName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImageData(reader.result);
  };

  React.useEffect(() => {
    const { current } = dropzoneRef;
    current.addEventListener("dragover", (e) => {
      e.preventDefault();
      current.classList.add("bg-gray-300");
    });
    current.addEventListener("dragleave", (e) => {
      e.preventDefault();
      current.classList.remove("bg-gray-300");
    });
    current.addEventListener("drop", (e) => {
      e.preventDefault();
      current.classList.remove("bg-gray-300");
      convertAndSetImgData(e.dataTransfer.files[0]);
    });
    return () => {
      current?.removeEventListener("dragover", () => {});
      current?.removeEventListener("dragleave", () => {});
      current?.removeEventListener("drop", () => {});
    };
  }, []);

  return (
    <section className="min-h-screen bg-header grid place-items-center text-center">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl sm:text-6xl">Upload/Capture</h2>
        <h3 className="text-md sm:text-2xl mt-4">
          Please take picture of flower you want to detect
        </h3>
        <div
          type="button"
          ref={dropzoneRef}
          className="grid place-items-center mt-8 mx-auto outline-none transition-all duration-300"
        >
          <div className="border-green-secondary  border border-1 pb-6">
            <button
              className="bg-green-secondary text-white w-full"
              onClick={openFilepicker}
            >
              Upload File
            </button>
            {imageData ? (
              <UploadedImage
                imageName={imageName}
                imageData={imageData}
                removeImage={removeImage}
              />
            ) : (
              <>
                <div className="p-8 flex justify-around items-center gap-4">
                  <div
                    className="w-20 aspect-square text-green-secondary cursor-pointer"
                    onClick={openFilepicker}
                  >
                    <img src={upload} alt="upload" />
                  </div>
                  Or
                  <div
                    className="w-20 aspect-square text-green-secondary cursor-pointer"
                    onClick={() => setCamOpen(true)}
                  >
                    <img src={camera} alt="capture" width="100%" />
                  </div>
                </div>
                Drag here or <span>Browse</span>
              </>
            )}
          </div>
        </div>
        <button
          className="py-2 px-20 text-white bg-black mt-6 disabled:bg-black-secondary  disabled:cursor-not-allowed"
          disabled={!imageData}
        >
          Go
        </button>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          name="image"
          onChange={(e) => convertAndSetImgData(e.target.files[0])}
        />
        <CaptureImageModal
          open={camOpen}
          onClose={() => setCamOpen(false)}
          setImageData={setImageData}
        />
      </form>
    </section>
  );
};

export default UploadFormSection;
