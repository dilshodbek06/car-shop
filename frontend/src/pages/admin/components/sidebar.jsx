import Logo from "./logo";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";
import { MdListAlt } from "react-icons/md";
import SidebarItem from "./sidebar-item";

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
];

const Sidebar = () => {
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
        </div>
      </div>
      <div className="h-full  flex flex-col justify-end py-3 items-center">
        © 2024 ZD.
      </div>
    </div>
  );
};

export default Sidebar;
