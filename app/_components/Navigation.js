import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home Page</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About page</Link>
      </li>
      <li>
        <Link href="/account">Your account</Link>
      </li>
    </ul>
  );
}
