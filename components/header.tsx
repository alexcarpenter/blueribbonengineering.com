import { getPackageVersion } from "@/utils/getPackageVersion";

export async function Header() {
  const version = await getPackageVersion();
  return (
    <header className="flex justify-between items-end gap-x-4 mb-8">
      <h1 className="uppercase">
        Blue Ribbon
        <br />
        Engineering
      </h1>
      <p className="text-neutral-500">v{version}</p>
    </header>
  );
}
