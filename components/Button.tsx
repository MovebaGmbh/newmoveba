import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-800 active:bg-zinc-950",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300",
  ghost:
    "bg-transparent text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200",
};

const sizes = {
  md: "h-11 px-4",
  lg: "h-12 px-5",
} as const;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
};

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

function hasHref(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof (props as { href?: unknown }).href === "string";
}

export default function Button(props: ButtonProps | LinkProps) {
  const { className, variant = "primary", size = "md", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]}${
    className ? ` ${className}` : ""
  }`;

  if (hasHref(props)) {
    const { href, ...rest } = props;

    // Next.js <Link> is great for internal navigation.
    // For external schemes (tel:, mailto:, https://...), we render a plain <a>.
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (!isInternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
