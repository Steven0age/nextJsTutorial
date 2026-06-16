import DataLayer from "./dataLayer";
import Button from "../../components/Button";

export default async function Blog() {
  console.log("hey, is this in the server or client?");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //console.log("response =", response);

  const posts = await response.json();
  //console.log("posts =", posts);

  return (
    <div className="flex flex-col items-start gap-7">
      <h1 className="pt-14 font-bold text-5xl text-blue-400">Blog page</h1>

      <DataLayer posts={posts} />
    </div>
  );
}
