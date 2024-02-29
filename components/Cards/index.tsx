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
      <div className="flex justify-center flex-wrap gap-2 my-10">
        <Card className="max-w-[580px] bg-[#272727]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <h1 className="text-2xl text-[#f8cf2c] font-bold">Mission</h1>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-white">To advocate for the realisation of refugee rights in Malaysia, specifically in their right to work, right to education and right to healthcare.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        {/* Second Card */}
        <Card className="max-w-[580px] bg-[#272727]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
            <h1 className="text-2xl text-[#f8cf2c] font-bold">Vision</h1>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-white">The legal recognition of all refugees in Malaysia; and their right to employment, right to accessible education and right to affordable and quality healthcare, regardless of their age, gender, nationality, ethnicity and religion.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>


    </>
  );
}
