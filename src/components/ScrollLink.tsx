interface ScrollLinkProps {
  section: string;
}

export default function ScrollLink({ section }: ScrollLinkProps) {
  return (
    <li>
      <a href={section}>{section}</a>
    </li>
  );
}
