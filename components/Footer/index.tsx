"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import Newsletter from "components/Common/Newsletter";

const Footer = () => {
  return (
    <>
      <footer className="border-t mt-0 border-stroke text-white bg-[#272727]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-col md:flex-row md:flex md:flex-wrap mx-12 md:mx-0 gap-8 md:justify-around lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium">Newsletter</h4>
                <p className="mb-4 w-[90%]">
                  Subscribe to receive future updates.
                </p>

                <Newsletter />
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text[#fff] dark:text-white">
                  Navigations
                </h4>

                <ul className="list-none">
                  <li>
                    <Link
                      href="/"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/AboutUs"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/ContactUs"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/FAQs"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      FAQ's
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text[#fff] dark:text-white">
                  Contacts
                </h4>

                <ul className="list-none">
                  <li>
                    <Link
                      href="email"
                      className="mb-3 inline-block hover:text-primary"
                    >
                      info@reactmalaysia.com
                    </Link>
                  </li>
                  <li>
                    <p>
                      <Link href="https://wa.me/+60179922312">
                        +60 17-992 2312
                      </Link>
                    </p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text[#fff] dark:text-white">
                  Socials
                </h4>

                <ul className="list-none">
                  <div className="flex gap-5">
                    <div>
                      <Link
                        href="https://www.facebook.com/ReActMalaysia"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#fff] transition-all duration-300 hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1499)">
                            <path
                              d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1499">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.instagram.com/react.malaysia/"
                        aria-label="social icon"
                        className="text-2xl text-[#D1D8E0] hover:text-primary"
                      >
                        <AiFillInstagram />
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link
                        href="https://www.linkedin.com/company/refugee-action-for-change/"
                        aria-label="social icon"
                      >
                        <svg
                          className="fill-[#fff] transition-all duration-300 hover:fill-primary"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1505)">
                            <path
                              d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1505">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ul>
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-center lg:gap-0">
              <div></div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-col mx-0 px-4 bg-black text-white flex-wrap items-center justify-center  border-t border-stroke py-2  lg:flex-row lg:justify-between">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <ul className="flex items-center gap-8 list-none">
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <p>&copy; {new Date().getFullYear()} ReAct. All rights reserved</p>
          </motion.div>

          <div></div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </footer>
    </>
  );
};

export default Footer;
