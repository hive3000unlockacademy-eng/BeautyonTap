/** Logo path with cache-busting. Bump the version when you update the logo image. */
export const LOGO_SRC = "/beauty on tap logo.png?v=3";

/** Logo variant with pink/dark font for light backgrounds (e.g. quote section on white). */
export const LOGO_SRC_LIGHT = "/beauty on tap logo2.png?v=1";

/** Shared nav links so home and about sidebars link to the same destinations. */
export type NavLink = { label: string; href: string };

export function getNavLinks(options: { forAboutPage?: boolean } = {}): NavLink[] {
  const prefix = options.forAboutPage ? "/" : "";
  return [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: `${prefix}#services` },
    { label: "TEAM", href: `${prefix}#team` },
    { label: "CONTACT", href: `${prefix}#contact` },
  ];
}
