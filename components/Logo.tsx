import Link from "next/link";

type Props = {
  subtitle?: string;
  ariaLabel?: string;
};

export default function Logo({
  subtitle = "Dienstleistungen",
  ariaLabel = "MOVEBA Startseite",
}: Props) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20"
      aria-label={ariaLabel}
    >
      <span className="text-lg font-semibold tracking-tight">MOVEBA</span>
      <span className="hidden text-sm text-zinc-500 sm:inline">
        {subtitle}
      </span>
    </Link>
  );
}
