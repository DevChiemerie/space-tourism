import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="hidden md:block bg-lightblue text-darkblue">
      <li className="flex gap-10 justify-end">
        <Link href="/">Home</Link>
        <Link href="/crew">Crew</Link>
        <Link href="/destination">Destination</Link>
        <Link href="/technology">Technology</Link>
      </li>
    </ul>
  );
}
