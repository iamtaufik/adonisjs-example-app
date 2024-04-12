import { Head, Link } from '@inertiajs/react'

export default function Home(props: { version: number; headline: string }) {
  return (
    <>
      <Head title="Homepage" />
      <div className="container p-6">
        <div className="p-6 bg-blue-100">
          <h1 className="text-2xl font-bold">{props.headline}</h1>
        </div>
        <h2 className="text-2xl font-bold">AdonisJS {props.version} x Inertia x React</h2>
        <div className="flex gap-4">
          <span>Menu: </span>
          <ul className="flex">
            <li className="text-purple-500">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
