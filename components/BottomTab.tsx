import Image from 'next/image';
import Link from 'next/link';

export default function BottomTab() {
  return (
    <footer
      className={`w-[100vw] 420px:w-420 bg-white bottom-0 text-white shadow-md p-2 fixed`}
    >
      <div className="flex justify-around">
        <Link href="/">
          <Image src="/images/heart.png" alt="Logo" width={32} height={3} />
        </Link>
        <Link href="/counsel">
          <Image src="/images/chat.png" alt="Logo" width={32} height={3} />
        </Link>
        <Link href="/profile">
          <Image src="/images/user.png" alt="Logo" width={32} height={3} />
        </Link>
      </div>
    </footer>
  );
}
