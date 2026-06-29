import type { CSSProperties, ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const style = {
    ["--reveal-delay" as string]: `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div className={`reveal${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
