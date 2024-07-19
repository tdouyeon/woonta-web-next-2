import Dropbox from './Dropbox';

const Header = () => {
  return (
    <header
      className="
        w-[100vw] 420px:w-420 bg-gray-800 top-0 text-white shadow-md fixed"
    >
      <div className="flex justify-between items-center p-4">
        <nav>
          <Dropbox />
        </nav>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            검색
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
