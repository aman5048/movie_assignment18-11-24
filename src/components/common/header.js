import { Link } from "react-router-dom";
import logo from "../../assets/logo192.png";

export const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movies
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};
