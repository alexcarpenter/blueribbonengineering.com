// import { Heading } from "@/components/heading";
// import { getEntries } from "@/utils/mdx";
// import Link from "next/link";

export default async function Home() {
  // const entries = await getEntries();
  return (
    <>
      <header>
        <h2 className="uppercase">
          <span aria-hidden>{"//"}</span> Exploring engineering excellence
        </h2>
        {/* <p className="mt-4 max-w-prose">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eum
          temporibus deleniti veritatis quo architecto nostrum? At dolorum
          repellat error quibusdam quas doloribus deleniti sequi quae, aut esse
          nostrum minima.
        </p> */}
      </header>

      {/* <section className="mt-8">
        <Heading>Prototypes</Heading>
      </section> */}

      {/* <section className="mt-8">
        <Heading>Interviews</Heading>
        <ul className="mt-4 space-y-2 list-['_*_'] list-inside">
          {entries.map((entry) => {
            return (
              <li key={entry.slug}>
                <Link href={`/interviews/${entry.slug}`} className="underline">
                  {entry.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section> */}
    </>
  );
}
