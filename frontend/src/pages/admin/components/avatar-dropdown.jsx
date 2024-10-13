import { useEffect, useRef, useState } from "react";

export default function AvatarDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

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

  return (
    <div className="flex justify-center">
      <div className="relative inline-block">
        <button
          ref={trigger}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-center w-fit"
        >
          <div className="relative h-[42px] w-[42px] rounded-full">
            <img
              src="https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg"
              alt="avatar"
              className="h-full w-full rounded-full object-cover object-center"
            />
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
          <p className="w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-100 cursor-pointer">
            Settings
          </p>
          <hr />
          <p className="w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-100 cursor-pointer">
            Sign out
          </p>
        </div>
      </div>
    </div>
  );
}
