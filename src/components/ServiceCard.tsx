import Link from "next/link";

export function ServiceCard({ title, href = "#contact" }: { title: string; href?: string }) {
  return (
    <Link
      href={href}
      className="block rounded-xl border-2 border-[var(--rose-panel-light)] bg-[var(--off-white)] px-6 py-4 text-center font-[family-name:var(--font-playfair)] font-medium text-[var(--charcoal)] shadow-sm transition hover:border-[var(--champagne)] hover:shadow-md"
    >
      {title}
    </Link>
  );
}
