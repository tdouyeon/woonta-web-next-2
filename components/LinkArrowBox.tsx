import Link from 'next/link';

const LinkArrowBox = ({ title, uri }: { title: string; uri: string }) => {
  return (
    <div>
      <div className="text-gray-200 flex justify-between items-center">
        <div className="text-primary text-xl font-semibold">{title}</div>
        <Link href={uri}>
          <svg
            className="w-8 h-8 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: 'rotate(270deg) translateX(-2px) translateY(6px)',
            }}
          >
            <path
              fillRule="evenodd"
              d="M8.293 5.293a1 1 0 011.414 0L14 8.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LinkArrowBox;
