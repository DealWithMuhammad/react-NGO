import { Image } from "@chakra-ui/react";
import { Container } from "@mantine/core";
import SAM from "components/SAM";
import Testimonial from "components/Testimonial";
import Link from "next/link";

export default function index({ data }) {
    const { id, href, icon, image, title, subtitle, description } = data
    return (
        <section className="backdrop-blur-sm  pb-18">
            <Image
                src={"https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=740&t=st=1704925030~exp=1704925630~hmac=7e2115f546b29d8f3e193307225e4a022514902ab65af24fc9a7ecf647199b1e"}
                alt="About Us"
                height={300}
                className="w-screen object-cover mb-3"
            />
            <Container size={"lg"}>
                <div className=" flex flex-col py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
                    <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                        <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                            <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
                            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                            <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                        </div>

                        <div className="max-w-lg md:mx-12 md:order-2">
                            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
                                {title}
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                {subtitle}
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="#"
                                    className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-black rounded-md md:inline"
                                >
                                    Call Us Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 md:w-1/2">
                        <Image
                            className="object-cover w-full h-full max-w-2xl rounded-md shadow-lg"
                            src={image}
                            alt="apple watch photo"
                        />
                    </div>
                </div>
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                    More About This Service
                </h2>
                <p className="mt-6 text-gray-600">
                    {description}
                </p>
            </Container>
            <br />
            <br />
            <SAM />
            <br />
            <br />
            <Testimonial />
        </section>
    )
}
