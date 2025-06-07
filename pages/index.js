// pages/index.js

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const rooms = [
    { name: 'TigerGaming', logo: '/images/tigergaming.png', href: 'https://tigergaming.nl', bonus: '100% up to $1,000', rakeback: 'VIP' },
    { name: 'WPT Global', logo: '/images/wptglobal.png', href: 'https://wptglobal.com', bonus: '100% up to $3,000', rakeback: 'VIP' },
    { name: 'CoinPoker', logo: '/images/coinpoker.png', href: 'https://coinpoker.nl', bonus: '150% up to $2,000', rakeback: '33%+' },
    { name: '4Poker', logo: '/images/4poker.png', href: 'https://4poker.com', bonus: '400% up to $1,000', rakeback: 'Up to 50%' },
    { name: 'Phenom Poker', logo: '/images/phenompoker.png', href: 'https://play.phenompoker.com/register?r=2I3JPR', bonus: '–', rakeback: '–' },
    { name: 'iPoker.it Italy', logo: '/images/ipokerit.png', href: 'https://ipoker.it', bonus: '–', rakeback: '–' },
    { name: 'GGPoker', logo: '/images/ggpoker.png', href: 'https://ggpoker.com', bonus: '–', rakeback: '–' },
    { name: 'Unibet', logo: '/images/unibet.png', href: 'https://unibet.nl', bonus: '–', rakeback: '–' }
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Click any logo to visit our partner’s site" />
      </Head>

      <main style={{ maxWidth: 1024, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Welcome to Poker Rewards (NL)
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Click any logo below to visit our partner’s site:
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {rooms.map((room) => (
            <Link
              key={room.name}
              href={room.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textDecoration: 'none',
                border: '1px solid #eaeaea',
                borderRadius: 8,
                padding: '1rem',
                textAlign: 'center',
                transition: 'box-shadow .2s ease'
              }}
            >
              <div style={{ marginBottom: '0.5rem' }}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  width={160}
                  height={160}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 style={{ margin: '0.5rem 0 0', fontSize: '1rem' }}>{room.name}</h2>
              <p style={{ margin: '0.25rem 0', fontSize: '0.9rem' }}>
                Bonus: {room.bonus}
              </p>
              <p style={{ margin: '0', fontSize: '0.9rem' }}>
                Rakeback: {room.rakeback}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
