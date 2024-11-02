import Link from 'next/link'

export function Navigation() {
  const buttonStyle = "focus:outline-none text-white bg-slate-500  hover:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  return (
    <header className="flex w-full justify-center">
      <ul className="flex flex-row gap-2 w-auto mt-2 h-10 m-4 items-center">
        <li><Link href="/charts" className={buttonStyle}>Charts</Link></li>
        <li><Link href="/charts" className={buttonStyle}>Pies</Link></li>
        <li><Link href="/charts" className={buttonStyle}>Dotes</Link></li>
        <li><Link href="/" className={buttonStyle}>Home</Link></li>

      </ul>
    </header>
  );
}
<Link href="/dashboard">Dashboard</Link>
