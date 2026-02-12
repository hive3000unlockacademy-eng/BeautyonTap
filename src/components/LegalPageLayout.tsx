import Link from "next/link";

export function LegalPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--charcoal-dark)]">
      <div className="w-full bg-[var(--off-white)] min-h-screen">
        <header className="border-b border-[var(--rose-panel-light)]/30 bg-[var(--off-white)]">
          <div className="w-full max-w-4xl mx-auto px-6 py-4 md:px-10 lg:px-12 flex items-center justify-between">
            <Link
              href="/"
              className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-[var(--charcoal)] hover:text-[var(--rose-panel)] transition"
            >
              Beauty on Tap Salon
            </Link>
            <Link
              href="/"
              className="text-sm text-[var(--charcoal-muted)] hover:text-[var(--charcoal)] transition"
            >
              ← Back to Home
            </Link>
          </div>
        </header>
        <main className="w-full max-w-4xl mx-auto px-6 py-10 md:px-10 lg:px-12 pb-16">
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-[var(--charcoal)] uppercase tracking-tight border-b border-[var(--rose-panel-light)]/40 pb-4 mb-8">
            {title}
          </h1>
          <div className="prose prose-neutral max-w-none text-[var(--charcoal)] text-sm md:text-base leading-relaxed space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
