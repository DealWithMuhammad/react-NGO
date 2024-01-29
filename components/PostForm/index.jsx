"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  formats,
  modules,
  categoryOptions,
} from "./FormModules"; // Assuming these are custom modules and formats for the editor
import "react-quill/dist/quill.snow.css";
import SectionHeader from "components/Common/SectionHeader";
import { Input, Select } from "@chakra-ui/react";
import { Button } from "@mantine/core";

// Dynamically import Editor component
const Editor = dynamic(() => import("react-quill"), {
  ssr: false, // Disable server-side rendering
});

export default function PostForm({ handleSave }) {
  const [about, setAbout] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
    category: "Other", // Default category
  });

  const handleEditorChange = (text) => {
    setAbout(text);
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSaveContent = () => {
    handleSave({ ...formData, about: about });
  };

  return (
    <section className="w-full overflow-hidden backdrop-blur-sm mt-4">
      <SectionHeader
        headerInfo={{
          title: "Post Form",
          subtitle: "Write New Post",
          description:
            "We offer a comprehensive range of architectural and construction services to bring your ideas to life.",
        }}
      />
      <div className="flex flex-col my-10 rounded-md  p-10 gap-4">
        <Select
          placeholder="Select Category"
          className="bg-slate-300 rounded-md"
          value={formData.category}
          onChange={(e) => handleChange(e, "category")}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
        <Input
          placeholder="Title"
          className=" shadow-md bg-slate-300 rounded-md"
          value={formData.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <Input
          placeholder="Subtitle"
          className=" shadow-md bg-slate-300 rounded-md"
          value={formData.subtitle}
          onChange={(e) => handleChange(e, "subtitle")}
        />
        <Input
          placeholder="Image Url"
          className=" shadow-md bg-slate-300 rounded-md"
          value={formData.imageUrl}
          onChange={(e) => handleChange(e, "imageUrl")}
        />
        {typeof document !== "undefined" && ( // Check if document is defined
          <Editor
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={handleEditorChange}
          />
        )}

        <button className="shadow-md py-6" onClick={handleSaveContent}>
          Save
        </button>
      </div>
    </section>
  );
}
