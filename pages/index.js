import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        <li>
          <Link href="page-1">Page 1</Link>
        </li>
        <li>
          <Link href="page-2">Page 1</Link>
        </li>
        <li>
          <Link href="page-3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
}
