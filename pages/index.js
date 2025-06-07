// pages/index.js
import Head from 'next/head'
import React from 'react'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      img: '/images/tigergaming.png',
      url: 'https://tiger-gaming.com/?r=YOUR_AFFILIATE_CODE'
    },
    {
      name: 'WPT Global',
      img: '/images/wptglobal.png',
      url: 'https://wptglobal.com/?r=YOUR_AFFILIATE_CODE'
    },
    {
      name: 'CoinPoker',
      img: '/images/coinpoker.png',
      url: 'https://coinpoker.nl'
    },
    {
      name: '4Poker',
      img: '/images/4poker.png',
      url: 'https://4poker.com/?r=YOUR_AFFILIATE_CODE'
    },
    {
      name: 'Phenom Poker',
      img: '/images/phenompoker.png',
      url: 'https://play.phenompoker.com/register?r=2I3JPR'
    },
    {
      name: 'iPoker.it Italy',
      img: '/images/ipokerit.png',
      url: 'https://ipoker.it/?r=YOUR_AFFILIATE_CODE'
    },
    {
      name: 'GGPoker',
      img: '/images/ggpoker.png',
      url: 'https://ggpoker.com/?r=YOUR_AFFILIATE_CODE'
    },
    {
      name: 'Unibet',
      img: '/images/unibet.png',
      url: 'https://unibet.com/?r=YOUR_AFFILIATE_CODE'
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
            marginTop: '2rem',
          }}
        >
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <img
                src={room.img}
                alt={room.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              />
              <div style={{ marginTop: '0.5rem', fontWeight: 500 }}>
                {room.name}
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
