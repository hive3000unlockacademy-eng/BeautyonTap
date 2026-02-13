import Image from "next/image";

export function TestimonialCard({
  quote,
  name,
  avatarSrc,
}: {
  quote: string;
  name?: string;
  avatarSrc: string;
}) {
  return (
    <div className="rose-glass text-white hero-cta-text-shadow rounded-2xl p-8 pt-14 relative shadow-lg">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white/30">
        <Image src={avatarSrc} alt={name ?? ""} width={80} height={80} className="object-cover w-full h-full" />
      </div>
      <p className="text-center text-white/95 leading-relaxed">{quote}</p>
      {name && <p className="mt-4 text-center text-sm font-semibold">— {name}</p>}
    </div>
  );
}
