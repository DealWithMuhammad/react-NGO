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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 2,
    icon: RiGovernmentLine,
    title: "Media Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 3,
    icon: TfiLayoutMediaLeft,
    title: "Goverment Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 4,
    icon: MdModelTraining,
    title: "Capacity Building Trainings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
  {
    id: 5,
    icon: TbBuildingCommunity,
    title: "Comunity Engagements And Advocacy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
  },
];

export default featuresData;
