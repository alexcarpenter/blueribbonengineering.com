import { readFile } from "fs/promises";
import path from "path";

export async function getPackageVersion() {
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
