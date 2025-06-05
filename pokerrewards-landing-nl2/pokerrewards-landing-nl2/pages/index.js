// pages/index.js

import Head from "next/head";
import Image from "next/image";

const sites = [
  {
    name: "TigerGaming",
    href: "https://affiliate.example.com/tigergaming?ref=YOUR_TRACKING_CODE",
    img: "/images/tigergaming.png",
  },
  {
    name: "WPT Global",
    href: "https://affiliate.example.com/wptglobal?ref=YOUR_TRACKING_CODE",
    img: "/images/wptglobal.png",
  },
  {
    name: "CoinPoker",
    href: "https://affiliate.example.com/coinpoker?ref=YOUR_TRACKING_CODE",
    img: "/images/coinpoker.png",
  },
  {
    name: "4Poker",
    href: "https://affiliate.example.com/4poker?ref=YOUR_TRACKING_CODE",
    img: "/images/4poker.png",
  },
  {
    name: "Phenom Poker",
    href: "https://affiliate.example.com/phenompoker?ref=YOUR_TRACKING_CODE",
    img: "/images/phenompoker.png",
  },
  {
    name: "ClubGG",
    href: "https://affiliate.example.com/clubgg?ref=YOUR_TRACKING_CODE",
    img: "/images/clubgg.png",
  },
  {
    name: "iPoker.it Italy",
    href: "https://affiliate.example.com/ipokerit?ref=YOUR_TRACKING_CODE",
    img: "/images/ipokerit.png",
  },
  {
    name: "GGPoker",
    href: "https://affiliate.example.com/ggpoker?ref=YOUR_TRACKING_CODE",
    img: "/images/ggpoker.png",
  },
  {
    name: "Unibet",
    href: "https://affiliate.example.com/unibet?ref=YOUR_TRACKING_CODE",
    img: "/images/unibet.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Poker Rewards NL Landing</title>
        <meta name="description" content="Welcome to Poker Rewards NL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Welcome to Poker Rewards (NL)</h1>
        <p>Click any logo below to visit our partner’s site:</p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          {sites.map((site) => (
            <div key={site.name} style={{ textAlign: "center" }}>
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block" }}
              >
                <Image
                  src={site.img}
                  alt={`${site.name} Logo`}
                  width={200}
                  height={100}
                  priority
                />
              </a>
              <p style={{ marginTop: "0.5rem" }}>{site.name}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
