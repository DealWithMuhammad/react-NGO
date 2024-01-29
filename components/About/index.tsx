"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const aboutOneContent = {
    title: "We Bring Your Property Dreams to Life",
    subtitle: "Your Vision, Our Expertise",
    dynamicSubtitle: "Crafting the Perfect Space for You",
    description:
      "Don't settle for anything less than the ideal property. We're here to make it a reality, tailored to your exact needs and desires.",
    features: [
      {
        number: "01",
        title: "Property Creation ",
        description:
          "From concept to completion, we handle every aspect of the process so you can focus on what matters most: enjoying your dream property.",
      },
      {
        number: "02",
        title: "Unlimited Possibilities, Meticulously Executed",
        description:
          "No vision is too grand or too intricate for our team. We specialize in transforming imagination into tangible, exceptional spaces.",
      },
    ],
  };

  const aboutTwoContent = {
    title: "Explore Your Dream Property Now",
    subtitle: "Ready to Find the Perfect Space?",
    dynamicSubtitle: "Visit Our Properties Listing Page",
    description:
      "Browse our extensive collection of exceptional properties and discover the one that speaks to your heart.",
  };

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="https://img.freepik.com/free-photo/living-room-with-blue-couch-white-wall-with-painting-it_1340-23237.jpg?t=st=1704535529~exp=1704539129~hmac=fc2a7a912a251adf7f80cd8a5235e9b15ba3f2cc4893bb359bfb825a4129d6cf&w=826"
                alt="About"
                className="dark:hidden rounded-md object-cover"
                fill
              />
              <Image
                src="https://img.freepik.com/free-photo/living-room-with-blue-couch-white-wall-with-painting-it_1340-23237.jpg?t=st=1704535529~exp=1704539129~hmac=fc2a7a912a251adf7f80cd8a5235e9b15ba3f2cc4893bb359bfb825a4129d6cf&w=826"
                alt="About"
                className="hidden dark:block rounded-md object-cover"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                {aboutOneContent.title}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {aboutOneContent.subtitle}{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  {aboutOneContent.dynamicSubtitle}
                </span>
              </h2>
              <p>{aboutOneContent.description}</p>

              {aboutOneContent.features.map((feature, index) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {feature.number}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                {aboutTwoContent.title}
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {`Packed with All Essential ${aboutTwoContent.subtitle} `}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  {aboutTwoContent.dynamicSubtitle}
                </span>
              </h2>
              <p>{aboutTwoContent.description}</p>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/426.5] md:block md:w-1/2"
            >
              <Image
                src="https://img.freepik.com/premium-psd/interior-frames-mockup_42637-1405.jpg?w=996"
                alt="About"
                className="dark:hidden rounded-md"
                fill
              />
              <Image
                src="https://img.freepik.com/premium-psd/interior-frames-mockup_42637-1405.jpg?w=996"
                alt="About"
                className="hidden dark:block rounded-md"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
