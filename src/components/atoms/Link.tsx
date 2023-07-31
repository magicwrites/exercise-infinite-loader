import { ReactNode } from "react";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    className="text-sm text-right underline transition-all hover:text-blue-400"
  >
    {children}
  </a>
);
