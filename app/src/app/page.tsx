"use client";

import { useState } from "react";
import styles from "./page.module.css";

const shotPrompt =
  "Shot 1 — Medium shot of a beautiful Indian woman with Kiara Advani-esque features, draped in regal traditional attire. She turns her head slowly toward the camera in graceful slow motion. Soft, diffused studio lighting sculpts her face while a luminous gold backdrop glows behind her. Atmosphere: elegant, royal, refined. Generate with Veo 3.1 Fast.";

const promptSections = [
  {
    label: "Subject & Framing",
    description:
      "Medium shot of a poised Indian woman inspired by Kiara Advani's features, highlighted by intricate jewelry and rich textiles.",
  },
  {
    label: "Motion",
    description:
      "Slow, continuous head turn toward the viewer captured in cinematic slow motion for graceful emphasis.",
  },
  {
    label: "Lighting & Background",
    description:
      "Soft studio key light with warm edge highlights, shimmering gold backdrop with subtle bokeh to convey depth.",
  },
  {
    label: "Mood",
    description: "Elegant, royal, contemporary luxury balanced with timeless poise.",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shotPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.badge}>Veo 3.1 Fast</span>
          <h1 className={styles.title}>Cinematic Prompt — Royal Portrait</h1>
          <p className={styles.subtitle}>
            Ready-to-use shot direction crafted for a medium-shot glamour moment with a
            Kiara Advani-inspired muse.
          </p>
        </header>

        <section className={styles.promptCard}>
          <div className={styles.promptHeader}>
            <h2 className={styles.promptTitle}>Shot 1</h2>
            <button className={styles.copyButton} onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>
          <p className={styles.promptBody}>{shotPrompt}</p>
        </section>

        <section className={styles.detailsGrid}>
          {promptSections.map((section) => (
            <article key={section.label} className={styles.detailCard}>
              <h3 className={styles.detailHeading}>{section.label}</h3>
              <p className={styles.detailCopy}>{section.description}</p>
            </article>
          ))}
        </section>

        <section className={styles.meta}>
          <h2 className={styles.metaHeading}>Generation Notes</h2>
          <ul className={styles.metaList}>
            <li>Use 24–30 fps playback to accentuate the slow-turn elegance.</li>
            <li>Bias toward warm color grading to amplify the gold backdrop.</li>
            <li>Enable facial detail enhancement for luminous skin rendering.</li>
            <li>Keep camera locked off to maintain the regal focus on the subject.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
