import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectDetails } from "@/redux/projects/actionCreator";

const initialValues = {
  projectName: "",
  description: "",
  budget: "",
  startDate: "",
  dueDate: "",
  status: "",
  img: "",
};

const ProjectForm = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const projectData = useSelector((state) => state.projects.details);
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (id) {
      dispatch(fetchProjectDetails(id));
    } else {
      setData(initialValues);
    }
  }, [id]);

  useEffect(() => {
    if (projectData && id) {
      setData({
        projectName: projectData.projectName,
        description: projectData.description,
        budget: projectData.budget,
        startDate: projectData.startDate,
        dueDate: projectData.dueDate,
        status: projectData.status,
        img: projectData.img,
      });
    }
  }, [projectData, id]);

  const validateForm = () => {
    const newErrors = {};

    if (!data.projectName) {
      newErrors.projectName = "Project Name is required";
    }
    if (!data.description) {
      newErrors.description = "Description is required";
    }
    if (!data.budget) {
      newErrors.budget = "Budget is required";
    }
    if (!data.startDate) {
      newErrors.startDate = "Start Date is required";
    }
    if (!data.dueDate) {
      newErrors.dueDate = "Due Date is required";
    }
    if (!data.status) {
      newErrors.status = "Status is required";
    }
    if (!data.img) {
      newErrors.img = "Image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 200 * 1024;

    if (file && file.size > maxSize) {
      setErrors({ ...errors, img: "Image size exceeds 200.00 KB limit." });
      return;
    }

    setData({ ...data, img: file });
    setErrors({ ...errors, img: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoader(true);

    const formData = new FormData();
    formData.append("projectName", data.projectName);
    formData.append("description", data.description);
    formData.append("budget", data.budget);
    formData.append("startDate", data.startDate);
    formData.append("dueDate", data.dueDate);
    formData.append("status", data.status);
    formData.append("img", data.img);
    formData.append("userId", userId);

    try {
      if (id) {
        const res = await axios.put(
          `${apiUrl}/projects/update/${id}`,
          formData
        );
        if (res.data) {
          toast.success(res.data.msg);
          setLoader(false);
          setTimeout(() => {
            router.push("/admin/projects/list");
          }, 3000);
        }
      } else {
        const res = await axios.post(`${apiUrl}/projects`, formData);
        if (res.data) {
          toast.success(res.data.msg);
          setLoader(false);
          setTimeout(() => {
            router.push("/admin/projects/list");
          }, 3000);
        }
      }
    } catch (err) {
      if (err) {
        setLoader(false);
        toast.error(err.response.data.msg);
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="mx-auto w-full bg-white p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              value={data.projectName}
              onChange={handleChange}
              placeholder="Project Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            />
            <p className="text-red-500">{errors.projectName}</p>
          </div>
          <div className="mt-3">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            />
            <p className="text-red-500">{errors.description}</p>
          </div>
          <div className="mt-3">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Budget
            </label>
            <input
              type="text"
              name="budget"
              value={data.budget}
              onChange={handleChange}
              placeholder="Enter Budget"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
            />
            <p className="text-red-500">{errors.budget}</p>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mt-3">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={
                    data.startDate
                      ? data.startDate.split("T")[0]
                      : data.startDate
                  }
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                />
              </div>
              <p className="text-red-500">{errors.startDate}</p>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mt-3">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={
                    data.dueDate ? data.dueDate.split("T")[0] : data.dueDate
                  }
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                />
              </div>
              <p className="text-red-500">{errors.dueDate}</p>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2 py-3">
              <div>
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Upload Image
                </label>
                <div className="flex items-center space-x-6">
                  <div className="relative bg-white/90 rounded-full w-full h-6 text-center">
                    <input
                      type="file"
                      name="img"
                      id="img"
                      hidden
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="img"
                      className="absolute top-0 left-0 w-full flex justify-between appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                    >
                      <span>Image</span>
                      <svg
                        data-slot="icon"
                        className="w-6 h-6 text-purple-700"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <p className="text-red-500 pt-6">{errors.img}</p>
            </div>
            <div className="w-full px-3 sm:w-1/2 py-3">
              <div>
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Status
                </label>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  name="status"
                  value={data.status}
                  onChange={handleChange}
                >
                  <option>Select Status</option>
                  <option value="NotStarted">Not Started</option>
                  <option value="InProgress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <p className="text-red-500">{errors.status}</p>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-purple-600 hover:bg-purple-500 py-3 px-8 inline-flex gap-1 space-x-2 items-center justify-center text-base font-semibold text-white outline-none"
              disabled={loader}
            >
              {loader && <Loader />}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
