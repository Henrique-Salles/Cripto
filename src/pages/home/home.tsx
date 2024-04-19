import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";

export function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Digite o nome da moeda..." />
        <button type="submit">
          <BsSearch size={30} color="#fff" />
        </button>
      </form>
    </main>
  );
}
