import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";

const Dashboard = () => {
  const [selected, setSelected] = useState("");
  const [isPostsDropdownOpen, setIsPostsDropdownOpen] = useState(true);
  const [isManegeDropdownOpen, setIsManegeDropdownOpen] = useState(true);
  const [isManageStaffDropdownOpen, setIsManageStaffDropdownOpen] = useState(false);
  const togglePostsDropdown = () => {
    setIsPostsDropdownOpen(!isPostsDropdownOpen);
  };
  const toggleManegeDropdown = () => {
    setIsManegeDropdownOpen(!isManegeDropdownOpen);
  };
  const toggleManageStaffDropdown = () => {
    setIsManageStaffDropdownOpen(!isManageStaffDropdownOpen);
  };

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <aside className="bg-[#333] -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <Link className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Staff Management
            </h6>
          </Link>
          <button
            className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-2">
            <li>
              <Link aria-current="page" className="active" to="/staff/dashboard">
                <button
                  // className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white shadow-md  w-full flex items-center gap-4 px-4 capitalize bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                  className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "dashboard"
                      ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                      : ""
                    }`}
                  onClick={() => handleClick("dashboard")}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 text-inherit"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                  </svg>
                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    dashboard
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <Link className="" to="/staff/sale">
                <button
                  type="button"
                  className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "sale"
                      ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                      : ""
                    }`}
                  onClick={() => handleClick("sale")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>

                  <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                    Sale
                  </p>
                </button>
              </Link>
            </li>
            <li>
              <button
                className="hover:bg-[#c48355]  first-letter:shadow-amber-700  hover:shadow-lg  mb-3 disabled:opacity-50 active:bg-[#6F4F37]  hover:shadow-amber-700 middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
                onClick={toggleManegeDropdown}
                type="button"
              >
                <div>
                  <MdOutlineManageAccounts className="size-7" />
                </div>
                <p className="block text-base font-medium capitalize">Manage</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 10l6 6 6-6H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Dropdown Items */}
              {isManegeDropdownOpen && (
                <ul className="ml-9 mr-9 flex flex-col gap-1">
                  <li>
                    <Link className="" to="/staff/feedback">
                      <button
                        className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "feedback"
                            ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        onClick={() => handleClick("feedback")}
                        type="button"
                      >
                        <VscFeedback className="size-6" />

                        <p className="block text-base font-medium capitalize">
                          Feedback
                        </p>
                      </button>
                    </Link>
                  </li>
                  {/* service here */}
                  <li>
                    <Link className="" to="/staff/service">
                      <button
                        className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${
                     selected === "service"
                       ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                       : ""
                   }`}
                        onClick={() => handleClick("service")}
                        type="button"
                      >
                        <IoRestaurantOutline className="size-6" />

                        <p className="block text-base font-medium capitalize">
                          Service
                        </p>
                      </button>
                    </Link>
                  </li> 
                  <li>
                    <Link className="" to="/staff/bill">
                      <button
                        className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                          ${selected === "bill"
                            ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        onClick={() => handleClick("bill")}
                        type="button"
                      >
                        <VscFeedback className="size-6" />

                        <p className="block text-base font-medium capitalize">
                          Bill
                        </p>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown for Posts */}
            <li>
              <button
                className="hover:bg-[#c48355]  first-letter:shadow-amber-700  hover:shadow-lg  mb-3 disabled:opacity-50 active:bg-[#6F4F37]  hover:shadow-amber-700 middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
                onClick={togglePostsDropdown}
                type="button"
              >
                <BsPostcard className="size-6" />
                <p className="block text-base font-medium capitalize">Posts</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 10l6 6 6-6H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Items */}
              {isPostsDropdownOpen && (
                <ul className="ml-9 mr-9 flex flex-col gap-2">
                  <li>
                    <Link className="" to="/admin/createpost">
                      <button
                        className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "create"
                            ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        type="button"
                        onClick={() => handleClick("create")}
                      >
                        <p className="block text-base font-medium capitalize">
                          Create Post
                        </p>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/admin/postmanagement">
                      <button
                        className={` hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize"
                   ${selected === "postmanagement"
                            ? "shadow-md disabled:opacity-50 bg-[#6F4F37] first-letter:shadow-amber-700  hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        type="button"
                        onClick={() => handleClick("postmanagement")}
                      >
                        <p className="block text-base font-medium capitalize">
                          Post Management
                        </p>
                      </button>
                    </Link>
                  </li>

                </ul>
              )}
            </li>
            <li>
              <button
                className="hover:bg-[#c48355]  first-letter:shadow-amber-700  hover:shadow-lg  mb-3 disabled:opacity-50 active:bg-[#6F4F37]  hover:shadow-amber-700 middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
                onClick={toggleManageStaffDropdown}
                type="button"
              >
                <MdOutlineManageAccounts className="size-7" />
                <p className="block text-base font-medium capitalize">Manage Staff</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 10l6 6 6-6H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Items */}
              {isManageStaffDropdownOpen && (
                <ul className="ml-9 mr-9 flex flex-col gap-2">
                  <li>
                    <Link className="" to="/admin/managestaff">
                      <button
                        className={`hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize ${selected === "createStaff"
                            ? "shadow-md bg-[#6F4F37] hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        onClick={() => handleClick("createStaff")}
                        type="button"
                      >
                        <p className="block text-base font-medium capitalize">
                        Management Staff
                        </p>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/admin/createstaff">
                      <button
                        className={`hover:bg-[#c48355] middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  w-full flex items-center gap-4 px-4 capitalize ${selected === "editStaff"
                            ? "shadow-md bg-[#6F4F37] hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85]"
                            : ""
                          }`}
                        onClick={() => handleClick("editStaff")}
                        type="button"
                      >
                        <p className="block text-base font-medium capitalize">
                          Create Staff
                        </p>
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
