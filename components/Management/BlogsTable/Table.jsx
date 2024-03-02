"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { useRouter } from "next/navigation";
import { deleteDocument } from "api/functions/post";

const statusColorMap = {
  active: "success",
  paused: "danger",
};

const truncateText = (text, limit) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};

export default function BlogsTable({ blogs, columns }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    await deleteDocument("blogs", id);
  };

  const renderCell = React.useCallback(
    (blog, columnKey) => {
      const cellValue = blog[columnKey];
      const characterLimit = 30; // Change the character limit as needed
      const { title, subtitle, status, category, imageUrl, id } = blog;

      switch (columnKey) {
        case "title":
          return (
            <User
              avatarProps={{ radius: "lg", size: "lg", src: imageUrl }}
              description={truncateText(subtitle, 40)}
              name={truncateText(title, 30)}
            />
          );
        case "subtitle":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {truncateText(category, characterLimit)}
              </p>
              <p className="text-bold text-sm capitalize text-default-400">
                {truncateText(id, characterLimit)}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[status]}
              size="sm"
              variant="flat"
            >
              {status || "Not Yet"}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit blog">
                <span
                  onClick={() => router.push(`/management/blogs/${id}`)}
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete blog">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon onClick={() => handleDelete(id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return truncateText(cellValue, characterLimit);
      }
    },
    [router]
  );

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={blogs}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
