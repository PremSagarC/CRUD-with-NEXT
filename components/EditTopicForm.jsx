"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] =
    useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.push("/"); 
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-2"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Title: </h2>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-700 text-white px-2 bg-gray-500"
          type="text"
          placeholder="Edit Title"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Description: </h2>
        <textarea
          className="border border-slate-700 text-white px-2 bg-gray-500"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Edit Description"
          rows={3}
          cols={5}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 py-2 font-semibold"
      >
        Edit Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
