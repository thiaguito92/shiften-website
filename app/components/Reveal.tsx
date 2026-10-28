"use client";

import { useShown } from "./useShown";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p";
};

export default function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const { ref, shown } = useShown<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`fade ${className ?? ""}`}
      data-shown={shown ? "" : undefined}
      style={{ ["--base" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Rule({ className }: { className?: string }) {
  const { ref, shown } = useShown<HTMLDivElement>();
  return (
    <div
      ref={ref}
      aria-hidden
      className={`rule h-px w-full ${className ?? "bg-line"}`}
      data-shown={shown ? "" : undefined}
    />
  );
}
