import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      url: 'https://tiger-gaming.com/?aff=YOUR_AFF_CODE',
      bonus: '100% up to $1,000',
      rakeback: 'VIP',
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      url: 'https://www.worldpokertour.com/?aff=YOUR_AFF_CODE',
      bonus: '100% up to $3,000',
      rakeback: 'VIP',
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      url: 'https://coinpoker.nl/?r=YOUR_AFF_CODE',
      bonus: '150% up to $2,000',
      rakeback: '33%+',
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      url: 'https://4poker.com/?aff=YOUR_AFF_CODE',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%',
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      url: 'https://play.phenompoker.com/register?r=2I3JPR',
      bonus: '???',      // fill in
      rakeback: '???',   // fill in
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      url: 'https://ipoker.it/?aff=YOUR_AFF_CODE',
      bonus: '???',
      rakeback: '???',
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      url: 'https://www.ggpoker.com/?aff=YOUR_AFF_CODE',
      bonus: '???',
      rakeback: '???',
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      url: 'https://www.unibet.com/poker?aff=YOUR_AFF_CODE',
      bonus: '???',
      rakeback: '???',
    },
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Click any logo to visit our partner’s site" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to Poker Rewards (NL)</h1>
        <p className={styles.intro}>Click any logo below to visit our partner’s site:</p>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className={styles.subtitle}>{room.name}</h2>
              <p className={styles.detail}>
                <strong>Bonus:</strong> {room.bonus}
              </p>
              <p className={styles.detail}>
                <strong>Rakeback:</strong> {room.rakeback}
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
