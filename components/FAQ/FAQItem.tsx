import { useState } from "react";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const [isOpen, setIsOpen] = useState<boolean>(activeFaq === id);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
    handleFaqToggle(id);
  };

  return (
    <>
      <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark">
        <button
          onClick={toggleFaq}
          className="flex cursor-pointer items-center justify-between transition ease-in-out duration-300 px-6 py-5 text-metatitle3 font-medium text-[#252827] dark:text-white lg:px-9 lg:py-7.5"
        >
          {quest}

          <svg
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <p
          className={`border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {ans}
        </p>
      </div>
    </>
  );
};

export default FAQItem;
