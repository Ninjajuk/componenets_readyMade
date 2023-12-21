import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-gray-600 font-bold">Yingkiong Store</h1>
      <ul>
        <li>Home</li>
        <li><Link href="/navbar">Navbar</Link></li>
      </ul>
    </main>
  );
}
