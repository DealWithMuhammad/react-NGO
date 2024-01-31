"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { formats, modules, categoryOptions } from "./FormModules"; // Assuming these are custom modules and formats for the editor
import "react-quill/dist/quill.snow.css";
import { Input, Select } from "@chakra-ui/react";

// Dynamically import Editor component
const Editor = dynamic(() => import("react-quill"), {
  ssr: false, // Disable server-side rendering
});

export default function PostForm({ handleSave, props }) {
  const [about, setAbout] = useState(props?.about || "");

  const [formData, setFormData] = useState({
    title: props?.title || "",
    subtitle: props?.subtitle || "",
    imageUrl: props?.imageUrl || "",
    category: props?.category || "Other", // Default category
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
            value={about}
          />
        )}

        <button className="shadow-md py-6" onClick={handleSaveContent}>
          Save
        </button>
      </div>
    </section>
  );
}
