import { Image } from "@chakra-ui/react";
import PropertyListings from "components/PropertyListings";

export default function page() {
  return (
    <section>
      <Image
        src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=740&t=st=1704925030~exp=1704925630~hmac=7e2115f546b29d8f3e193307225e4a022514902ab65af24fc9a7ecf647199b1e"
        alt="About Us"
        height={300}
        className="w-screen object-cover mb-3"
      />
      <PropertyListings all={true} />
    </section>
  );
}
