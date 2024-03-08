"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <div className=" mb-0 mt-20 w-[100%]">
        <div className="relative z-1 rounded-2xl  bg-[#f8cf2c] py-8 pt-8">
          {/* <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
          /> */}
          {/* <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 left-0 transform rotate-45 -z-1"
          /> */}

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
            className="animate_top mb-12.5 px-4  md:px-0 lg:mb-17.5 "
          >
            <div className="flex justify-around mt-10 flex-wrap mx-16 ">
              <div className="md:w-1/2">
                <h2 className="text-3xl  font-bold text-[#252827] xl:text-sectiontitle3">
                  Mission
                </h2>
                <p className="mx-auto xl:mr-[239px] ">
                  To advocate for the realisation of refugee rights in Malaysia,
                  specifically in their right to work, right to education and
                  right to healthcare.
                </p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <h2 className="text-3xl font-bold text-[#252827] xl:text-sectiontitle3">
                  Vision
                </h2>
                <p className="mx-auto ">
                  The legal recognition of all refugees in Malaysia; and their
                  right to employment, right to accessible education and right
                  to affordable and quality healthcare, regardless of their age,
                  gender, nationality, ethnicity and religion.
                </p>
              </div>
            </div>
          </motion.div>

          {/* <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-[#252827] dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">World Wide Clients</p>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-[#252827] dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Downloads</p>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-[#252827] dark:text-white xl:text-sectiontitle3">
                362
              </h3>
              <p className="text-lg lg:text-para2">Winning Award</p>
            </motion.div>
          </div> */}
        </div>
      </div>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
