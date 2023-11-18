"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { HiOutlineTrash } from "react-icons/hi";

const DeleteBtn = ({ id }) => {
  const router = useRouter();

  const deleteTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }

    router.refresh();
  };

  return (
    <button
      onClick={deleteTopic}
      className="text-red-400 hover:text-red-600"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default DeleteBtn;
