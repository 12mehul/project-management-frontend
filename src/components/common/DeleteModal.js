import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { HiCheckBadge } from "react-icons/hi2";

const DeleteModal = ({ handleCloseModal, handleDeleteId }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("popup-background")) {
      handleCloseModal();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-gray-300 opacity-40 popup-background"
        onClick={handleBackgroundClick}
      ></div>
      <div className="relative w-[400px] rounded-xl bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-center mx-auto mt-8">
          <MdDeleteForever className="text-4xl text-red-600" />
          <HiCheckBadge className="text-4xl text-green-600" />
        </div>
        <h1 className="mt-2 text-center text-xl font-semibold text-black">
          Are you sure ?
        </h1>
        <p className="my-2 text-center text-sm text-gray-500">
          Are you sure you want proceed with this action ?
        </p>
        <div className="space-x-4 bg-gray-100 py-4 text-center">
          <button
            className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75"
            onClick={handleDeleteId}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
