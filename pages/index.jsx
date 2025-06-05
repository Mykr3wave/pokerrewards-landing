export default function Home() {
  const pokerSites = [
    {
      name: "CoinPoker",
      logo: "https://coinpoker.com/favicon.ico",
      description: "Crypto Poker Room with Rakeback, No KYC, Global Access",
      rakeback: "30% Rakeback",
      bonus: "Welcome Bonus Available",
      link: "https://coinpoker.nl",
    },
    {
      name: "GG Poker",
      logo: "https://ggpoker.com/favicon.ico",
      description: "Up to $600 Bonus + Free Tournament Tickets (KSA Licensed)",
      rakeback: "Up to 60%",
      bonus: "$600 Bonus + Tickets",
      link: "#coming-soon",
    },
    {
      name: "Unibet Poker",
      logo: "https://www.unibet.eu/favicon.ico",
      description: "$200 Bonus + Freerolls (KSA Licensed)",
      rakeback: "Up to 30%",
      bonus: "$200 Welcome Bonus",
      link: "#coming-soon",
    },
    {
      name: "Bet365 Poker",
      logo: "https://www.bet365.com/favicon.ico",
      description: "$365 Bonus Offer (KSA Licensed)",
      rakeback: "Varies",
      bonus: "$365 Bonus",
      link: "#coming-soon",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Poker Bonuses for Dutch Players
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Compare the best poker bonuses available for players in the Netherlands. ✅ KSA Licensed or Crypto Options.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {pokerSites.map((site) => (
            <div
              key={site.name}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 hover:shadow-lg transition"
            >
              <img
                src={site.logo}
                alt={`${site.name} logo`}
                className="w-16 h-16 object-contain rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {site.name}
                </h2>
                <p className="text-sm text-gray-500 mb-1">{site.description}</p>
                <div className="text-sm text-gray-700">
                  <strong>Rakeback:</strong> {site.rakeback} <br />
                  <strong>Bonus:</strong> {site.bonus}
                </div>
                <a
                  href={site.link}
                  className="inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-xl"
                >
                  {site.link.includes("coinpoker") ? "Join Now" : "Coming Soon"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-gray-400 mt-12">
          PokerRewards.nl is an independent poker affiliate website. We compare regulated and crypto sites for Dutch users.
        </p>
      </div>
    </main>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      {/* ...content... */}
    </main>
  );
}  <--- Correct
