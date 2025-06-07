import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      link: 'https://tigergaming.com',
      bonus: '100% up to $1,000',
      rakeback: 'VIP'
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      link: 'https://wptglobal.com',
      bonus: '100% up to $3,000',
      rakeback: 'VIP'
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      link: 'https://coinpoker.nl',
      bonus: '150% up to $2,000',
      rakeback: '33%+'
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      link: 'https://4poker.com',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%'
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      link: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '—',
      rakeback: '—'
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      link: 'https://ipoker.it',
      bonus: '—',
      rakeback: '—'
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      link: 'https://ggpoker.com',
      bonus: '—',
      rakeback: '—'
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      link: 'https://unibet.com',
      bonus: '—',
      rakeback: '—'
    },
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Ranked list of poker sites" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Poker Rewards (NL)</h1>
        <p className={styles.intro}>
          Click any logo below to visit our partner’s site and see their bonus/rakeback.
        </p>

        <div className={styles.grid}>
          {rooms.map((room, i) => (
            <a
              key={i}
              href={room.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h2 className={styles.roomName}>{room.name}</h2>
              <p className={styles.bonus}>Bonus: {room.bonus}</p>
              <p className={styles.rakeback}>Rakeback: {room.rakeback}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
