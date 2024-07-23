const PageHeader = ({ name }: { name: string }) => {
  return (
    <header className="w-[100vw] 420px:w-420 fixed top-0">
      <div
        className="w-[100vw] 420px:w-420  fixed top-0 transform transition-transform duration-300 w-[100vw] 420px:w-420$translate-y-0 bg-white
      "
      >
        <nav className="text-white flex justify-between items-center p-4">
          <svg
            onClick={() => window.history.back()}
            className="w-6 h-6 cursor-pointer text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
              transform="rotate(90 10 10)"
            />
          </svg>
          <div className="text-primary font-semibold">{name}</div>
          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
