import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function Cards() {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-2 mt-10 mb-2 md:my-10">
        <Card className="max-w-[580px] bg-[#272727]">
          <CardHeader className="flex gap-3 pb-0">
            <div className="flex flex-col">
              <h1 className=" text-xl md:text-2xl text-[#f8cf2c] font-bold">
                Mission
              </h1>
            </div>
          </CardHeader>
          <CardBody className="py-3 mb-2">
            <p className="text-white text-sm md:text-large">
              To advocate for the realisation of refugee rights in Malaysia,
              specifically in their right to work, right to education and right
              to healthcare.
            </p>
          </CardBody>
        </Card>
        {/* Second Card */}
        <Card className="max-w-[580px] bg-[#272727]">
          <CardHeader className="flex gap-3 pb-0">
            <div className="flex flex-col">
              <h1 className=" text-xl md:text-2xl text-[#f8cf2c] font-bold">
                Vision
              </h1>
            </div>
          </CardHeader>
          <CardBody className="py-3 mb-2">
            <p className="text-white text-sm md:text-large">
              The legal recognition of all refugees in Malaysia; and their right
              to employment, right to accessible education and right to
              affordable and quality healthcare, regardless of their age,
              gender, nationality, ethnicity and religion.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
