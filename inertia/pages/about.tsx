import { Head } from '@inertiajs/react'
import User from '#models/user'
const About = ({ users }: { users: User[] }) => {
  return (
    <>
      <Head title="About" />
      <div>
        <h1 className="text-2xl font-bold underline">About Page</h1>
        <ul className="flex gap-6">
          {
            // use tailwindcss to style the list like cards
            users.map((user) => (
              <li key={user.id} className="p-4 m-4 bg-gray-100 rounded-lg w-max">
                <p className="text-lg font-bold">{user.fullName}</p>
                <p className="text-gray-500">{user.email}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default About
