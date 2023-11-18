import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";

// icons
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/topics",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Faile to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error while getting topics: ", error);
  }
};

export default async function TopicLists() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-100 my-3 flex justify-between gap-5 items-start"
        >
          <div className="">
            <h2 className="font-bold text-2xl">
              {topic.title}
            </h2>
            <hr className="w-[500px]" />
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-2 ">
            <DeleteBtn id={topic._id} />
            <Link
              href={`/editTopic/${topic._id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
