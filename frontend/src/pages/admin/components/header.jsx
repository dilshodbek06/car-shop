import Logo from "./logo";
import AvatarDropdown from "./avatar-dropdown";
import MobileSidebar from "./mobile-sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCloseSidebar,
  handleOpenSidebar,
} from "../../../redux/slices/mobile-sidebar/mobile-sidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mSidebar);

  const location = useLocation();
  useEffect(() => {
    dispatch(handleCloseSidebar());
  }, [dispatch, location.pathname]);

  return (
    <div className="min-h-[70px] border-b shadow-sm flex items-center ">
      <div className="container px-2 mx-auto flex items-center justify-between">
        <div className="md:invisible">
          <Logo />
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => dispatch(handleOpenSidebar())}
            className="hover:bg-gray-100 rounded-full p-2 md:hidden"
          >
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
                strokeDasharray={16}
                strokeDashoffset={16}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M5 5h14">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="16;0"
                  ></animate>
                </path>
                <path d="M5 12h14">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.2s"
                    values="16;0"
                  ></animate>
                </path>
                <path d="M5 19h14">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.4s"
                    dur="0.2s"
                    values="16;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </button>
          <AvatarDropdown />
        </div>
      </div>
      <div>
        <MobileSidebar
          open={open}
          handleClose={() => dispatch(handleCloseSidebar())}
        />
      </div>
    </div>
  );
};

export default Header;
