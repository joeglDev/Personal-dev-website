import { PerlinNoise } from "@/perlin-noise";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perlin noise demo",
  description:
    "A 2d Perlin Noise generator demo which uses NextJs client rendering to create pixelated maps in React.",
  keywords: ["perlin noise", "demo", "2d perlin noise", "react", "nextjs"],
  authors: [
    { name: "Joe Gilbert", url: "https://www.linkedin.com/in/joegilbertdev/" },
  ],
};

export default function Page() {
  return <PerlinNoise />;
}
