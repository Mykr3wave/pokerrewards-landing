import Image from "next/image";
import React from "react";

export default function Home() {
  const pokerSites = [
    {
      name: "CoinPoker",
      logo: "/coinpoker.png",
      description: "Crypto Poker Room with Rakeback, No KYC, Global Access",
      rakeback: "35% Rakeback",
      bonus: "Welcome Bonuses Available",
      url: "https://coinpoker.nl",
      actionText: "Join Now",
      actionStyle: "bg-green-600 hover:bg-green-700 text-white",
      isComingSoon: false,
    },
    {
      name: "GG Poker",
      logo: "/ggpoker.png",
      description: "Up to $600 Bonus + Free Tournament Tickets (KSA Licensed)",
      rakeback: "Up to 60%",
      bonus: "$600 Bonus + Tickets",
      actionText: "Coming Soon",
      actionStyle: "bg-yellow-400 text-white cursor-default",
      isComingSoon: true,
    },
    {
      name: "Unibet Poker",
      logo: "/unibet.png",
      description: "€200 Bonus + Freeroll Tickets (KSA Licensed)",
      rakeback: "Up to 35%",
      bonus: "€200 Welcome Bonus",
      actionText: "Coming Soon",
      actionStyle: "bg-yellow-400 text-white cursor-default",
      isComingSoon: true,
    },
    {
      name: "Bet365 Poker",
      logo: "/bet365.png",
      description: "€365 Bonus Offer (KSA Licensed)",
      rakeback: "Varies",
      bonus: "€365 Bonus",
      actionText: "Coming Soon",
      actionStyle: "bg-yellow-400 text-white cursor-default",
      isComingSoon: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          🎁 Poker Bonuses for Dutch Players
        </h1>
        <p className="text-gray-600 mb-10">
          Compare the best poker rakeback and welcome bonuses available for players in the Netherlands. 🇳🇱 KSA Licensed or Crypto Options.
        </p>

        <div className="grid gap-8">
          {pokerSites.map((site) => (
            <div
              key={site.name}
              className="bg-white rounded-xl shadow p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={site.logo}
                  alt={`${site.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold">{site.name}</h2>
                  <p className="text-sm text-gray-500">{site.description}</p>
                  <ul className="text-sm mt-2 text-gray-700">
                    <li>
                      <strong>Rakeback:</strong> {site.rakeback}
                    </li>
                    <li>
                      <strong>Bonus:</strong> {site.bonus}
                    </li>
                  </ul>
                </div>
              </div>

              {site.isComingSoon ? (
                <span
                  className={`${site.actionStyle} font-semibold px-4 py-2 rounded`}
                >
                  {site.actionText}
                </span>
              ) : (
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${site.actionStyle} font-semibold px-4 py-2 rounded`}
                >
                  {site.actionText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
