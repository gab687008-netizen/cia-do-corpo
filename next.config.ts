import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deploy é GitHub Pages, hospedado como project page (não user page) —
  // fica em gab687008-netizen.github.io/cia-do-corpo/, não na raiz. Sem
  // basePath, todo link de CSS/JS/asset apontaria pra raiz errada e a
  // página quebraria visualmente assim que publicada.
  output: "export",
  basePath: "/cia-do-corpo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
