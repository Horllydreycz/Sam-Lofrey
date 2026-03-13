import * as React from "react";
const cn = (...classes) => classes.filter(Boolean).join(" ");

const BADGE_BASE_CLASS =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const BADGE_VARIANTS = {
  default: "border-transparent bg-black text-white hover:bg-black/80",
  secondary: "border-transparent bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
  destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
  outline: "border-zinc-300 text-zinc-900",
};

const badgeVariants = ({ variant = "default" } = {}) => {
  return cn(
    BADGE_BASE_CLASS,
    BADGE_VARIANTS[variant] || BADGE_VARIANTS.default,
  );
};

function Badge({ className, variant = "default", ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge };
