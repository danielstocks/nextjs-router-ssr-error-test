import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        <li>
          <Link href="1">Page 1</Link>
        </li>
        <li>
          <Link href="2">Page 2</Link>
        </li>
        <li>
          <Link href="3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
}
