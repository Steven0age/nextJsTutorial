"use client";

import { useRouter } from "next/navigation";

export default function UsersList({
  users,
}: {
  users: { id: number; name: string }[];
}) {
  const router = useRouter();
  return (
    <div>
      {users.map((user: { id: number; name: string }) => {
        return (
          <h3
            key={user.id}
            className="cursor-pointer hover:text-blue-400"
            onClick={() => router.push(`/users/${user.id}`)}
          >
            {user.name}
          </h3>
        );
      })}
    </div>
  );
}
