import Head from 'next/head'
import React from 'react'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      img: '/images/tigergaming.png',
      url: 'https://tiger-gaming-affiliate-link.example.com'
    },
    {
      name: 'WPT Global',
      img: '/images/wptglobal.png',
      url: 'https://wpt-global-affiliate-link.example.com'
    },
    {
      name: 'CoinPoker',
      img: '/images/coinpoker.png',
      url: 'https://coinpoker-affiliate-link.example.com'
    },
    {
      name: '4Poker',
      img: '/images/4poker.png',
      url: 'https://4poker-affiliate-link.example.com'
    },
    {
      name: 'Phenom Poker',
      img: '/images/phenompoker.png',
      url: 'https://phenompoker-affiliate-link.example.com'
    },
    {
      name: 'ClubGG',
      img: '/images/clubgg.png',
      url: 'https://clubgg-affiliate-link.example.com'
    },
    {
      name: 'iPoker.it Italy',
      img: '/images/ipokerit.png',
      url: 'https://ipokerit-affiliate-link.example.com'
    },
    {
      name: 'GGPoker',
      img: '/images/ggpoker.png',
      url: 'https://ggpoker-affiliate-link.example.com'
    },
    {
      name: 'Unibet',
      img: '/images/unibet.png',
      url: 'https://unibet-affiliate-link.example.com'
    },
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Welcome to Poker Rewards (NL)</h1>
        <p>Click any logo below to visit our partner’s site:</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            marginTop: '2rem'
          }}
        >
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
            >
              <img
                src={room.img}
                alt={room.name}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
              />
              <div style={{ marginTop: '0.5rem', fontWeight: '500' }}>{room.name}</div>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
