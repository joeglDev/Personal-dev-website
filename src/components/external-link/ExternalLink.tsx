"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import styles from "./ExternalLink.module.css";
import Image from "next/image";

interface ExternalLinkProps {
  href: string;
  prefetch: boolean;
  children: ReactNode;
}

export const ExternalLink = ({
  href,
  prefetch,
  children,
}: ExternalLinkProps) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  return (
    <Link
      className={
        hasBeenClicked ? styles.externalLinkClicked : styles.externalLink
      }
      href={href}
      prefetch={prefetch}
      target="href"
      onClick={() => setHasBeenClicked(true)}
    >
      {children}
      <Image
        src={`./external-link${hasBeenClicked ? "-white" : ""}.svg`}
        alt="external link svg icon"
        width={24}
        height={24}
      />
    </Link>
  );
};
