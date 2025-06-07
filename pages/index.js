import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      url: 'https://tiger.gaming/your-affiliate-code',
      bonus: '100% up to $1,000',
      rakeback: 'VIP',
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      url: 'https://wptglobal.com/your-affiliate-code',
      bonus: '100% up to $3,000',
      rakeback: 'VIP',
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      url: 'https://coinpoker.nl',
      bonus: '150% up to $2,000',
      rakeback: '33%+',
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      url: 'https://4poker.com/your-affiliate-code',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%',
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      url: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '–',
      rakeback: '–',
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      url: 'https://ipoker.it/your-affiliate-code',
      bonus: '–',
      rakeback: '–',
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      url: 'https://ggpoker.com/your-affiliate-code',
      bonus: '–',
      rakeback: '–',
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      url: 'https://unibet.com/your-affiliate-code',
      bonus: '–',
      rakeback: '–',
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

        <div className={styles.grid}>
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  width={200}
                  height={200}
                  objectFit="contain"
                />
              </div>
              <h2 className={styles.roomName}>{room.name}</h2>
              <div className={styles.info}>
                <span>Bonus: {room.bonus}</span>
                <span>Rakeback: {room.rakeback}</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
