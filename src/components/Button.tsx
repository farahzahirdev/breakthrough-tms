import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "secondary-light" | "ghost-light";
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button">;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "ghost-light"
        ? "btn-ghost-light"
        : variant === "secondary-light"
          ? "btn-secondary-light"
          : "btn-secondary";

  const classes = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
