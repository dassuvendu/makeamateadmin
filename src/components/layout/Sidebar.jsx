import {
  ImHome,
  AiOutlinePoweroff,
  AiOutlineUsergroupAdd,
  BsBorderWidth,
  MdSubscriptions,
} from "../../utils/icons";

import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../reducers/AuthSlice";
import { useDispatch } from "react-redux";

import SmallLogo from "../../assets/images/small_logo.png";
import { AiOutlineUser } from "react-icons/ai";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <aside className="top-0 left-0 flex flex-col w-16 h-screen p-3 overflow-y-auto ease-linear shadow-md no-scrollbar sm:m-0 sm:w-64 md:w-72 bg-black hs-overlay hs-overlay-open:translate-x-0">
      <Link
        to="/dashboard"
        className="flex items-center justify-center w-full mt-3 mb-14"
      >
        <img
          src={Logo}
          className="hidden w-10 h-10 transition-transform duration-1000 delay-500 transform sm:h-16 sm:w-16 md:block md:w-32 md:h-32 rounded-xl rotate-360"
          alt="Flowbite Logo"
        />
        <img src={SmallLogo} className="block md:hidden" alt="Flowbite Logo" />
      </Link>

      <div className="transition-all duration-1000 grow">
        <ul className="space-y-5">
          <li>
            <Link
              to="/dashboard"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <ImHome size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <AiOutlineUsergroupAdd size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Users
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/characters"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <AiOutlineUser size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Characters
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <BsBorderWidth size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Orders
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <MdSubscriptions size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Subscriptions
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/reset-password"
              className="flex items-start gap-2 p-1 m-1 transition-transform sm:p-2 hover:scale-110"
            >
              <MdSubscriptions size={24} className="text-red-800" />
              <span className="hidden font-semibold sm:inline-block text-slate-100 hover:text-slate-300">
                Reset Password
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-1 transition-all duration-1000">
        <ul className="space-5">
          <li>
            <button
              onClick={handleLogout}
              className="flex justify-center w-full gap-2 p-1 m-1 transition-transform bg-red-950 rounded-md shadow-lg sm:p-2 hover:bg-red-900"
            >
              <AiOutlinePoweroff size={24} className="text-black" />
              <span className="hidden font-semibold sm:inline-block text-slate-100">
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
