import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl text-center md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href='https://www.instagram.com/cityrunner3021/' target="_blank">
        <a className="hover:underline" >City Runner 3021</a>
      </Link>
    </h2>
  )
}
