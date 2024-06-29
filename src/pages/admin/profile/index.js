import React, { useEffect, useState } from "react";
import BreadcrumbItems from "@/components/common/BreadcrumbItems";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/components/common/Loader";

const breadcrumbData = [
  {
    href: "/admin/profile",
    label: "Profile",
  },
];

const Profile = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    img: "",
  });
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const userData = useSelector((state) => state.profile.data);

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  useEffect(() => {
    if (userData) {
      setData({
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        img: userData.img,
      });
    }
  }, [userData]);

  const validateForm = () => {
    const newErrors = {};

    if (data.password && data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, confirmPassword: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoader(true);

    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("img", data.img);
    if (data.password) {
      formData.append("password", data.password);
    }

    axios
      .put(`${apiUrl}/users/update/${userId}`, formData)
      .then((res) => {
        toast.success(res.data.msg);
        setLoader(false);
        setTimeout(() => {
          router.reload();
        }, 3000);
      })
      .catch((err) => {
        if (err) {
          setLoader(false);
          toast.error(err.response.data.msg);
        }
      });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-2 border-l-4 font-sans font-bold text-black border-purple-600">
          Profile
        </h1>
        <BreadcrumbItems breadcrumbs={breadcrumbData} />
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="mx-auto w-full bg-white max-w-3xl p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 capitalize px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 capitalize px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    placeholder="Enter Confirm Password"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  />
                </div>
                <p className="text-red-500">{errors.confirmPassword}</p>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Upload Profile
              </label>
              <div className="flex items-center space-x-6">
                <div className="relative bg-white/90 rounded-full w-full h-6 text-center">
                  <input
                    id="img"
                    name="img"
                    type="file"
                    onChange={handleImageChange}
                    hidden
                  />
                  <label
                    htmlFor="img"
                    className="absolute top-0 left-0 w-full flex justify-between appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-400 focus:shadow-md"
                  >
                    <span>Profile</span>
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
            <p className="text-red-500 pt-5">{errors.img}</p>
            <div>
              <button
                type="submit"
                className="mt-5 hover:shadow-form rounded-md bg-purple-600 hover:bg-purple-500 py-3 px-8 inline-flex gap-1 space-x-2 items-center justify-center text-base font-semibold text-white outline-none"
                disabled={loader}
              >
                {loader && <Loader />}
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
