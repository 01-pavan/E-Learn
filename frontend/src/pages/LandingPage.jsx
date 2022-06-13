import CreateAccount from "../components/CreateAccount";
import SignIn from "../components/SignIn";
const LandingPage = () => {
  return (
    <div className="max-w-screen min-h-screen bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="relative py-4 max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 group">
        <a className="jsx-b35e882c88056c79 flex flex-grow lg:flex-grow-0 sm:space-x-2 items-center font-semibold text-xl text-white">
          E-LEARN
        </a>
        <div>
          <a class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white  text-center cursor-pointer">
            Sign in
          </a>
          <a class="lg:mx-4 inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-cyan-600 hover:bg-gradient-to-l text-center cursor-pointer">
            Create Free Account
          </a>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl px-4 mx-auto lg:flex-row">
        <div className="basis-6/12 ">
          <div className="flex flex-col my-28  mr-28">
            <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-white">
              The Ultimate <span className="">Full Stack Journey</span>
            </h1>
            <p className="mt-6 text-base text-xl text-gray-300">
              Skills for your present (and your future). Get started with us.
            </p>
            <div className="my-6">
              <button
                type="submit"
                // disabled
                className="w-full px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="basis-6/12 ">
          {/* <SignIn /> */}
          <CreateAccount />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// bg-zinc-900
//class="w-md max-w-md px-4 rounded mx-auto sm:px-6 border border-gray-700 bg-opacity-40 lg:px-0"
