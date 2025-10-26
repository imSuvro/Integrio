import { Button } from "@/components/ui/button";
import { User } from "@/generated/prisma/client";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {users.map((user: User) => (
        <div key={user.id}>{user.name ?? "No name"}</div>
      ))}
      <Button>Click me</Button>
    </div>
  );
};
export default Page;