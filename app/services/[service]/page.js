import SectionHeader from "components/common/SectionHeader";
import Service from "./Service";
import { Container, Image } from "@mantine/core";

export default function page() {
  return (
    <Container size={"lg"} className="w-full justify-center">
      <SectionHeader
        headerInfo={{
          title: "Our Services",
          subtitle: "Transforming Spaces, Creating Dreams",
          description:
            "Discover a range of premium home renovation services designed to elevate your living spaces. From stunning home designs to complete renovations, we specialize in turning your vision into reality. Explore our services and take the first step towards the home of your dreams.",
        }}
      />

      <Image
        src={
          "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?w=826&t=st=1705873274~exp=1705873874~hmac=d8f626488f3468c3c6e7394908034e14bb03c948651f4b4c35c67d02ae582de4"
        }
        alt={"Room"}
        loading="eager"
        radius={"lg"}
        style={{
          width: "auto",
          height: "70vh",
          margin: "auto",
          objectFit: "cover",
        }}
      />
      <Service />
    </Container>
  );
}
