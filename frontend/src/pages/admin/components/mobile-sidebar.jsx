import { BiCategoryAlt, BiHome } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdCampaign, MdListAlt } from "react-icons/md";
import SidebarItem from "./sidebar-item";
import Logo from "./logo";

import { Drawer } from "vaul";
import { IoMdClose } from "react-icons/io";
import { TbBrandOffice } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const adminRoutes = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: BiCategoryAlt,
    label: "Categories",
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
    icon: TbBrandOffice,
    label: "Brands",
    href: "/admin/brands",
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
                    <IoMdClose size={22} />
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
