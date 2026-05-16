import styles from "./Introduction.module.css";
import Image from "next/image";
import { ExternalLink } from "@/components";

export const Introduction = () => {
  const altText =
    "A photo of a man. He is taking a selfie of himself and looking at the camera. He has pink hair and is wearing a grey jumper with silver necklace. The background is the cityscape of London looking towards the Shard. Tags: man";
  return (
    <section className={styles.introductionContainer}>
      <div className={styles.verticalFlexBox}>
        <h1 className={styles.introductionTitle}>Hi, I&apos;m Joe Gilbert</h1>
        <p className={styles.introductionText}>
          A full-stack developer based in North-West England.
        </p>
        <p className={styles.introductionText}>Busy with 🪴 | 🐈 🐈‍⬛ | 💻</p>
        <br />
        <p className={styles.introductionText}>
          This website was created with TypeScript and NextJs. Check out the
          sourcecode over on my{" "}
          <span>
            <ExternalLink
              href="https://github.com/joeglDev/Personal-dev-website"
              prefetch={false}
            >
              Github
            </ExternalLink>
          </span>
          .
        </p>
      </div>
      <Image
        src="/images/me.jpg"
        alt={altText}
        loading="eager"
        quality={100}
        width={800}
        height={600}
        style={{
          margin: "auto",
          borderRadius: "10%",
          width: "100%",
          height: "auto",
          maxHeight: "600px",
          maxWidth: "800px",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1080px) 100vw, 100vw"
        priority={true}
      />
    </section>
  );
};
