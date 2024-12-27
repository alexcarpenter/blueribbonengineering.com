export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-x-[1ch] italic uppercase">
      <span aria-hidden>{"/*"}</span>
      {children} <span aria-hidden className="h-px flex-1 border-t" />
      <span aria-hidden>{"*/"}</span>
    </h2>
  );
}
