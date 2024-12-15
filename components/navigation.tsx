import Link from "next/link";

export function Navigation() {
  return (
    <nav className="uppercase">
      <ul>
        <li>
          <Link href="/">~/index</Link>
        </li>
        <li>
          <Link href="/interviews">~/interviews</Link>
        </li>
      </ul>
    </nav>
  );
}
