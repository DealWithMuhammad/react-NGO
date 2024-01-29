interface FeatureTab {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
}

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Solid Has Neat & Clean User Interface.",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.`,
    desc2: `    Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "https://img.freepik.com/premium-vector/smart-home-background-flat-style_23-2147851648.jpg?w=740",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Ready to Use Pages You Need for a SaaS Business.",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.`,
    desc2: `    Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "https://img.freepik.com/premium-vector/smart-home-background-flat-style_23-2147851648.jpg?w=740",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Functional Blog, DB, Auth and Many More",
    desc1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies lacus non fermentum ultrices. Fusce consectetur le.`,
    desc2: `Nam id eleifend dui, id iaculis purus. Etiam lobortis neque nec finibus sagittis. Nulla ligula nunc egestas ut.`,
    image: "https://img.freepik.com/premium-vector/smart-home-background-flat-style_23-2147851648.jpg?w=740",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
