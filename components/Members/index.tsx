"use client";

import SectionHeader from "../Common/SectionHeader";

const Members = ({ all, selectedCategory }) => {


  return (
    <section className="py-10 w-full md:mx-10 ">
      <div className=" px-12 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Objectives`,
              description: ``,
            }}
          />
            <div className="bg-[#272727] p-0 py-10 px-8 md:p-10 text-[#f8cf2c] font-bold rounded-xl border">
              <div className="flex text-left flex-wrap wrap md:justify-evenly">
                <div>1. LEADERSHIP EMPOWERMENT</div>
                <div>2. STRATEGIC INITIATIVES</div>
                <div>3. COLLABORATIVE SUPPORT</div>
              </div>
              <div className="flex flex-wrap wrap md:justify-evenly md:mt-6">
                <div>4. POLICY ADVOCACY</div>
                <div>5. RIGHTS ADVOCACY</div>
                <div>6. PUBLIC SUPPORT</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
