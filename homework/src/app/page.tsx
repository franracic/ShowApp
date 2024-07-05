import { ShowDetails } from "@/components/feature/shows/ShowDetails/ShowDetails";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowDetails
        title="The Sopranos"
        description="Drama series that follows the life of mob boss Tony Soprano as he navigates the challenges of leading a criminal organization while managing his personal and family issues."
        averageRating={4.5}
      />
    </main>
  );
}
