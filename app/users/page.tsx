import { fetchUsers } from "@/lib/users";
import UsersList from "./[userId]/usersList";

export default async function Users() {
  const users = await fetchUsers();
  return (
    <div>
      <h1 className="pt-14 pb-6 font-bold text-5xl text-blue-400">
        Users page
      </h1>
      <UsersList users={users} />
    </div>
  );
}
