import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye, MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import DeleteModal from "../common/DeleteModal";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectLists } from "@/redux/projects/actionCreator";
import toast from "react-hot-toast";
import axios from "axios";

const ProjectLists = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const dispatch = useDispatch();

  const [deletModal, setDeletModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [loader, setLoader] = useState(false);
  const { loading, error } = useSelector((state) => state.projects);
  const projects = useSelector((state) => state.projects.lists);

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (userId) {
      dispatch(fetchProjectLists(userId));
    }
  }, [userId]);

  const handleDelete = (id) => {
    setDeletModal(true);
    setDeleteId(id);
  };
  const handleCloseModal = () => {
    setDeletModal(false);
  };

  const handleDeleteId = async () => {
    if (deleteId) {
      setLoader(true);
      try {
        const res = await axios.delete(`${apiUrl}/projects/delete/${deleteId}`);
        if (res.data) {
          setLoader(false);
          toast.success(res.data.msg);
          setTimeout(() => {
            handleCloseModal();
            router.reload();
          }, 3000);
        }
      } catch (err) {
        if (err) {
          setLoader(false);
          toast.error(err.response.data.msg);
        }
      }
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
                        <tr className="text-sm font-bold text-gray-600 border-b bg-gray-50 border-gray-200">
                          <td className="py-4 pl-10">
                            <div className="flex items-center gap-x-4">
                              <span>Project Name</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center">Budget</td>
                          <td className="py-4 px-4 text-center">Start Date</td>
                          <td className="py-4 px-4 text-center">Due Date</td>
                          <td className="py-4 px-4 text-center">Status</td>
                          <td className="py-4 px-4 text-center">Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="6">
                              <div className="py-6 flex items-center justify-center">
                                <div className="relative">
                                  <div className="h-16 w-16 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                                  <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ) : error ? (
                          <tr>
                            <td colSpan="6">
                              <div className="px-2 py-6 text-center">
                                <div className="flex flex-col justify-center items-center">
                                  <h1 className="text-8xl font-extrabold text-red-500">
                                    500
                                  </h1>
                                  <p className="text-4xl font-medium text-gray-800">
                                    Internal Server Error
                                  </p>
                                  <p className="text-xl text-gray-800 mt-4">
                                    We apologize for the inconvenience. Please
                                    try again later.
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {projects.length > 0 ? (
                              projects.map((project, index) => (
                                <tr
                                  className="hover:bg-purple-50 transition-colors cursor-pointer"
                                  key={index}
                                >
                                  <td className="flex gap-x-2 items-center py-4 pl-10">
                                    <span className="text-base font-medium text-gray-800 capitalize">
                                      {project.projectName}
                                    </span>
                                  </td>
                                  <td className="text-base font-medium text-gray-600 text-center">
                                    {project.budget}
                                  </td>
                                  <td className="text-base font-medium text-gray-600 text-center">
                                    {project.startDate.split("T")[0]}
                                  </td>
                                  <td className="text-base font-medium text-gray-600 text-center">
                                    {project.dueDate.split("T")[0]}
                                  </td>
                                  <td className="text-center">
                                    {project.status === "Completed" ? (
                                      <span className="font-normal text-sm text-white rounded-md p-1 bg-green-600">
                                        {project.status}
                                      </span>
                                    ) : project.status === "InProgress" ? (
                                      <span className="font-normal text-sm text-white rounded-md p-1 bg-orange-600">
                                        {project.status}
                                      </span>
                                    ) : (
                                      <span className="font-normal text-sm text-white rounded-md p-1 bg-red-600">
                                        {project.status}
                                      </span>
                                    )}
                                  </td>
                                  <td>
                                    <div className="flex items-end justify-center gap-2">
                                      <Link
                                        href={`/admin/projects/${project._id}`}
                                      >
                                        <button className="flex items-center justify-center group p-1 rounded-lg hover:bg-purple-200">
                                          <MdOutlineRemoveRedEye className="text-xl text-center text-gray-500 group-hover:text-purple-600" />
                                        </button>
                                      </Link>
                                      <Link
                                        href={`/admin/projects/edit/${project._id}`}
                                      >
                                        <button className="flex items-center justify-center group p-1 rounded-lg hover:bg-teal-100">
                                          <FiEdit className="text-lg text-gray-500 group-hover:text-teal-400" />
                                        </button>
                                      </Link>
                                      <button
                                        className="flex items-center justify-center group p-1 rounded-lg hover:bg-red-100"
                                        onClick={() =>
                                          handleDelete(project._id)
                                        }
                                      >
                                        <MdDeleteForever className="text-xl text-gray-500 group-hover:text-red-600" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6">
                                  <div className="w-full flex flex-col items-center justify-center py-4 text-center">
                                    <svg
                                      className="w-12 h-12 text-gray-700"
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 24 24"
                                      height="200px"
                                      width="200px"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g id="File_Off">
                                        <g>
                                          <path d="M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z"></path>
                                          <path d="M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <h3 className="text-xl font-medium mt-4 text-gray-700">
                                      Data not found
                                    </h3>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </>
                        )}
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
          loader={loader}
        />
      )}
    </>
  );
};

export default ProjectLists;
