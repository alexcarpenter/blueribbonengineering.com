import { getPackageVersion } from "@/utils/getPackageVersion";

export async function Header() {
  const version = await getPackageVersion();
  return (
    <header className="flex justify-between items-end gap-x-4 mb-4 pb-4 border-b border-dotted">
      <h1 className="uppercase">
        Blue Ribbon
        <br />
        Engineering
      </h1>
      <p>v{version}</p>
    </header>
  );
}
