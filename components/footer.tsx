import * as React from "react";
import { cx } from "@/utils/className";

const items: {
  title: string;
  description: React.ReactNode;
}[] = [
  {
    title: "Framework",
    description: "Next.js",
  },
  {
    title: "Font",
    description: "Jetbrains Mono",
  },
  {
    title: "Styling",
    description: "Tailwind CSS",
  },
  {
    title: "Proprietor",
    description: "Alex Carpenter",
  },
];

export function Footer() {
  return (
    <footer>
      <dl className="grid grid-cols-1 sm:grid-cols-[50%_1fr] gap-x-[1ch] gap-y-2 uppercase">
        {items.map(({ title, description }) => {
          return (
            <React.Fragment key={title}>
              <dt
                className={cx(
                  "flex items-center gap-x-[1ch]",
                  "after:h-px after:min-w-8 after:border-t after:flex-1"
                )}
              >
                {title}
              </dt>
              <dd>{description}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    </footer>
  );
}
