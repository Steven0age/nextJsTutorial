"use client";

import { useState } from "react";
import Button from "../../components/Button";

export default function DataLayer({ posts }: any) {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Button
        handleClick={() => setShowContent(showContent ? false : true)}
        label="Show Content"
      />
      {showContent &&
        posts.map((post: any) => {
          return (
            <>
              <div className="pt-2 pb-10 w-200 border-2">
                <h2 className="text-xl  text-amber-100">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </>
          );
        })}
    </>
  );
}
