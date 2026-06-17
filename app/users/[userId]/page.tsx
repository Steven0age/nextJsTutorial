import { fetchUser } from "@/lib/users";

export async function generateStaticParams() {
  return [
    { userId: "1" },
    { userId: "2" },
    { userId: "3" },
    { userId: "4" },
    { userId: "5" },
    { userId: "6" },
    { userId: "7" },
    { userId: "8" },
    { userId: "9" },
    { userId: "10" },
  ];
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);
  return (
    <div>
      <h1 className="pt-14 pb-6 font-bold text-5xl text-blue-400">
        User page of {user.name}
      </h1>
      <p>UserID = {userId}</p>
      <br />
      <h3 key={user.id}>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
}
