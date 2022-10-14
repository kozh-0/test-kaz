import Link from "next/link";


export default function Header() {
  return (
    <header>
        <div className="header_inner container">
            <Link href="/">Главная</Link>
            <Link href={`/mongoDB`}>MongoDB</Link>
        </div>
    </header>
  )
}
