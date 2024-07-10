"use client";
import ShowSection from "@/components/feature/shows/ShowSection/ShowSection";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.main} style={{ flexGrow: 1 }}>
      <ShowSection />
    </main>
  );
}
