// pages/index.js
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

export default function Home() {
  const rooms = [
    {
      rank: 1,
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      href: 'https://affiliate-link-for-tigergaming.com',
      depositBonus: '100% up to $1 000',
      maxRakeback: 'VIP',
    },
    {
      rank: 2,
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      href: 'https://affiliate-link-for-wptglobal.com',
      depositBonus: '100% up to $3 000',
      maxRakeback: 'VIP',
    },
    {
      rank: 3,
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      href: 'https://coinpoker.nl',
      depositBonus: '150% up to $2 000',
      maxRakeback: '33%+',
    },
    {
      rank: 4,
      name: '4Poker',
      logo: '/images/4poker.png',
      href: 'https://affiliate-link-for-4poker.com',
      depositBonus: '400% up to $1 000',
      maxRakeback: '50%',
    },
    {
      rank: 5,
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      href: 'https://play.phenompoker.com/register?r=2I3JPR',
      depositBonus: '150% up to $3 000',
      maxRakeback: '35%',
    },
    {
      rank: 6,
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      href: 'https://affiliate-link-for-ipokerit.com',
      depositBonus: '€200',
      maxRakeback: '35%',
    },
    {
      rank: 7,
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      href: 'https://affiliate-link-for-ggpoker.com',
      depositBonus: '100% up to $600',
      maxRakeback: '60%',
    },
    {
      rank: 8,
      name: 'Unibet',
      logo: '/images/unibet.png',
      href: 'https://affiliate-link-for-unibet.com',
      depositBonus: '€200',
      maxRakeback: '65%',
    },
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
      </Head>

      <main className={styles.container}>
        <h1>Welcome to Poker Rewards (NL)</h1>
        <p>Click any logo below to visit our partner’s site:</p>

        <div className={styles.grid}>
          {rooms.map(room => (
            <a
              key={room.rank}
              href={room.href}
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
                />
              </div>
              <h2>
                #{room.rank} {room.name}
              </h2>
              <p><strong>First Deposit Bonus:</strong> {room.depositBonus}</p>
              <p><strong>Max Rakeback:</strong> {room.maxRakeback}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
