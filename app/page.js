import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <h1 className="text-2xl text-gray-600 font-bold">Samsu Components</h1>
      <ul>
        <li>Home</li>
        <li><Link href="/navbar">Navbar</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </main>
  );
}
