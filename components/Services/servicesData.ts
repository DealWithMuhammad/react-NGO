import { Feature } from "../../types/feature";
import { RiGovernmentLine } from "react-icons/ri";
import { TbBuildingCommunity } from "react-icons/tb";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { MdModelTraining } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: MdOutlineMeetingRoom,
    title: "ReAct General Meeting",
    href: "/services/react-general-meeting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imageUrl: "",
  },
  {
    id: 2,
    icon: RiGovernmentLine,
    title: "Media Engagement",
    href: "/services/media-engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imageUrl: "",
  },
  {
    id: 3,
    icon: TfiLayoutMediaLeft,
    title: "Goverment Engagement",
    href: "/services/goverment-engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imageUrl: "",
  },
  {
    id: 4,
    icon: MdModelTraining,
    title: "Capacity Building Trainings",
    href: "/services/capacity-building-trainings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imageUrl: "",
  },
  {
    id: 5,
    icon: TbBuildingCommunity,
    title: "Comunity Engagements And Advocacy",
    href: "/services/community-engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imageUrl: "",
  },
];

export default featuresData;
