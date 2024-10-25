import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AvatarDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleLogOut = () => {
    // log out admin in here
  };

  return (
    <div className="flex justify-center">
      <div className="relative inline-block">
        <button
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-center w-fit"
        >
          <div className="relative hover:shadow-md flex justify-center items-center h-[42px] w-[42px] border border-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-7"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path
                  strokeDasharray={20}
                  strokeDashoffset={20}
                  d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="20;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={36}
                  strokeDashoffset={36}
                  d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.5s"
                    values="36;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </div>
        </button>
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-md shadow-card dark:bg-dark-2 dark:shadow-box-dark ${
            dropdownOpen ? "block" : "hidden"
          }`}
        >
          <p className="w-full rounded px-3 py-2 text-left text-sm text-body-color bg-gray-50 opacity-70 cursor-not-allowed ">
            Hi Admin
          </p>
          <p
            onClick={() => navigate("/admin/settings")}
            className="w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-100 cursor-pointer"
          >
            Settings
          </p>
          <hr />
          <p
            onClick={() => handleLogOut()}
            className="w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-100 cursor-pointer"
          >
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
}
