import { Image } from "@chakra-ui/react";
import SAM from "components/SAM";
import Testimonial from "components/Testimonial";
import PropertyListings from "components/PropertyListings";
import Link from "next/link";

export default function ConstructionPage() {
  return (
    <section className="my-10 backdrop-blur-sm ">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="lg:px-0  mx-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            WE ARE YOUR TRUSTED CONSTRUCTION PARTNER
          </h2>
          <Link
            href="#"
            className="py-2 text-blue-500 font-extrabold inline-flex items-center justify-center mb-2"
          >
            Let us handle all the details, from planning and permits to
            construction
          </Link>
        </div>

        <Image
          height={300}
          alt="hero"
          src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="w-screen h-67.5
             object-cover lg:rounded"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12  px-6">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
          </p>

          <p className="pb-6">
            Difficulty on insensible reasonable in. From as went he they.
            Preference themselves me as thoroughly partiality considered on in
            estimating. Middletons acceptance discovered projecting so is so or.
            In or attachment inquietude remarkably comparison at an. Is
            surrounded prosperous stimulated am me discretion expression. But
            truth being state can she china widow. Occasional preference fat
            remarkably now projecting uncommonly dissimilar. Sentiments
            projection particular companions interested do at my delightful.
            Listening newspaper in advantage frankness to concluded unwilling.
          </p>
          <div className="">
            <p className="mb-6 text-gray-600">
              Welcome to the realm of construction excellence. As your dedicated
              team for building properties and homes in Islamabad, we assure you
              of unwavering reliability. We manage every facet of the
              construction process, offering you seamless progress updates every
              step of the way.
            </p>
            <p className="mb-6 text-gray-600">
              Say goodbye to construction worries! With BAIG ASSOCIATES by your
              side, you wll experience complete transparency every step of the
              way. We provide regular progress updates and clear communication,
              so you are always in the loop.
            </p>
            <h3 className="mb-4 font-semibold text-xl text-gray-600">
              Why Choose BAIG ASSOCIATES?
            </h3>
            <ul
              role="list"
              className="marker:text-sky-600 list-disc pl-5 space-y-3 text-slate-500"
            >
              <li>Verified and Trusted</li>
              <li>Unwavering Reliability</li>
              <li>Transparency Every Step of the Way</li>
              <li>Exceptional Craftsmanship</li>
              <li>Stress-Free Experience</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <SAM />
      <br />
      <Testimonial />
      <PropertyListings />
    </section>
  );
}
