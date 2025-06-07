// pages/index.js
import Link from 'next/link'

export default function Home() {
  const partners = [
    {
      name: 'TigerGaming',
      logo: '/images/tigergaming.png',
      url: 'https://tigergaming.com/?r=YOURCODE'
    },
    {
      name: 'WPT Global',
      logo: '/images/wptglobal.png',
      url: 'https://wptglobal.com/?r=YOURCODE'
    },
    {
      name: 'CoinPoker',
      logo: '/images/coinpoker.png',
      url: 'https://coinpoker.nl/?r=YOURCODE'
    },
    {
      name: '4Poker',
      logo: '/images/4poker.png',
      url: 'https://4poker.com/?r=YOURCODE'
    },
    {
      name: 'Phenom Poker',
      logo: '/images/phenompoker.png',
      url: 'https://play.phenompoker.com/register?r=2I3JPR'
    },
    {
      name: 'iPoker.it Italy',
      logo: '/images/ipokerit.png',
      url: 'https://ipoker.it/?r=YOURCODE'
    },
    {
      name: 'Unibet',
      logo: '/images/unibet.png',
      url: 'https://unibet.nl/poker/?r=YOURCODE'
    },
    {
      name: 'GGPoker',
      logo: '/images/ggpoker.png',
      url: 'https://ggpoker.com/?r=YOURCODE'
    },
  ]

  return (
    <div className="container">
      <h1>Welcome to Poker Rewards (NL)</h1>
      <p className="subtitle">Click any logo below to visit our partner’s site:</p>

      <div className="grid">
        {partners.map((p) => (
          <Link key={p.name} href={p.url} passHref>
            <a className="card" target="_blank" rel="noopener noreferrer">
              <img src={p.logo} alt={p.name} />
              <div className="label">{p.name}</div>
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 20px;
          background: #f3f4f6;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        h1 {
          text-align: center;
          margin-bottom: 8px;
        }
        .subtitle {
          text-align: center;
          margin-bottom: 32px;
          color: #555;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 24px;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          padding: 16px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .card img {
          max-width: 100%;
          max-height: 100px;
          object-fit: contain;
          margin-bottom: 12px;
        }
        .label {
          margin-top: auto;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}
