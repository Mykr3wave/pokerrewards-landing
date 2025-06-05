// pages/index.js

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Poker Rewards Landing</title>
        <meta name="description" content="Welcome to Poker Rewards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Welcome to Poker Rewards</h1>
        <p>Check out our partner sites below:</p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            marginTop: "2rem",
            flexWrap: "wrap"
          }}
        >
          {/* Bet365 logo */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/bet365.png"
              alt="Bet365 Logo"
              width={200}
              height={100}
              priority
            />
            <p>Bet365</p>
          </div>

          {/* CoinPoker logo */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/coinpoker.png"
              alt="CoinPoker Logo"
              width={200}
              height={100}
              priority
            />
            <p>CoinPoker</p>
          </div>

          {/* GGPoker logo */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/ggpoker.png"
              alt="GGPoker Logo"
              width={200}
              height={100}
              priority
            />
            <p>GGPoker</p>
          </div>

          {/* Unibet logo */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="/images/unibet.png"
              alt="Unibet Logo"
              width={200}
              height={100}
              priority
            />
            <p>Unibet</p>
          </div>
        </div>
      </main>
    </>
  );
}
