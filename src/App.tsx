import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card";
import { getCactusList } from "./api";

const App = () => {
  const [products, setProducts] = useState<
    { id: number; name: string; description: string; price: number }[]
  >([]);

  useEffect(() => {
    getCactusList()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
          <a href="/">
            <h1>Product catalog</h1>
          </a>
        </div>
        <div className={styles.brand}>
          <p className={styles.brandText}>
            Green companions <br />
            for every space
          </p>
        </div>
      </header>
      <main>
        <section className={styles.grid}>
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
