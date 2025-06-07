import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      href: 'https://tigergaming.com/your-referral',
      logo: '/images/tigergaming.png',
      bonus: '100% up to $1,000',
      rakeback: 'VIP'
    },
    {
      name: 'WPT Global',
      href: 'https://wptglobal.com/your-referral',
      logo: '/images/wptglobal.png',
      bonus: '100% up to $3,000',
      rakeback: 'VIP'
    },
    {
      name: 'CoinPoker',
      href: 'https://coinpoker.nl/',
      logo: '/images/coinpoker.png',
      bonus: '150% up to $2,000',
      rakeback: '33%+'
    },
    {
      name: '4Poker',
      href: 'https://4poker.com/your-referral',
      logo: '/images/4poker.png',
      bonus: '400% up to $1,000',
      rakeback: 'Up to 50%'
    },
    {
      name: 'Phenom Poker',
      href: 'https://play.phenompoker.com/register?r=2I3JPR',
      logo: '/images/phenompoker.png',
      bonus: '100% up to $2,500',
      rakeback: 'Up to 35%'
    },
    {
      name: 'iPoker.it Italy',
      href: 'https://ipoker.it/your-referral',
      logo: '/images/ipokerit.png',
      bonus: '100% up to €1,000',
      rakeback: 'VIP'
    },
    {
      name: 'GGPoker',
      href: 'https://ggpoker.com/your-referral',
      logo: '/images/ggpoker.png',
      bonus: '200% up to $600',
      rakeback: '25%+'
    },
    {
      name: 'Unibet',
      href: 'https://unibet.com/your-referral',
      logo: '/images/unibet.png',
      bonus: '100% up to €500',
      rakeback: 'Levels up to 42%'
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Poker Rewards (NL)</title>
        <meta name="description" content="Top poker sites ranked and reviewed, with bonuses & rakeback." />
      </Head>

      <h1>Welcome to Poker Rewards (NL)</h1>
      <p>Click any logo below to visit our partner’s site:</p>

      <div className={styles.grid}>
        {rooms.map(room => (
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
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2>{room.name}</h2>
            <p><strong>Bonus:</strong> {room.bonus}</p>
            <p><strong>Rakeback:</strong> {room.rakeback}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
