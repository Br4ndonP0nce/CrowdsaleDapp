export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100">
      <div className="flex flex-col gap-10 items-center justify-between py-3 px-5 md:px-10">
        <div className="grid gap-10 w-8/12 sm:w-10/12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-full max-w-screen-lg ">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">About</h1>
            PUT LINKS HERE
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Support Center</h1>
            PUT LINKS HERE
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Community</h1>
            PUT LINKS HERE
          </div>
        </div>
        <div className="w-9/12 h-0.5 bg-gray-300 rounded" />
        <div className="flex flex-col items-center justify-between w-9/12 gap-3 lg:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-2">
              <label className="text-lg tracking-wide">Mtoken</label>
            </div>
            <label className="text-xs">
              &#169; Mtoken crypto {new Date().getFullYear()}
            </label>
          </div>
          <div className="flex gap-5 text-2xl"></div>
        </div>
      </div>
    </footer>
  );
};
