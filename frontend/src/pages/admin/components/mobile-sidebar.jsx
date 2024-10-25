import { BiHome } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCampaign, MdListAlt } from "react-icons/md";
import SidebarItem from "./sidebar-item";
import Logo from "./logo";

import { Drawer } from "vaul";
import { TbBrandOffice } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LiaCarSideSolid } from "react-icons/lia";
import { GiCartwheel } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";

const adminRoutes = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: TbBrandOffice,
    label: "Brands",
    href: "/admin/brands",
  },
  {
    icon: LiaCarSideSolid,
    label: "Cars",
    href: "/admin/cars",
  },
  {
    icon: GiCartwheel,
    label: "Car Parts",
    href: "/admin/categories",
  },
  {
    icon: MdListAlt,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: MdCampaign,
    label: "Advertisement",
    href: "/admin/advertisement",
  },
  {
    icon: FiShoppingBag,
    label: "Orders",
    href: "/admin/orders",
  },
];

// eslint-disable-next-line react/prop-types
const MobileSidebar = ({ open, handleClose }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/*  */}
      <Drawer.Root
        open={open}
        onClose={handleClose}
        onOpenChange={() => handleClose()}
        direction="top"
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full max-w-sm w-full border mt-24 fixed bottom-0 right-0">
            <div className="p-4 bg-white flex-1 h-full">
              <div className="mx-auto">
                <Drawer.Title className="hidden"></Drawer.Title>
                <Drawer.Description className="hidden"></Drawer.Description>
              </div>
              <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
                <div className="py-5 pl-3 flex justify-between items-center">
                  <Logo />
                  <button
                    onClick={handleClose}
                    className="rounded-full hover:bg-gray-50 p-2"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      >
                        <path d="M5 12H19">
                          <animate
                            fill="freeze"
                            attributeName="d"
                            dur="0.4s"
                            values="M5 12H19;M12 12H12"
                          ></animate>
                          <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="0.4s"
                            to={0}
                          ></set>
                        </path>
                        <path d="M5 5L19 5M5 19L19 19" opacity={0}>
                          <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.2s"
                            dur="0.4s"
                            values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"
                          ></animate>
                          <set
                            fill="freeze"
                            attributeName="opacity"
                            begin="0.2s"
                            to={1}
                          ></set>
                        </path>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full">
                    {adminRoutes.map((route) => (
                      <SidebarItem
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                      />
                    ))}
                    <hr className="mt-2 opacity-40" />
                    <button
                      onClick={() => navigate("/")}
                      type="button"
                      className={`flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20`}
                    >
                      <div className="flex items-center gap-x-2 py-4">
                        <BiHome size={22} className={`text-slate-500"}`} />
                        Home
                      </div>
                      <div
                        className={`ml-auto opacity-0 border-2 border-sky-700 h-full transition-all`}
                      />
                    </button>
                  </div>
                </div>
                <div className="h-full  flex flex-col justify-end py-3 items-center">
                  © 2024 ZD.
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default MobileSidebar;
