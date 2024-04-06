import styles from "./page.module.css";
import Server from "../app/server/page"

export default function Home() {
  return (
    <main className={styles.main}>
        <p>Your current plant inventory is listet down below. To add more plants to your inventory please fill out the form under your current plant inventory.</p>
        <div className={styles.card}>
 
        <Server />

        </div>

        <a
          href="/otherList"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        > otherLists Page</a>


    </main>
  );
}
