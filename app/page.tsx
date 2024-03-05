import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/data" className="text-blue-500">
        Data
      </Link>
    </main>
  );
}
