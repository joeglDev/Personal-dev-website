import { PerlinNoise } from "@/perlin-noise";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perlin noise demo",
  description:
    "A 2d Perlin Noise generator which uses NextJs client rendering to create pixelated maps in React.",
};

export default function Page() {
  return <PerlinNoise />;
}
