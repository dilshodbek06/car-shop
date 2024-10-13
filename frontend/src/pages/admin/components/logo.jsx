import brandLogo from "../../../images/brand.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img className="" src={brandLogo} alt="brand logo" />
      <h1 className="">Zap-chast.uz</h1>
    </div>
  );
};

export default Logo;
