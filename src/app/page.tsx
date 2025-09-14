import { Competencies } from "@/main-view/competencies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joe Gilbert Full-stack Developer",
  description:
    "A portfolio and living CV for Joe Gilbert Full-stack software developer. Contains a list of competencies in TypeScript, React, NextJs, Python and C# dotNet.",
};

export default function Home() {
  return (
    <>
      <Competencies />
    </>
  );
}
