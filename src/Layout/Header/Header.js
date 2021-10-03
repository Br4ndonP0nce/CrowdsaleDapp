import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-blue-300 shadow-xl shadow-inner">
      <div className="flex items-center justify-between py-3 px-5 md:px-10">
        <div className="flex items-center gap-2">
          <label className="text-lg tracking-wide">Mtoken</label>
        </div>

        <div className="hidden lg:flex gap-5 items-center">
          <div className="flex gap-5 font-bold">
            <Link to="/home">HOME</Link>
            ADD MORE LINKS
          </div>
        </div>
      </div>
    </header>
  );
};
