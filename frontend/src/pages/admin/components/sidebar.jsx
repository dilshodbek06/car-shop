import Logo from "./logo";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiHome } from "react-icons/bi";
import { MdCampaign, MdListAlt } from "react-icons/md";
import SidebarItem from "./sidebar-item";
import { TbBrandOffice } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { LiaCarSideSolid } from "react-icons/lia";
import { FiShoppingBag } from "react-icons/fi";
import { GiCartwheel } from "react-icons/gi";

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

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="py-5 px-6">
        <Logo />
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
  );
};

export default Sidebar;
