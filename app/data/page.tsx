import Link from "next/link";
import { getAll } from "./actions";

export default async function Page() {
  const data = await getAll();
  return (
    <ul>
      <li>
        <Link href="/data/add" className="text-blue-500">
          Add
        </Link>
      </li>
      {data.map((item) => (
        <li key={item.name}>{item.name} </li>
      ))}
    </ul>
  );
}
