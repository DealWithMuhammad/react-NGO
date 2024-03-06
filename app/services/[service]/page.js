import SectionHeader from "components/Common/SectionHeader";
import Service from "./Service";
import { Container, Image } from "@mantine/core";

export default function page() {
  return (
    <Container size={"lg"} className="w-full justify-center">
      <Service />
    </Container>
  );
}
