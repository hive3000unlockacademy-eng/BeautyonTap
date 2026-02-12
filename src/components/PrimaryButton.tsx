import Link from "next/link";

export function PrimaryButton({
  href = "#contact",
  children,
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`touch-target inline-flex items-center justify-center rounded-md bg-[var(--champagne)] px-6 py-3 text-sm font-medium text-white shadow-md shadow-black/10 transition hover:bg-[var(--champagne-light)] focus:outline-none focus:ring-2 focus:ring-[var(--champagne)] focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}
