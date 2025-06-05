export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Poker Bonuses for Dutch Players
          <br />
          <span className="text-gray-400 text-2xl">
            Poker bonussen voor Nederlandse spelers
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-10">
          Compare the best welcome bonuses from licensed online poker sites.
          <br />
          Vergelijk de beste welkomstbonussen van legale online pokersites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-700 p-6 rounded-xl bg-gray-900">
            <h2 className="text-2xl font-bold mb-2">GG Poker</h2>
            <p className="mb-4">€100 in rewards + Freeroll Tickets<br />KSA Licensed</p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
            >
              Coming Soon
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl bg-gray-900">
            <h2 className="text-2xl font-bold mb-2">Unibet Poker</h2>
            <p className="mb-4">€200 Bonus + Freeroll Tickets<br />KSA Licensed</p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
            >
              Coming Soon
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl bg-gray-900">
            <h2 className="text-2xl font-bold mb-2">Bet365 Poker</h2>
            <p className="mb-4">€365 Bonus Offer<br />KSA Licensed</p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
            >
              Coming Soon
            </a>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl bg-gray-900">
            <h2 className="text-2xl font-bold mb-2">CoinPoker</h2>
            <p className="mb-4">Crypto Poker with Rakeback<br />No KYC, Global Access</p>
            <a
              href="https://coinpoker.nl"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
