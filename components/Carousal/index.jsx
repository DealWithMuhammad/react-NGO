"use client";
import { Image, Show } from "@chakra-ui/react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
const desktopImageUrls = [
  "https://img.freepik.com/premium-photo/business-man-create-design-modern-building-real-estate_35761-316.jpg?w=1060",
];

const mobileImageUrls = [
  "https://img.freepik.com/premium-photo/business-man-create-design-modern-building-real-estate_35761-316.jpg?w=1060",
];

export default function Hero() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const renderSliderItem = (url, h, w) => (
    <Image key={url} data-src={url} src={url} alt="hero-image" />
  );

  return (
    <section style={{ marginBottom: "3rem" }}>
      <Show breakpoint="(min-width: 700px)">
        <AutoplaySlider animation="cubeAnimation" bullets={false} style={{ height: "70vh" }}>
          {desktopImageUrls.map((url) => renderSliderItem(url))}
        </AutoplaySlider>
      </Show>
      <Show breakpoint="(max-width: 700px)">
        <AwesomeSlider style={{ height: "60vh", width: "100%" }}>
          {mobileImageUrls.map((url) => renderSliderItem(url))}
        </AwesomeSlider>
      </Show>
    </section>
  );
}
