"use client"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const categories = [
  "PROJECTS",
  "LAWS & TAXES",
  "CONSTRUCTION",
  "LIFESTYLE",
  "HOME DECOR",
  "TOURISM",
  "AREA GUIDES",
  "ZAMEEN PRODUCT UPDATES",
  "TEAM",
];

export default function Tabs({ selectCategory, currCat }) {

  return (
    <Dropdown >
      <DropdownTrigger>
        <Button style={{ width: "90%", marginLeft: "5%", overflow: 'hidden', fontWeight: '500' }} variant="solid" >
          {currCat || "loading"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {categories.map((cat) => (
          <DropdownItem key={cat} onClick={() => selectCategory(cat)}>
            {cat}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
