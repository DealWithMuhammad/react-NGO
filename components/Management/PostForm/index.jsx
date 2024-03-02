"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { formats, modules, categoryOptions } from "./FormModules";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import DropzoneButton from "./Dropzone/index";
import "react-quill/dist/quill.snow.css";

const Editor = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function PostForm({ handleSave, props }) {
  const [about, setAbout] = useState(props?.about || "");

  const [formData, setFormData] = useState({
    title: props?.title || "",
    subtitle: props?.subtitle || "",
    imageUrl: props?.imageUrl || null,
    category: props?.category || "BLOG", // Default category
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
    handleSave(props?.id, { ...formData, about: about });
  };

  return (
    <section className="w-full overflow-hidden backdrop-blur-sm mt-4">
      <div className="flex flex-col my-10 rounded-md  p-10 gap-4">
        <DropzoneButton
          handleImage={(blob) => setFormData({ ...formData, imageUrl: blob })}
          defaultValue={formData.imageUrl}
        />

        <Autocomplete
          label="Select an Category"
          defaultInputValue={formData.category}
          className="max-w-full"
        >
          {categoryOptions.map((cat, index) => (
            <AutocompleteItem
              key={index}
              onChange={(e) => handleChange(e, "category")}
              value={cat}
            >
              {cat}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        <Input
          placeholder="Title"
          label={"Title"}
          className=" shadow-m"
          value={formData.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <Input
          placeholder="Subtitle"
          label={"Subtitle"}
          className=" shadow-m"
          value={formData.subtitle}
          onChange={(e) => handleChange(e, "subtitle")}
        />
        {/* <Input
          placeholder="Image Url"
          label={"Image URL"}
          className=" shadow-m"
          value={formData.imageUrl}
          onChange={(e) => handleChange(e, "imageUrl")}
        /> */}
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
