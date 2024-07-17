import { BsDashLg } from "react-icons/bs";

import logo from "../../assets/svg/logo.svg";

const TopBar = () => {
  const minimizePopup = () => {
    window.close();
  };

  return (
    <div className="flex flex-row justify-between items-center py-4 px-8">
      <img className="w-7" src={logo} alt="logo" />
      <h1
        className="font-quicksand text-base font-semibold"
        style={{ color: "#084649" }}
      >
        Marketer account
      </h1>

      <button
        className="p-2 border rounded-full"
        style={{ borderColor: "#E5E7EB" }}
        onClick={minimizePopup}
      >
        <BsDashLg className="text-md" />
      </button>
    </div>
  );
};

export default TopBar;
