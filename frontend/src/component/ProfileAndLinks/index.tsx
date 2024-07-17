const ProfileAndLinks = () => {
  return (
    <div className="px-4">
      <div
        className="flex flex-row justify-between items-center w-full px-2 pb-2 border-b"
        style={{ color: "#E7F5F6" }}
      >
        <div className="flex flex-row justify-start items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22WjBWLXIFkxA6k2ezXO0xYQlvpa-Mgt2sA&s"
            alt="expert-icon"
          />
        </div>

        <div className="w-3/5">
          <h1
            className="font-quicksand text-sm font-semibold"
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
            className="w-20 h-10 text-sm rounded-md"
            style={{ backgroundColor: "#FBEFEF", color: "#D65D5B" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndLinks;
