import { CareerHistory, Competencies, Introduction } from "@/main-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joe Gilbert Full-stack Developer",
  description:
    "A portfolio and living CV for Joe Gilbert Full-stack software developer. Contains an introduction, a list of technical competencies, career history and contact information.",
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
