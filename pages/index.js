import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PokerRewards - Best Poker Bonuses 2025</title>
        <meta name="description" content="Claim the best online poker bonuses and rewards in 2025. Compare offers and start playing smarter." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PokerRewards</h1>
        <p className={styles.description}>
          Discover the top poker bonuses and promotions available in 2025.
        </p>

        <div className={styles.grid}>
          <a href="https://ggpoker.com/promotions/welcome-bonus/" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>GGPoker &rarr;</h2>
            <p>Up to $100 in rewards or a matched deposit bonus. No code needed.</p>
          </a>

          <a href="https://www.pokernews.com/online-poker-bonuses.htm" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>PokerNews &rarr;</h2>
            <p>Latest bonus codes and no deposit offers for top poker sites.</p>
          </a>

          <a href="https://worldpokerdeals.com/blog/betonline-poker-bonus-code" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>BetOnline &rarr;</h2>
            <p>100% poker welcome bonus up to $1,000 with code POKER1000.</p>
          </a>

          <a href="https://www.hollandcasino.nl/promoties/poker-welcome-offer" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Holland Casino &rarr;</h2>
            <p>Receive up to €250 bonus or a welcome package worth €100.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 PokerRewards. All rights reserved.</p>
      </footer>
    </div>
  );
}
