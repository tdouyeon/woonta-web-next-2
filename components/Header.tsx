import Dropbox from './Dropbox';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      className="
        w-[100vw] 420px:w-420 bg-white top-0 text-white fixed"
    >
      <div className="flex justify-between items-center p-2 px-4">
        <nav>
          <Dropbox />
        </nav>
        <div>
          <button className="text-white px-4 py-2 rounded-md">
            <Image src="/images/search.png" alt="Logo" width={25} height={3} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
