import React, { useState } from "react";
import { MdOutlineRemoveRedEye, MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import DeleteModal from "../common/DeleteModal";

const ProjectLists = () => {
  const [deletModal, setDeletModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeletModal(true);
    setDeleteId(id);
  };
  const handleCloseModal = () => {
    setDeletModal(false);
  };

  const handleDeleteId = () => {
    if (deleteId) {
      console.log(deleteId);
      setDeletModal(false);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="pt-8">
          <div className="max-w-full mx-auto">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <div className="w-full">
                <div className="align-middle">
                  <div className="border rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border-collapse border-slate-500">
                      <thead>
                        <tr className="text-sm font-semibold text-gray-800 border-b bg-gray-50 border-gray-200">
                          <td className="py-4 pl-10">
                            <div className="flex items-center gap-x-4">
                              <span>Project Name</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">Tech used</td>
                          <td className="py-4 px-4 text-center">Budget</td>
                          <td className="py-4 px-4 text-center">Duration</td>
                          <td className="py-4 px-4 text-center">Status</td>
                          <td className="py-4 px-4 text-center">Tech_Used</td>
                          <td className="py-4 px-4 text-center">Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-purple-50 transition-colors cursor-pointer">
                          <td className="flex gap-x-2 items-center py-4 pl-10">
                            <span className="text-base font-medium text-gray-800 capitalize">
                              Mehul
                            </span>
                          </td>
                          <td className="text-base font-medium text-gray-600 text-center">
                            4544
                          </td>
                          <td className="text-base font-medium text-gray-600 text-center">
                            25253
                          </td>
                          <td className="text-center">
                            <span
                              className={`font-medium capitalize text-black rounded-md p-1 `}
                            >
                              Active
                            </span>
                          </td>
                          <td className="text-base font-medium text-gray-600 text-center">
                            25253
                          </td>
                          <td className="text-base font-medium text-gray-600 text-center">
                            25253
                          </td>
                          <td>
                            <div className="flex items-end justify-center gap-2">
                              <Link href="/admin/projects/1">
                                <button className="flex items-center justify-center group p-1 rounded-lg hover:bg-purple-200">
                                  <MdOutlineRemoveRedEye className="text-xl text-center text-gray-500 group-hover:text-purple-600" />
                                </button>
                              </Link>
                              <Link href="/admin/projects/edit/1">
                                <button className="flex items-center justify-center group p-1 rounded-lg hover:bg-teal-100">
                                  <FiEdit className="text-lg text-gray-500 group-hover:text-teal-400" />
                                </button>
                              </Link>
                              <button
                                className="flex items-center justify-center group p-1 rounded-lg hover:bg-red-100"
                                onClick={() => handleDelete(1)}
                              >
                                <MdDeleteForever className="text-xl text-gray-500 group-hover:text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {deletModal && (
        <DeleteModal
          handleCloseModal={handleCloseModal}
          handleDeleteId={handleDeleteId}
        />
      )}
    </>
  );
};

export default ProjectLists;
