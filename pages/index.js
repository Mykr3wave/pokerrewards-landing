import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const rooms = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      url: 'https://tiger-gaming.com/?aff=YOUR_AFF_CODE',
      bonus: '100% up to $1,000',
      rakeback: 'VIP',
    },
    // …other rooms…
  ]

  return (
    <>
      <Head>
        <title>Poker Rewards (NL)</title>
        <meta name="description" content="Click any logo below to visit our partner’s site" />
      </Head>

      <main style={{ maxWidth: 1024, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '.5rem' }}>
          Welcome to Poker Rewards (NL)
        </h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
          Click any logo below to visit our partner’s site:
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {rooms.map((room) => (
            <a
              key={room.name}
              href={room.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                border: '1px solid #eaeaea',
                borderRadius: 8,
                padding: '1.5rem',
                transition: 'box-shadow .2s ease',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ position: 'relative', width: 120, height: 120, marginBottom: '1rem' }}>
                <Image
                  src={room.logo}
                  alt={room.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 style={{ margin: '.5rem 0', fontSize: '1.25rem', textAlign: 'center' }}>
                {room.name}
              </h2>
              <p style={{ margin: '.25rem 0', fontSize: '.9rem', textAlign: 'center' }}>
                <strong>Bonus:</strong> {room.bonus}
              </p>
              <p style={{ margin: '.25rem 0', fontSize: '.9rem', textAlign: 'center' }}>
                <strong>Rakeback:</strong> {room.rakeback}
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
