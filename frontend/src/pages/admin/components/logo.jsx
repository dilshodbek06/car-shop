import brandLogo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img
        className="w-[40px] h-[40px] rounded-full"
        src={brandLogo}
        alt="brand logo"
      />
      <h1 className="">Zap-chast.uz</h1>
    </div>
  );
};

export default Logo;
