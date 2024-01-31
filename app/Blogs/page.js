"use client";
import { useState } from "react";
import Blog from "components/Blog";
import BlogTabs from "components/BlogTabs";
import Header from "components/Header";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("LAWS & TAXES");

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <>
      <section className="w-screen flex flex-col justify-center overflow-hidden backdrop-blur-sm ">
        <br />
        <Blog all={true} selectedCategory={selectedCategory} />
      </section>
    </>
  );
}
