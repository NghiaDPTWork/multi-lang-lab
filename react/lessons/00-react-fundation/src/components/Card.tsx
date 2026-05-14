import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-2 border-gray-500 rounded-lg p-4 m-4">
        <h1 className="font-bold underline">This is a Card Frame</h1>
        {children}
      </div>
    </>
  );
}
