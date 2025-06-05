import React from "react";

export default function Home() {
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
          {/* CoinPoker */}
          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Notice the full filename: coinpoker.png.jpg */}
              <img
                src="/coinpoker.png.jpg"
                alt="CoinPoker logo"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <h2 className="text-xl font-semibold">CoinPoker</h2>
                <p className="text-sm text-gray-500">
                  Crypto Poker Room with Rakeback. No KYC. Global Access.
                </p>
                <ul className="text-sm mt-2 text-gray-700">
                  <li>
                    <strong>Rakeback:</strong> 35% Rakeback
                  </li>
                  <li>
                    <strong>Bonus:</strong> Welcome Bonuses Available
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://coinpoker.nl"
              className="bg-green-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </div>

          {/* GG Poker */}
          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Full filename: ggpoker.png.png */}
              <img
                src="/ggpoker.png.png"
                alt="GGPoker logo"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <h2 className="text-xl font-semibold">GG Poker</h2>
                <p className="text-sm text-gray-500">
                  Up to $600 Bonus + Free Tournament Tickets (KSA Licensed)
                </p>
                <ul className="text-sm mt-2 text-gray-700">
                  <li>
                    <strong>Rakeback:</strong> Up to 60%
                  </li>
                  <li>
                    <strong>Bonus:</strong> $600 Bonus + Tickets
                  </li>
                </ul>
              </div>
            </div>
            <span className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded">
              Coming Soon
            </span>
          </div>

          {/* Unibet Poker */}
          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Full filename: unibet.png.png */}
              <img
                src="/unibet.png.png"
                alt="Unibet Poker logo"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <h2 className="text-xl font-semibold">Unibet Poker</h2>
                <p className="text-sm text-gray-500">$200 Bonus + Freerolls (KSA Licensed)</p>
                <ul className="text-sm mt-2 text-gray-700">
                  <li>
                    <strong>Rakeback:</strong> Up to 35%
                  </li>
                  <li>
                    <strong>Bonus:</strong> $200 Welcome Bonus
                  </li>
                </ul>
              </div>
            </div>
            <span className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded">
              Coming Soon
            </span>
          </div>

          {/* Bet365 Poker */}
          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Full filename: bet365.png.png */}
              <img
                src="/bet365.png.png"
                alt="Bet365 Poker logo"
                className="w-16 h-16 object-contain"
              />
              <div className="text-left">
                <h2 className="text-xl font-semibold">Bet365 Poker</h2>
                <p className="text-sm text-gray-500">$365 Bonus Offer (KSA Licensed)</p>
                <ul className="text-sm mt-2 text-gray-700">
                  <li>
                    <strong>Rakeback:</strong> Varies
                  </li>
                  <li>
                    <strong>Bonus:</strong> $365 Bonus
                  </li>
                </ul>
              </div>
            </div>
            <span className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
