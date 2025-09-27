import { CareerHistory, Competencies, Introduction } from "@/main-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joe Gilbert Full-stack Developer",
  description:
    "A portfolio and living CV for Joe Gilbert Full-stack software developer. Contains an introduction, a list of technical competencies, career history and contact information.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Backend",
    "Frontend",
    "dotNet",
    "developer",
    "cv",
    "curriculum vitae",
    "FullStack",
    "software engineer",
    "software developer",
  ],
  authors: [
    { name: "Joe Gilbert", url: "https://www.linkedin.com/in/joegilbertdev/" },
  ],
};

export default function Home() {
  return (
    <>
      <Introduction />
      <CareerHistory />
      <Competencies />
    </>
  );
}
