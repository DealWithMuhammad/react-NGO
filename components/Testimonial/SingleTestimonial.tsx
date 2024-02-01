import { Testimonial } from "types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, content } = review;

  const person =
    "https://img.freepik.com/premium-vector/man-doubts-oops-sorry-guy-with-question-mark-search-solution-i-know-man-shrugging-shoulders-shows-helplessly-question-gesture-spread-his-hands-he-does-know-what_435184-410.jpg?w=740";

  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-[#252827] dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image
          width={60}
          height={60}
          className="object-cover"
          src={person}
          alt={name}
        />
      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
