import logo from "../../assets/svg/logo.svg";
import google from "../../assets/svg/google.svg";
import microsoft from "../../assets/svg/microsoft.svg";

const Login = () => {
  return (
    <div
      className="h-full p-4 py-16 flex flex-col justify-start items-center overflow-x-auto"
      style={{
        background:
          "linear-gradient(150deg, rgba(255,255,255,0) 10%, rgba(246,176,111,0.2) 40%, rgba(18,157,165,0.4) 100%)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <img className="w-10" src={logo} alt="logo" />
        <h1
          className="font-comfortaa text-base font-normal text-center mt-4"
          style={{ color: "#1280A3" }}
        >
          Login to your <br /> Expert9 account
        </h1>
      </div>

      <div
        className="border border-white rounded-xl h-full w-full p-2 mt-4"
        style={{ backgroundColor: "#FFFFFF80" }}
      >
        <div className="bg-white rounded-xl h-auto p-4">
          <div className="flex flex-col justify-start items-start mt-2">
            <label
              className="font-quicksand text-sm font-medium ml-1"
              style={{ color: "#6A707C" }}
              htmlFor="email-input"
            >
              Email ID *
            </label>
            <input
              className="font-quicksand text-sm font-medium w-full h-10 border rounded-md outline-none px-2 mt-1"
              style={{
                boxShadow: "0px 4px 8px 0px #6A707C1A inset",
                borderColor: "#C3C6CB",
                color: "#084649",
              }}
              type="text"
              id="email-input"
            />
          </div>

          <div className="flex flex-col justify-start items-start mt-4">
            <label
              className="font-quicksand text-sm font-medium ml-1"
              style={{ color: "#6A707C" }}
              htmlFor="password-input"
            >
              Password *
            </label>
            <input
              className="font-quicksand text-sm font-medium w-full h-10 border rounded-md outline-none px-2 mt-1"
              style={{
                boxShadow: "0px 4px 8px 0px #6A707C1A inset",
                borderColor: "#C3C6CB",
                color: "#084649",
              }}
              type="password"
              id="password-input"
            />
          </div>

          <div className="flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row items-center">
              <p
                className="font-quicksand text-sm font-medium"
                style={{ color: "#6A707C" }}
              >
                Forgot Password?
              </p>
              <button
                className="font-quicksand text-sm font-medium bg-transparent ml-1"
                style={{ color: "#1280A3" }}
              >
                Reset it
              </button>
            </div>

            <button
              className="font-quicksand text-white text-sm font-medium rounded-md border w-24 h-10"
              style={{
                background:
                  "radial-gradient(94.24% 65% at 50% 76.25%, #11C3CC 0%, #119BA3 100%)",
                borderColor: "#1280A3",
              }}
            >
              Login
            </button>
          </div>
        </div>

        <div className="my-4 w-3/5 m-auto">
          <p
            className="font-comfortaa text-sm font-semibold text-center"
            style={{ color: "#084649" }}
          >
            You can also login to your account with
          </p>
        </div>

        <div className="mb-4">
          <button className="w-full h-10 flex flex-row justify-center items-center bg-white rounded-lg mt-2">
            <img className="w-4 mr-1" src={google} alt="google" />
            <h1
              className="font-quicksand text-xs font-medium"
              style={{ color: "#084649" }}
            >
              Google
            </h1>
          </button>
          <button className="w-full h-10 flex flex-row justify-center items-center bg-white rounded-lg mt-2">
            <img className="w-4 mr-1" src={microsoft} alt="microsoft" />
            <h1
              className="font-quicksand text-xs font-medium"
              style={{ color: "#084649" }}
            >
              Microsoft
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
