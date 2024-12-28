import { readdir } from "fs/promises";

export interface Entry {
  slug: string;
  title: string;
  published: string;
}

export async function getEntries(): Promise<Entry[]> {
  const slugs = (
    await readdir("./app/interviews", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const entries = await Promise.all(
    slugs.map(async ({ name }) => {
      return getEntry(name);
    })
  );

  const sortedEntries = entries.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  );

  return sortedEntries;
}

async function getEntry(name: string): Promise<Entry> {
  const { metadata } = await import(`../app/interviews/${name}/page.mdx`);
  return { slug: name, ...metadata };
}
