import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      href: 'https://tigergaming.com',
      bonus: '100% up to $1,000',
      rakeback: 'VIP',
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      href: 'https://wptglobal.com',
      bonus: '100% up to $3,000',
      rakeback: 'VIP',
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      href: 'https://coinpoker.nl',
      bonus: '150% up to $2,000',
      rakeback: '33%+',
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      href: 'https://4poker.com',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%',
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      href: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '…',
      rakeback: '…',
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      href: 'https://ipoker.it',
      bonus: '…',
      rakeback: '…',
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      href: 'https://ggpoker.com',
      bonus: '…',
      rakeback: '…',
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      href: 'https://unibet.com',
      bonus: '…',
      rakeback: '…',
    },
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to Poker Rewards (NL)</h1>
        <p className={styles.subtitle}>
          Click any logo below to visit our partner’s site:
        </p>

        <section className={styles.grid}>
          {rooms.map((r) => (
            <a
              key={r.name}
              className={styles.card}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={r.logo}
                  alt={r.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className={styles.roomName}>{r.name}</h2>
              <p className={styles.info}>
                <strong>Bonus:</strong> {r.bonus}
                <br />
                <strong>Rakeback:</strong> {r.rakeback}
              </p>
            </a>
          ))}
        </section>
      </main>
    </>
  )
}
