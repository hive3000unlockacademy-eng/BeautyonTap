import Link from "next/link";

export function SecondaryButton({
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
      className={`touch-target inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${className}`}
    >
      {children}
    </Link>
  );
}
