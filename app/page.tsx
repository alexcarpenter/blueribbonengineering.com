import { readFile } from "fs/promises";
import path from "path";

async function getPackageVersion() {
  try {
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const fileContents = await readFile(packageJsonPath, "utf8");
    const packageJson = JSON.parse(fileContents);
    return packageJson.version;
  } catch (error) {
    console.error("Could not read package.json", error);
    return "Unknown";
  }
}

export default async function Home() {
  const version = await getPackageVersion();

  return (
    <>
      <header className="flex justify-between items-end gap-x-4">
        <h1 className="uppercase">
          Blue Ribbon
          <br />
          Engineering
        </h1>
        <p className="text-neutral-500">v{version}</p>
      </header>
    </>
  );
}
