export default function CryptoRanking() {
  return (
    <div style={{ maxWidth: 650, margin: '3rem auto', padding: '2rem', border: '1px solid #eee', borderRadius: 12, background: '#fff', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Top 3 Crypto Poker Sites</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem', background: '#fafcff', boxShadow: '0 2px 12px 0 #0001' }}>
        <h2>1. CoinPoker</h2>
        <strong>Pros:</strong>
        <ul>
          <li>Instant crypto deposits and withdrawals</li>
          <li>Soft games & privacy features</li>
          <li>Unique promotions & good rakeback</li>
        </ul>
        <strong>Cons:</strong>
        <ul>
          <li>Crypto only (no fiat)</li>
          <li>Smaller player pool than GG</li>
        </ul>
      </div>
      <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: '1.5rem', marginBottom: '1.5rem', background: '#fafcff', boxShadow: '0 2px 12px 0 #0001' }}>
        <h2>2. GGPoker</h2>
        <strong>Pros:</strong>
        <ul>
          <li>Largest tournament selection</li>
          <li>Modern software, mobile app</li>
          <li>Supports multiple cryptocurrencies</li>
        </ul>
        <strong>Cons:</strong>
        <ul>
          <li>Crypto cashouts can be slow</li>
          <li>Tougher games at higher stakes</li>
        </ul>
      </div>
      <div style={{ border: '1px solid #ddd', borderRadius: 10, padding: '1.5rem', background: '#fafcff', boxShadow: '0 2px 12px 0 #0001' }}>
        <h2>3. Phenom Poker</h2>
        <strong>Pros:</strong>
        <ul>
          <li>Very high rakeback deals</li>
          <li>Tight-knit community</li>
          <li>Easy crypto payments</li>
        </ul>
        <strong>Cons:</strong>
        <ul>
          <li>Small site, less traffic</li>
          <li>Fewer tournaments than GG or CoinPoker</li>
        </ul>
      </div>
    </div>
  );
}
