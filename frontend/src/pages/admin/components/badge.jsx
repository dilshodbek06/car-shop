import PropTypes from "prop-types";

const Badge = ({ isActive }) => {
  const baseClasses =
    "text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full";
  const bgClass = isActive
    ? "bg-green-500 hover:bg-green-600"
    : "bg-red-500 hover:bg-red-600";
  const text = isActive ? "active" : "noactive";

  return <span className={`${baseClasses} ${bgClass}`}>{text}</span>;
};

Badge.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Badge;
