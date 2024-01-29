import ServiceDetails from "components/ServiceDetails";
import servicesData from "../servicesData";

export default function page() {
  return <ServiceDetails data={servicesData[0]} />;
}
