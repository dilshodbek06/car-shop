import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./logo";
import AvatarDropdown from "./avatar-dropdown";
import { useState } from "react";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-[70px] border-b shadow-sm flex items-center ">
      <div className="container px-2 mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="hover:bg-gray-100 rounded-full p-2 md:hidden"
          >
            <RxHamburgerMenu size={24} />
          </button>
          <AvatarDropdown />
        </div>
      </div>
      <div>
        <MobileSidebar
          open={sidebarOpen}
          handleClose={() => setSidebarOpen(false)}
        />
      </div>
    </div>
  );
};

export default Header;
