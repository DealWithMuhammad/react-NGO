import React, { useState } from "react";
import dynamic from "next/dynamic";
import { formats, modules } from "./FormModules";
import { Button, Input, Spinner } from "@nextui-org/react";
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

  const [loading, setLoading] = useState(false); // State variable to track loading state

  const handleEditorChange = (text) => {
    setAbout(text);
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSaveContent = async () => {
    setLoading(true); // Set loading to true when saving content
    await handleSave(props?.id, { ...formData, about: about });
    setLoading(false); // Set loading back to false when content is saved
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
        <Input
          placeholder="Title"
          s
          label={"Title"}
          className=" shadow-m"
          value={formData.subtitle}
          onChange={(e) => handleChange(e, "title")}
        />
        <Input
          placeholder="Description"
          label={"Description"}
          className=" shadow-m"
          value={formData.description}
          onChange={(e) => handleChange(e, "description")}
        />
        {typeof document !== "undefined" && (
          <Editor
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={handleEditorChange}
            value={about}
          />
        )}

        <Button
          className="shadow-md bg-yellow-500 py-6"
          onClick={handleSaveContent}
          disabled={loading} // Disable button when loading is true
        >
          {loading ? <Spinner /> : "Save"}{" "}
          {/* Display Loading component while loading */}
        </Button>
      </div>
    </section>
  );
}
