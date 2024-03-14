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
import { EditIcon } from "../../BlogsTable/EditIcon";
import { DeleteIcon } from "../../BlogsTable/DeleteIcon";
import { useRouter } from "next/navigation";
import { deleteDocument } from "api/functions/post";

const statusColorMap = {
  active: "success",
  paused: "danger",
};

const truncateText = (text, limit) => {
  if (!text || text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};

export default function ServiceTable({ service, columns }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    await deleteDocument("service", id);
  };

  const renderCell = React.useCallback(
    (service, columnKey) => {
      const cellValue = service[columnKey];
      const characterLimit = 30; // Change the character limit as needed
      const { subtitle, status, category, imageUrl, id } = service;

      switch (columnKey) {
        case "title":
          return (
            <User
              avatarProps={{ radius: "lg", size: "lg", src: imageUrl }}
              description={truncateText(subtitle, 40)}
              name={truncateText(subtitle, 30)}
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
              <Tooltip content="Edit Project">
                <span
                  onClick={() =>
                    router.push(`/admin/management/services/${id}`)
                  }
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Project">
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
      <TableBody items={service}>
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
