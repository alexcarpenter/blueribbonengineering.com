import { getPackageVersion } from "@/utils/getPackageVersion";
import Link from "next/link";

export async function Header() {
  const version = await getPackageVersion();
  return (
    <header className="flex justify-between items-end gap-x-4 mb-4 pb-4 border-b">
      <h1 className="uppercase">
        <Link href="/">
          Blue Ribbon
          <br />
          Engineering
        </Link>
      </h1>
      <p>v{version}</p>
    </header>
  );
}
