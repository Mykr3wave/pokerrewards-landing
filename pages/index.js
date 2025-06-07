import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      href: 'https://tourneys.tigergaming.net/signup?affiliate=PRNL',
      bonus: '100% up to $1,000',
      rakeback: 'VIP'
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      href: 'https://join.wptglobal.com/?wpd=prnl',
      bonus: '100% up to $3,000',
      rakeback: 'VIP'
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      href: 'https://coinpoker.nl',
      bonus: '150% up to $2,000',
      rakeback: '33%+'
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      href: 'https://4poker.com/pr?aff=PRNL',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%'
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      href: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '100% up to $800',
      rakeback: 'VIP'
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      href: 'https://ipoker.it?ref=PRNL',
      bonus: '100% up to €1,000',
      rakeback: 'VIP'
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      href: 'https://ggpoker.eu/?bonus=PRNL',
      bonus: '200% up to $600',
      rakeback: 'Up to 30%'
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      href: 'https://unibet.nl/poker?affiliate=PRNL',
      bonus: '100% up to €1,000',
      rakeback: '5–25%'
    }
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Compare top poker rooms in the Netherlands – bonuses, rakeback & signup links." />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to Poker Rewards (NL)</h1>
        <p className={styles.intro}>Click any logo below to visit our partner’s site:</p>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={styles.roomName}>{room.name}</h2>
              <p className={styles.bonus}>Bonus: {room.bonus}</p>
              <p className={styles.rakeback}>Rakeback: {room.rakeback}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
