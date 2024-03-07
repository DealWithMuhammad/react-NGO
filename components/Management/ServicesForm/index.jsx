"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { formats, modules, categoryOptions } from "./FormModules";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import DropzoneButton from "./Dropzone/index";
import "react-quill/dist/quill.snow.css";

// Import react-hot-toast
import { toast } from "react-hot-toast";

const Editor = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function ServicesForm({ handleSave, props }) {
  const [about, setAbout] = useState(props?.about || "");

  const [formData, setFormData] = useState({
    title: props?.title || "",
    description: props?.description || "",
    imageUrl: props?.imageUrl || null,
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
    // Show toast notification when content is saved
    toast.success("Content saved successfully!");
  };

  return (
    <section className="w-full overflow-hidden backdrop-blur-sm mt-4">
      <div className="flex flex-col my-10 rounded-md  p-10 gap-4">
        <DropzoneButton
          handleImage={(blob) => setFormData({ ...formData, imageUrl: blob })}
          defaultValue={formData.imageUrl}
        />
        {/* <Input
          placeholder="Title"
          label={"Title"}
          className=" shadow-m"
          value={formData.title}
          onChange={(e) => handleChange(e, "title")}
        /> */}
        <Input
          placeholder="Title"
          label={"Subtitle"}
          className=" shadow-m"
          value={formData.subtitle}
          onChange={(e) => handleChange(e, "subtitle")}
        />

        <Input
          placeholder="Description"
          label={"Description"}
          className=" shadow-m"
          value={formData.description}
          onChange={(e) => handleChange(e, "description")}
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