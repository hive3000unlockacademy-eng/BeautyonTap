import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about">
      {/* 1. About hero: blurred image + heading + intro (no sidebar here; main hero has it) */}
      <div className="relative flex flex-col lg:flex-row min-h-[55vh] lg:min-h-[500px]">
        <div className="relative flex-1 min-h-[45vh] lg:min-h-0 flex items-center justify-center py-12 lg:py-16">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80"
              alt="Beauty on Tap Salon interior"
              fill
              className="object-cover object-center blur-[5px] scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" aria-hidden />
          </div>
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase tracking-tight">
              About Beauty on Tap
            </h2>
            <p className="mt-6 text-white/95 text-base lg:text-lg leading-relaxed">
              Centrally located, Beauty on Tap offers a variety of hair care, nail care, and skin care services delivered with kindness and professionalism. Family owned and operated, our atmosphere is warm, inviting, and professional. We strive to deliver timely, professional services with a flair for style and energy.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Three-image gallery strip — no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
            alt="Salon products and reception"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&q=80"
            alt="Salon styling stations"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
            alt="Salon interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* 3. Quote section — white background, centered */}
      <div className="bg-white py-12">
        <div className="w-full text-center">
          <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold text-[var(--charcoal)]">
            [Your quote or tagline]
          </p>
          <p className="mt-3 text-[var(--charcoal-muted)] text-sm md:text-base">
            [Optional subline or remove this block if you prefer.]
          </p>
        </div>
      </div>

      {/* 4. Our Story — rose gold background, logo, heading, paragraphs */}
      <div className="rose-glass text-white">
        <div className="max-w-3xl mx-auto pt-12 pb-8">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden hero-cta-backdrop flex items-center justify-center p-2">
              <Image src="/beauty on tap logo.png" alt="Beauty on Tap Salon logo" width={128} height={128} className="object-contain logo-img" />
            </div>
          </div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold uppercase tracking-tight text-center">
            Our Story
          </h3>
          <div className="mt-6 space-y-4 text-white/95 text-left text-sm md:text-base leading-relaxed">
            <p>
              [Placeholder: Your salon story and founder. e.g. Beauty on Tap was founded by… We bring a fresh perspective while maintaining the foundation of the salon.]
            </p>
            <p>
              [Placeholder: Team or history — e.g. From receptionist to stylist to owner, our team has grown with the same passion for service.]
            </p>
            <p>
              [Placeholder: Third paragraph if needed — e.g. Today we welcome every client with the same warmth and professionalism.]
            </p>
          </div>
        </div>
        {/* White band with "Meet Our Team" button — outline style */}
        <div className="bg-white py-8 flex justify-center">
          <Link
            href="#team"
            className="inline-flex items-center justify-center rounded-md border-2 border-[var(--rose-panel-light)] bg-white px-6 py-3 text-sm font-medium text-[var(--rose-panel)] hover:bg-[var(--off-white)] transition"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
