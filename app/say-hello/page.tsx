"use client";

import Button from "@/components/Button";
import { useState } from "react";

async function makePostRequest(input: string) {
  // for serverside fetching we need to use the absolute url, for clientside fetching we can use the relative url:
  //const response = await fetch(`${process.env.LOCAL_URL}/api/test`, {

  const response = await fetch("api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: input }),
  });

  const data = await response.json();
  //console.log(data);
  return { data };
}

export default function SayHello() {
  console.log("hey, is this in the server or client?");
  //console.log(data);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const btnClick = async (input: string) => {
    const { data } = await makePostRequest(input);
    console.log("API data =", data);
    setMessage(data.message);
  };
  return (
    <div>
      <h1 className="pt-14 font-bold text-5xl text-blue-400">Say hello page</h1>
      <div className="flex flex-col items-start pt-4 text-lg gap-4">
        <input
          className="border-2 border-gray-300 rounded-md px-4 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          handleClick={() => btnClick(input)}
          label={`Get your "hello message"`}
        />
        <p className="pt-4 text-lg">{message}</p>
      </div>
    </div>
  );
}
