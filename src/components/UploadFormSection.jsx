import React from "react";
import upload from "Assets/icons/upload.svg";
import camera from "Assets/icons/camera.svg";

const UploadFormSection = () => {
  return (
    <section className="min-h-screen bg-header grid place-items-center text-center">
      <form>
        <h2 className="text-3xl sm:text-6xl">Upload/Capture</h2>
        <h3 className="text-md sm:text-2xl mt-4">
          Please take picture of flower you want to detect
        </h3>
        <div className="grid place-items-center mt-8">
          <div className="border-green-secondary  border border-1 pb-6">
            <button className="bg-green-secondary text-white w-full">
              Upload File
            </button>
            <div className="p-8 flex justify-around items-center gap-4">
              <div className="w-20 aspect-square text-green-secondary">
                <img src={upload} alt="upload" />
              </div>
              Or
              <div className="w-20 aspect-square text-green-secondary">
                <img src={camera} alt="capture" width="100%" />
              </div>
            </div>
            Drag here or <span>Browse</span>
          </div>
        </div>
        <button className="py-2 px-20 text-white bg-black-secondary mt-6">
          Go
        </button>
      </form>
    </section>
  );
};

export default UploadFormSection;
