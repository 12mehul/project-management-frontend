import React, { useState } from "react";
import Image from "next/image";
import TaskForm from "../tasks/TaskForm";

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);

  const handleShowModal = (taskId = null) => {
    setCurrentTaskId(taskId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentTaskId(null);
  };

  return (
    <>
      <div className="p-6">
        <section className="text-gray-700 body-font bg-white p-8 rounded-xl shadow-2xl">
          <div className="container px-5 mx-auto">
            <div className="w-full mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full rounded border border-gray-200"
                src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <p className="leading-relaxed mt-2">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
                <div className="mt-4">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-2xl text-gray-700 font-bold ml-4">
                      Project Overview
                    </h3>
                    <ol>
                      <li className="border-l-2 border-purple-600">
                        <div className="flex-start">
                          <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="text-white w-3 h-3"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                              ></path>
                            </svg>
                          </div>
                          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 ml-6">
                            <div className="flex justify-between mb-4">
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                New Web Design
                              </a>
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                04 / 02 / 2022
                              </a>
                            </div>
                            <p className="text-gray-700 mb-6">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque scelerisque diam non nisi semper, et
                              elementum lorem ornare. Maecenas placerat
                              facilisis mollis. Duis sagittis ligula in sodales
                              vehicula.
                            </p>
                            <button
                              type="button"
                              className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              See demo
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="border-l-2 border-green-600">
                        <div className="flex-start">
                          <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="text-white w-3 h-3"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                              ></path>
                            </svg>
                          </div>
                          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 ml-6">
                            <div className="flex justify-between mb-4">
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                21 000 Job Seekers
                              </a>
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                12 / 01 / 2022
                              </a>
                            </div>
                            <p className="text-gray-700 mb-6">
                              Libero expedita explicabo eius fugiat quia
                              aspernatur autem laudantium error architecto
                              recusandae natus sapiente sit nam eaque,
                              consectetur porro molestiae ipsam an deleniti.
                            </p>
                            <button
                              type="button"
                              className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              See demo
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className="border-l-2 border-green-600">
                        <div className="flex-start">
                          <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              className="text-white w-3 h-3"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                              ></path>
                            </svg>
                          </div>
                          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 ml-6">
                            <div className="flex justify-between mb-4">
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                Awesome Employers
                              </a>
                              <a
                                href="#!"
                                className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                              >
                                21 / 12 / 2021
                              </a>
                            </div>
                            <p className="text-gray-700 mb-6">
                              Voluptatibus temporibus esse illum eum aspernatur,
                              fugiat suscipit natus! Eum corporis illum nihil
                              officiis tempore. Excepturi illo natus libero sit
                              doloremque, laborum molestias rerum pariatur quam
                              ipsam necessitatibus incidunt, explicabo.
                            </p>
                            <button
                              type="button"
                              className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              Preview
                            </button>
                            <button
                              type="button"
                              className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                            >
                              See demo
                            </button>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full text-gray-700 body-font bg-white p-8 rounded-xl shadow-2xl mt-4">
          <div className="flex justify-between">
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">
              Tasks
            </h1>
            <button
              type="button"
              onClick={() => handleShowModal()}
              className="px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              + Tasks
            </button>
          </div>
          <div className="w-full flex gap-3 overflow-x-auto">
            <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700">Todo</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p
                      onClick={() => handleShowModal(1)}
                      className="font-semibold text-lg cursor-pointer"
                    >
                      Tool with sidebar
                    </p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700">
                  In Progress
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700">In Review</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 w-Full p-4 shadow-md rounded-lg border border-teal-400">
              <div className="flex pb-4">
                <p className="font-semibold text-lg text-gray-700">Completed</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
                <div className="flex border items-center rounded-md transition duration-500 shadow-sm hover:shadow-md hover:shadow-teal-400">
                  <div className="p-10">
                    <p className="font-semibold text-lg">Tool with sidebar</p>
                    <span className="text-gray-600">Description of tool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <TaskForm taskId={currentTaskId} handleCloseModal={handleCloseModal} />
      )}
    </>
  );
};

export default ProjectDetails;
