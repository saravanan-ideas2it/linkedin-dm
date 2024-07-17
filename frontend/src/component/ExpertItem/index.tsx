import linkedinIcon from "../../assets/svg/linkedin-icon.svg";
import { MdOutlineOpenInNew } from "react-icons/md";

const ExpertItem = () => {
  return (
    <li className=" my-2 py-2 border-b" style={{ color: "#E7F5F6" }}>
      <div className="flex flex-row justify-even items-center w-full">
        <div className="flex flex-row justify-center items-center w-1/5">
          <img
            className="h-12 w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22WjBWLXIFkxA6k2ezXO0xYQlvpa-Mgt2sA&s"
            alt="expert-icon"
          />
        </div>

        <div className="w-3/5">
          <h1
            className="font-quicksand text-xs font-semibold"
            style={{ color: "#084649" }}
          >
            Chandler Bing
          </h1>
          <p
            className="font-quicksand text-xs font-semibold"
            style={{ color: "#6A707C" }}
          >
            Black Friday sale
          </p>
        </div>

        <div className="flex flex-row justify-center items-center w-1/5">
          <button
            className="flex flex-row justify-between items-center p-2 border rounded-full"
            style={{ borderColor: "#E5E7EB" }}
          >
            <img className="w-3 mx-1" src={linkedinIcon} alt="linkedin-icon" />
            <MdOutlineOpenInNew
              className="text-sm mx-1"
              style={{ color: "#2E64BC" }}
            />
          </button>
        </div>
      </div>

      <div
        className="flex flex-row justify-between items-center rounded-full w-full px-4 py-1 mt-2"
        style={{ backgroundColor: "#2E64BC20" }}
      >
        <p
          className="font-quicksand text-xs font-medium"
          style={{ color: "#2E64BC" }}
        >
          Connection Request sent
        </p>
        <p
          className="font-quicksand text-xs font-medium"
          style={{ color: "#6A707C" }}
        >
          9:23 pm, 23 Mar 2024
        </p>
      </div>
    </li>
  );
};

export default ExpertItem;
