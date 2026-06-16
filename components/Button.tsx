"use client";

export default function Button({ handleClick, label }: any) {
  return (
    <button
      className="border-2 p-2 cursor-pointer bg-blue-500"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
