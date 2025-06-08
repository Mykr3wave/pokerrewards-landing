import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';

const rooms = [
  {
    name: 'TigerGaming',
    logo: '/images/tigergaming.png',
    href: 'https://www.tigergaming.com/',
    depositBonus: '100% up to $1,000',
    maxRakeback: 'VIP',
  },
  {
    name: 'WPT Global',
    logo: '/images/wptglobal.png',
    href: 'https://wptglobal.com/',
    depositBonus: '100% up to $3,000',
    maxRakeback: 'VIP',
  },
  {
    name: 'CoinPoker',
    logo: '/images/coinpoker.png',
    href: 'https://coinpoker.com/',
    depositBonus: '150% up to $2,000',
    maxRakeback: '33%+',
  },
  {
    name: '4Poker',
    logo: '/images/4poker.png',
    href: 'https://4poker.eu/',
    depositBonus: '400% up to $1,000',
    maxRakeback: 'Up to 50%',
  },
  {
    name: 'Phenom Poker',
    logo: '/images/phenompoker.png',
    href: 'https://phenompoker.com/',
    depositBonus: '150% up to €2,000',
    maxRakeback: 'VIP',
  },
  {
    name: 'iPoker.it Italy',
    logo: '/images/ipokerit.png',
    href: 'https://www.ipoker.it/',
    depositBonus: '100% up to €500',
    maxRakeback: 'VIP',
  },
  {
    name: 'GGPoker',
    logo: '/images/ggpoker.png',
    href: 'https://ggpoker.com/',
    depositBonus: '150% up to $600',
    maxRakeback: 'VIP',
  },
  {
    name: 'Unibet',
    logo: '/images/unibet.png',
    href: 'https://www.unibet.com/',
    depositBonus: '100% up to €1,000',
    maxRakeback: 'VIP',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Best poker deals and rakeback offers" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Poker Rewards (NL)</h1>
        <p className={styles.description}>
          Click any logo below to visit our partner’s site:
        </p>
        <div className={styles.grid}>
          {rooms.map((room) => (
            <div key={room.name} className={styles.card}>
              <a
                href={room.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                <Image
                  src={room.logo}
                  alt={room.name}
                  width={220}
                  height={140}
                  style={{ objectFit: 'contain', background: '#fff', display: 'block', margin: '0 auto' }}
                />
              </a>
              <h2>{room.name}</h2>
              <p><strong>Bonus:</strong> {room.depositBonus}</p>
              <p><strong>Rakeback:</strong> {room.maxRakeback}</p>
              <a
                href={`/info/${room.name.toLowerCase().replace(/[\s\.]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '0.75rem',
                  color: '#0070f3',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  display: 'inline-block'
                }}
              >
                More info about site
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
