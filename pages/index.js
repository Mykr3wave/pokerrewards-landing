import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      rank: 1,
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      href: 'https://tigergaming.com',
      bonus: '100% up to $1,000',
      rakeback: 'VIP'
    },
    {
      rank: 2,
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      href: 'https://wptglobal.com',
      bonus: '100% up to $3,000',
      rakeback: 'VIP'
    },
    {
      rank: 3,
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      href: 'https://coinpoker.nl',
      bonus: '150% up to $2,000',
      rakeback: '33%'
    },
    {
      rank: 4,
      name: '4Poker',
      logo: '/images/4poker.png',
      href: 'https://4poker.com',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%'
    },
    {
      rank: 5,
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      href: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '100% up to $1,500',
      rakeback: '30%'
    },
    {
      rank: 6,
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      href: 'https://ipoker.it',
      bonus: '100% up to €500',
      rakeback: 'VIP'
    },
    {
      rank: 7,
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      href: 'https://ggpoker.com',
      bonus: '200% up to $600',
      rakeback: '30%'
    },
    {
      rank: 8,
      name: 'Unibet',
      logo: '/images/unibet.png',
      href: 'https://unibet.com',
      bonus: '100% up to €500',
      rakeback: 'VIP'
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Poker Rewards (NL)</title>
      </Head>

      <h1 className={styles.heading}>Welcome to Poker Rewards (NL)</h1>
      <p className={styles.subheading}>
        Click any logo below to visit our partner’s site:
      </p>

      <div className={styles.grid}>
        {rooms.map(room => (
          <a
            key={room.rank}
            href={room.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.rank}>#{room.rank}</div>
            <div className={styles.logoWrapper}>
              <Image
                src={room.logo}
                alt={room.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className={styles.title}>{room.name}</h2>
            <div className={styles.info}>
              <span className={styles.bonus}>🔹 Bonus: {room.bonus}</span>
              <span className={styles.rakeback}>↻ Rakeback: {room.rakeback}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
