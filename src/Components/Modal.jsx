import React from "react";

const Modal = ({ children, heading, open, onClose }) => {
  return (
    open && (
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-60 z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/4 md:w-auto max-w-3/4  rounded-lg">
          <div className="flex flex-col justify-center items-stretch gap-4 p-4">
            <div className="flex justify-between gap-4 items-center">
              <h1 className="text-2xl text-black-secondary">{heading}</h1>
              <button
                onClick={onClose}
                className="bg-green-secondary text-white p-2 rounded-full w-10 h-10"
              >
                ╳
              </button>
            </div>
            <hr />
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
