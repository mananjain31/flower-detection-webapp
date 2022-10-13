import React from "react";

const UploadedImage = ({ imageName, imageData, removeImage }) => {
  return (
    <>
      <div className="px-4 pt-4 flex flex-col justify-center items-center gap-4 relative">
        {imageName}
        <img src={imageData} alt="your uploaded plant" className="h-64" />
        <button
          className="bg-red-500 hover:bg-red-400 w-full  py-2"
          onClick={removeImage}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default UploadedImage;
