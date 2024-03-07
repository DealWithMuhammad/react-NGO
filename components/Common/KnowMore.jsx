import Link from "next/link";

const KnowMore = ({ link }) => {
  return (
    <Link
      href={"/FAQs"}
      className="group mt-7.5 inline-flex items-center gap-2.5 text-[#252827] hover:text-[#f8cf2c] dark:text-white"
    >
      <span className="duration-300 group-hover:pr-2">Know More</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};

export default KnowMore;
