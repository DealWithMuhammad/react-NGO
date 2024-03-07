"use client";

import { useState, useRef } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./style.module.css";
import { Button, Group, Text, rem } from "@mantine/core";
import Image from "next/image";

export default function DropzoneButton({ handleImage,defaultValue }) {
  const [selectedImage, setSelectedImage] = useState(defaultValue);
  const openRef = useRef(null);

  const handleDrop = (files) => {
    // Assuming you want to display only the first selected image
    const image = files.find((file) =>
      [MIME_TYPES.jpeg, MIME_TYPES.png].includes(file.type)
    );
    if (image) {
      setSelectedImage(URL.createObjectURL(image));
      handleImage(URL.createObjectURL(image));
    }
  };

  return (
    <div className={classes.wrapper}>
      {!selectedImage && (
        <>
          <Dropzone
            openRef={openRef}
            onDrop={handleDrop}
            className={classes.dropzone}
            radius="md"
            accept={[MIME_TYPES.jpeg, MIME_TYPES.png]}
            maxSize={30 * 1024 ** 2}
          >
            <div style={{ pointerEvents: "none" }}>
              <Group justify="center">
                <Dropzone.Accept>
                  <IconDownload
                    style={{ width: rem(50), height: rem(50) }}
                    stroke={1.5}
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <IconX
                    style={{ width: rem(50), height: rem(50) }}
                    stroke={1.5}
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <IconCloudUpload
                    style={{
                      width: rem(50),
                      height: rem(50),
                      color: "#6f1d1b",
                    }}
                    stroke={1.5}
                  />
                </Dropzone.Idle>
              </Group>

              <Text ta="center" fw={700} fz="lg" mt="xl" c={"#6f1d1b"}>
                <Dropzone.Accept>Drop image here</Dropzone.Accept>
                <Dropzone.Reject>Image less than 30mb</Dropzone.Reject>
                <Dropzone.Idle>Upload Image</Dropzone.Idle>
              </Text>
              <Text ta="center" fz="sm" mt="xs" c="dimmed">
                Drag n drop files here to upload. We can accept only{" "}
                <i>.png, .jpeg</i> files that are less than 30mb in size.
              </Text>
            </div>
          </Dropzone>

          <Button
            className={classes.control}
            size="md"
            radius="xl"
            bg={"#6f1d1b"}
            onClick={() => openRef.current?.()}
          >
            Select files
          </Button>
        </>
      )}

      {selectedImage && (
        <div>
          <Image
            width={1000}
            height={500}
            src={selectedImage}
            alt="Selected Image"
            className="w-full h-auto rounded-lg"
          />
          <Button
            size="md"
            radius="xl"
            onClick={() => setSelectedImage(null)}
            variant="light"
            color="red"
            style={{ position: "absolute", top: rem(20), right: rem(20) }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
