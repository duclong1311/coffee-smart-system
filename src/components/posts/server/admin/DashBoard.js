import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState("dashboard");
  const [isPostsDropdownOpen, setIsPostsDropdownOpen] = useState(false);

  const handleClick = (item) => {
    setSelected(item);
  };

  const togglePostsDropdown = () => {
    setIsPostsDropdownOpen(!isPostsDropdownOpen);
  };

  return (
    <div>
      <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
        <div className="relative border-b border-white/20">
          <Link className="flex items-center gap-4 py-6 px-8" href="#/">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Admin Management
            </h6>
          </Link>
        </div>
        <div className="m-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <Link aria-current="page" className="active" to="/admin">
                <button
                  className={`middle none font-sans font-bold center transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize
                   ${selected === "dashboard" ? "shadow-md bg-gradient-to-tr from-blue-600 to-blue-400" : ""}`}
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
                    <path d="M12 5.432l8.159 8.159v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625A1.875 1.875 0 013.75 21V11.25L12 5.432z"></path>
                  </svg>
                  <p className="block text-base font-medium capitalize">
                    Dashboard
                  </p>
                </button>
              </Link>
            </li>

            {/* Dropdown for Posts */}
            <li>
              <button
                className="middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
                onClick={togglePostsDropdown}
                type="button"
              >
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
                <p className="block text-base font-medium capitalize">
                  Posts
                </p>
              </button>

              {/* Dropdown Items */}
              {isPostsDropdownOpen && (
                <ul className="ml-6 flex flex-col gap-1">
                  <li>
                    <Link className="" to="/create">
                      <button
                        className="middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
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
                    <Link className="" to="/postmanagement">
                      <button
                        className="middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize"
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
            {/* Other navigation items */}
            <li>
              <Link className="" to="/admin/sale">
                <button
                  className={`middle none font-sans font-bold transition-all text-xs py-3 rounded-lg text-white w-full flex items-center gap-4 px-4 capitalize
                   ${selected === "sale" ? "shadow-md bg-gradient-to-tr from-blue-600 to-blue-400" : ""}`}
                  onClick={() => handleClick("sale")}
                  type="button"
                >
                  <p className="block text-base font-medium capitalize">
                    Sale
                  </p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Dashboard;
