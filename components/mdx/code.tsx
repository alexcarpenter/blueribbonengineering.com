import { codeToHtml, createCssVariablesTheme, createHighlighter } from "shiki";

interface Props {
  children: string;
  className: string;
}

const cssVariablesTheme = createCssVariablesTheme({
  name: "css-variables",
  variablePrefix: "--shiki-",
  variableDefaults: {},
  fontStyle: true,
});

const highlighter = await createHighlighter({
  langs: ["tsx", "css"],
  themes: [cssVariablesTheme],
});

export async function Code(props: Props) {
  const lang = getLang(props.className);
  const output = await highlighter.codeToHtml(props.children, {
    lang,
    theme: "css-variables",
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: output }}
      className="bg-neutral-900"
    />
  );
}

const getLang = (input: string) => {
  const regex = /language-(\w+)/;
  const match = input.match(regex);
  return match ? match[1] : "";
};
