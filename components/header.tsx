import { getPackageVersion } from "@/utils/getPackageVersion";

export async function Header() {
  const version = await getPackageVersion();
  return (
    <header className="flex justify-between items-end gap-x-4 mb-4 pb-4 border-b border-neutral-800 border-dashed">
      <h1 className="uppercase text-yellow-500">
        Blue Ribbon
        <br />
        Engineering
      </h1>
      <p className="text-neutral-500">v{version}</p>
    </header>
  );
}
