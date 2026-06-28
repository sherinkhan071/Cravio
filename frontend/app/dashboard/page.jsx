import { checkUser } from "@/lib/checkUser";

export default async function Dashboard() {
  console.log("DASHBOARD PAGE RUNNING");

  const user = await checkUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}