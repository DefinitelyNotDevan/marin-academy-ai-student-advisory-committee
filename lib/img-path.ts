/** Prepends the basePath so images resolve correctly on GitHub Pages */
export const img = (src: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
