/* eslint-disable react/prop-types */

const Badge = ({ name }) => {
  const baseClasses =
    "text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full";
  const bgClass = "bg-sky-500 hover:bg-sky-600";

  return <span className={`${baseClasses} ${bgClass}`}>{name}</span>;
};

export default Badge;
